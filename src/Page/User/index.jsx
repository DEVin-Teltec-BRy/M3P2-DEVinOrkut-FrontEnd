import { BoxContainer } from "../../Components/Box";
import Layout from "../../Layout";
import { ContentInfo, ProfileContent } from "../Profile/profile.style";
import {
  AiOutlineCamera,
  AiOutlineCheckSquare,
  AiOutlineUserAdd,
} from "react-icons/ai";
import { BsChatLeft } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import { LateralProfile } from "../Profile/Lateral";
import { CarrucelFotos, ItemCarrucel } from "../../Components/CarrucelFotos";
import { NewButton } from "../../Components/Button";
import { GetStart } from "../../Components/Stars";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_USER_BY_ID } from "../../Graphql/Querys";
import { getAge, getDateFomated } from "../../Utils";
import { Loading } from "../../Components/Loading";

export const UserPage = () => {
  const { id } = useParams();
  const { loading, data } = useQuery(GET_USER_BY_ID, {
    variables: { userId: id },
  });
  const isConected = false;

  if (data) {
    const { user } = data;
    const {
      fullName,
      gender,
      aboutMe,
      birthDate,
      interests,
      scraps,
      friends,
      humor,
      communities,
    } = user;
    const formatedDate = getDateFomated(birthDate);
    const textIntereses = interests?.join(" / ");
    const textHumor = humor?.join(" / ");
    const age = getAge(birthDate);
    return (
      <Layout
        nameUser={fullName}
        lateral={
          <LateralProfile friendsUser={friends} communitiesUser={communities} />
        }
      >
        <ProfileContent>
          <h1>{fullName}</h1>

          <NewButton bg="secondary" size="sm">
            {isConected ? (
              <AiOutlineCheckSquare size={20} />
            ) : (
              <AiOutlineUserAdd size={20} />
            )}
            {isConected ? " Conectados" : " Conectar"}
          </NewButton>

          <ContentInfo border>
            <BoxContainer title="Recados">
              <BsChatLeft /> {scraps?.length}
            </BoxContainer>

            <BoxContainer title="Fotos">
              <AiOutlineCamera /> {0}
            </BoxContainer>
            <BoxContainer title="Fãs ">
              <FiUsers /> {friends?.length}
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
            <BoxContainer title="Aniversario">{formatedDate}</BoxContainer>
            <BoxContainer title="Idade">{age}</BoxContainer>
            <BoxContainer title="Humor">{textHumor}</BoxContainer>
          </ContentInfo>
          <ContentInfo expand>
            <BoxContainer title="Género">{gender}</BoxContainer>
            <BoxContainer title="Intereses no DevinOrkut">
              {textIntereses}
            </BoxContainer>
          </ContentInfo>
          <ContentInfo>
            <BoxContainer title="Quem sou eu">{aboutMe}</BoxContainer>
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
  }
  if (loading) {
    return <Loading />;
  }
};
