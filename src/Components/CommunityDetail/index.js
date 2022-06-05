import { Formik } from "formik";
import React, { useState } from "react";
import { NewButton } from "../Button";
import { NewInputForm } from "../Input";
import { MainModal } from "../MainModal";
import { Form } from "react-bootstrap";

import * as S from "./communityDetail.style";
import { initialValues } from "./Dados";

export const CommunityDetail = ({
  title,
  imgsrc,
  category,
  creatAt,
  owner,
  isowner,
  description,
  children,
}) => {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handledCreateTopico = (values) => {
    console.log(values);
  };

  return (
    <>
      <S.MainSection>
        <S.DivTitle>
          <h1>{title}</h1>
        </S.DivTitle>
        <hr />
        <S.DivContent>
          <div className="img-container">
            <img src={imgsrc} alt="" />
          </div>
          <div className="infos">
            <ul>
              <li>
                <span>Categoria:</span> {category}
              </li>
              <li>
                <span>Criada em:</span> {creatAt}
              </li>
              <li>
                <span>Proprietário:</span> {owner}
              </li>
            </ul>
            {isowner && (
              <Form>
                <Form.Check
                  type="switch"
                  id="custom-switch"
                  label="Editar Comunidade"
                />
              </Form>
            )}
          </div>
        </S.DivContent>
        <hr />
        <S.DivDescription>
          <span>Descrição:</span> <p>{description}</p>
        </S.DivDescription>
        <hr />
        <S.DivForum>
          <div className="top-forum">
            <span>Fórum</span>{" "}
            <NewButton size="sm" onClick={handleShow}>
              Criar Tópico
            </NewButton>
          </div>
          <div className="body-forum">{children}</div>
        </S.DivForum>
        <MainModal show={show} close={handleClose} title="Novo Topico">
          <Formik initialValues={initialValues} onSubmit={handledCreateTopico}>
            {({ handleSubmit, handleChange, values, touched, errors }) => (
              <S.FormContainer>
                <NewInputForm
                  name="title"
                  label="Titulo"
                  value={values.title}
                  onChange={handleChange}
                  isValid={touched.title && !errors.title}
                  error={errors.title}
                />
                <NewInputForm
                  as="textarea"
                  name="description"
                  label="Descripção"
                  value={values.description}
                  onChange={handleChange}
                  isValid={touched.description && !errors.description}
                  error={errors.description}
                />
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
                  Criar topico
                </NewButton>
              </S.FormContainer>
            )}
          </Formik>
        </MainModal>
      </S.MainSection>
    </>
  );
};
