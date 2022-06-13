import { Formik } from "formik";
import React, { useState, useEffect } from "react";
import { NewButton } from "../Button";
import { NewInputForm } from "../Input";
import { MainModal } from "../MainModal";
import { useData } from "../../Context/dataContext";
import { useMutation } from "@apollo/client";
import { JOIN_COMMUNITY } from "../../Graphql/Mutations/JoinCommunityMutations";
import { CREATE_FORUM } from "../../Graphql/Mutations/CreateForumMutations";
import { EditCommunity } from "../EditCommunity";
import * as S from "./communityDetail.style";
import { initialValues } from "./Dados";
import {closeModal, openModal} from "../../Store/rootSlice";
import { useDispatch, useSelector } from 'react-redux';
import {ModalUploadCommunity} from "../ProfileAside/ModalUploadCommunity";
import Modal from "react-modal";
import {UploadImageCommunity} from "../UploadCommunity";
import './styles.css';
export const CommunityDetail = ({
  id,
  title,
  imgsrc,
  categoryEnum,
  creatAt,
  owner,
  isowner,
  description,
  members,
  children,
}) => {
  const [show, setShow] = useState(false);
  const [memberList, setMemberList] = useState([]);
  const [isMember, setIsMember] = useState([]);
  const [nameValidate, setNameVal] = useState(false);
  const [descValidate, setDescVal] = useState(false);
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const { user } = useData();
  const checkIsMember = memberList.find((u) => u.id === user.id);
  const [createForum,] = useMutation(CREATE_FORUM);
  useEffect(() => {
    setMemberList(members);
    setIsMember(checkIsMember);
  }, [memberList, members, checkIsMember]);

  const isOpen = useSelector((state) => state.IsOpen);
  const dispatch = useDispatch();
  const handleModalOpen = () => {
    dispatch(openModal());
  };
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handledCreateTopico = (values, e) => {
      if (values.title.trim().split('').length < 5) {
        setNameVal(true);
        return
      }
      ;
      setNameVal(false);
      if (values.description.trim().split('') < 2) {
        setDescVal(true);
        return
      }
      ;


        setDescVal(false);
      createForum({
        variables: {
          input: {
            name: values.title,
            description: values.description,
            community: id,
            category: 'DIVERSOS',
            logo: 'https://img.freepik.com/free-vector/flat-design-no-photo-sign_23-2149271199.jpg?w=996&t=st=1654375825~exp=1654376425~hmac=7eaad2883abb5b372e581161b19d84f9b0efba1669fbb08271f8c2f6bfae1f63',

          },
        },
      });

      window.location.reload(false);
    };

    const [joinCommunity, {loading, error}] = useMutation(JOIN_COMMUNITY);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error.message}</p>;

    const handleJoin = async (e) => {
      try {
        e.preventDefault();
        if (checkIsMember === undefined) {
          await joinCommunity({
            variables: {
              communityId: id,
            },
          });
          setIsMember(true);
        }
      } catch (error) {
        return error.message;
      }
    };
    return (
        <>
          <S.MainSection>
            <S.DivTitle>
              <h1>{title}</h1>
            </S.DivTitle>
            <hr/>
            <S.DivContent>
              <div className="img-container">
                <img src={imgsrc} alt="" onClick={() => setIsOpen(true)}/>
              </div>
              <Modal id="modal"
                  isOpen={modalIsOpen} onRequestClose={() => setIsOpen(false)}>
                  <UploadImageCommunity/>


                  <button id= "btn" onClick={() => setIsOpen(false)}>X</button>

              </Modal>

              <div className="infos">
                <ul>
                  <li>
                    <span>Categoria:</span> {categoryEnum}
                  </li>
                  <li>
                    <span>Criada em:</span> {creatAt}
                  </li>
                  <li>
                    <span>Proprietário:</span> {owner}
                  </li>
                  <li>

                  </li>
                </ul>
                  <div id= "button">
                    <NewButton size="sm"  onClick={() => setIsOpen(true)}>
                        Adicionar Nova Foto
                    </NewButton>
                  </div>

                {/*{isowner && <EditCommunity />}*/}
                {<EditCommunity/>}

              </div>
            </S.DivContent>
            <hr/>
            <S.DivDescription>
              <span>Descrição:</span>
              <p>{description}</p>
              <div>
                {!isMember && (
                    <NewButton size="sm" onClick={handleJoin}>
                      Juntar-se a Comunidade
                    </NewButton>
                )}
              </div>
            </S.DivDescription>

            <hr/>
            {isMember && (
                <S.DivForum>
                  <div className="top-forum">
                    <span>Fórum</span>
                    <NewButton size="sm" onClick={handleShow}>
                      Criar Tópico
                    </NewButton>
                  </div>
                  <div className="body-forum">{children}</div>
                </S.DivForum>
            )}

            <MainModal show={show} close={handleClose} title="Novo Tópico">
              <Formik initialValues={initialValues} onSubmit={handledCreateTopico}>
                {({handleSubmit, handleChange, values, touched, errors}) => (

                    <S.FormContainer>
                      <NewInputForm
                          name="title"
                          label="Título"
                          value={values.title}
                          onChange={handleChange}
                          isValid={touched.title && !errors.title}
                          error={nameValidate ? !errors.title : errors.title}
                      />
                      {nameValidate && (<p>Deve possuir mais do que 5 carecteres...</p>)}
                      <NewInputForm
                          as="textarea"
                          name="description"
                          label="Descrição"
                          value={values.description}
                          onChange={handleChange}
                          isValid={touched.description && !errors.description}
                          error={descValidate ? !errors.description : errors.description}
                      />
                      {descValidate && (<p>Deve possuir mais do que 2 carecteres...</p>)}
                      <NewInputForm
                          name="file"
                          label="Logo"
                          type="file"
                          value={values.file}
                          onChange={handleChange}
                          isValid={touched.file && !errors.file}
                          error={errors.file}
                      />
                      <NewButton onClick={handleSubmit} type="submit">
                        Criar tópico
                      </NewButton>
                    </S.FormContainer>
                )}
              </Formik>
            </MainModal>
          </S.MainSection>
        </>
    );
  };
