import { BoxContainer } from '../../Components/Box';
import Layout from '../../Layout';
import { ContentInfo, ProfileContent } from '../Profile/profile.style';
import {
  AiOutlineCamera,
  AiOutlineCheckSquare,
  AiOutlineUserAdd,
} from 'react-icons/ai';
import { BsChatLeft } from 'react-icons/bs';
import { FiUsers } from 'react-icons/fi';
import { LateralProfile } from '../Profile/Lateral';
import { CarrucelFotos, ItemCarrucel } from '../../Components/CarrucelFotos';
import { NewButton } from '../../Components/Button';
import { GetStart } from '../../Components/Stars';
import { useNavigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_USER_BY_ID } from '../../Graphql/Querys';
import { getDateFomated, getAge } from '../../Utils';
import { Loading } from '../../Components/Loading';
import { useData } from '../../Context/dataContext';
import { useEffect, useState } from 'react';

const UserPage = () => {
  const { user: loggedUser, handleAddFriend, handleRemoveFriend } = useData();
  const { id } = useParams();
  const isLoggedUser = loggedUser.id === id;
  const [isConected, setIsConected] = useState(loggedUser.friends.some((friend) => friend.id === id));
  const [ loggedUserHasFriendRequest, setLoggedUserHasFriendRequest ] = useState(loggedUser.friendRequest.some((friend) => friend.id === id));
  const [pendingRequest, setPendingRequest] = useState(false);
  const navigate = useNavigate();
  const { data } = useQuery(GET_USER_BY_ID, {
    variables: { userId: id },
  });
  const [userPage, setUserPage] = useState(false);
  useEffect(() => {
    if (isLoggedUser) {
      navigate("/");
    }
    if (data) {
      const { user } = data;
      setIsConected(loggedUser.friends.some((friend) => friend.id === id));
      setLoggedUserHasFriendRequest(loggedUser.friendRequest.some((friend) => friend.id === id));
      setUserPage(user);
    }
  }, [data, id, isLoggedUser, navigate, loggedUser]);
  return !userPage ? (
    <Loading />
  ) : (
    <Layout visitedData={userPage} lateral={<LateralProfile user={userPage} />}>
      <ProfileContent>
        <h1>{userPage.fullName}</h1>
        {isConected && (
          <NewButton
            bg="secondary"
            size="sm"
            onClick={() => {
              handleRemoveFriend(loggedUser.id, userPage.id);
              setIsConected(false);
            }}
            icon={AiOutlineUserAdd}
          >
            {" "}
            <AiOutlineCheckSquare size={20} />
            Conectados
          </NewButton>
        )}
        {pendingRequest && (
          <NewButton bg="warning" size="sm" icon={AiOutlineUserAdd}>
            <AiOutlineCheckSquare size={20} />
            Aguardando, solicitação enviada.
          </NewButton>
        )}
        {loggedUserHasFriendRequest && (
          <NewButton
            bg="info"
            size="sm"
            icon={AiOutlineUserAdd}
            onClick={() => navigate("/solicitacoes")}
          >
            <AiOutlineCheckSquare size={20} />A uma solicitação pendente de{" "}
            {userPage.fullName.split(" ")[0]}.
          </NewButton>
        )}
        {!isConected && !loggedUserHasFriendRequest && !pendingRequest && (
          <NewButton
            bg="success"
            size="sm"
            icon={AiOutlineUserAdd}
            onClick={() => {
              handleAddFriend(loggedUser.id, userPage.id);
              setPendingRequest(true);
            }
            }
          >
            <AiOutlineCheckSquare size={20} />
            Adicionar amigo
          </NewButton>
        )}
        <ContentInfo border>
          <BoxContainer title="Recados">
            <BsChatLeft /> {userPage.scraps?.length}
          </BoxContainer>

          <BoxContainer title="Fotos">
            <AiOutlineCamera /> {0}
          </BoxContainer>
          <BoxContainer title="Fãs ">
            <FiUsers /> {userPage.friends?.length}
          </BoxContainer>
          <BoxContainer title="Confiavel">
            <GetStart type="Bom" />
          </BoxContainer>
          <BoxContainer title="Legal">
            <GetStart type="Exelente" />
          </BoxContainer>
          <BoxContainer title="Sexy">
            <GetStart type="Ruin" />
          </BoxContainer>
        </ContentInfo>
        <ContentInfo>
          <BoxContainer title="Aniversario">
            {getDateFomated(userPage?.birthDate)}
          </BoxContainer>
          <BoxContainer title="Idade">
            {getAge(userPage.birthDate).toString()}
          </BoxContainer>
          <BoxContainer title="Humor">
            {userPage.humor?.join(" / ")}
          </BoxContainer>
        </ContentInfo>
        <ContentInfo expand>
          <BoxContainer title="Género">{userPage.gender}</BoxContainer>
          <BoxContainer title="Intereses no DevinOrkut">
            {userPage.interests?.join(" / ")}
          </BoxContainer>
        </ContentInfo>
        <ContentInfo>
          <BoxContainer title="Quem sou eu">{userPage.aboutMe}</BoxContainer>
        </ContentInfo>
        <CarrucelFotos title="Ultimas Fotos">
          {[...Array(9)].map((_, idx) => (
            <ItemCarrucel
              key={idx}
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
            />
          ))}
        </CarrucelFotos>
      </ProfileContent>
    </Layout>
  );
};

export default UserPage;
