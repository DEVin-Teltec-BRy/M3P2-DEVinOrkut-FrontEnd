import { BoxContainer } from "../../Components/Box";
import Layout from "../../Layout";
import { ContentInfo, ProfileContent } from "./profile.style";
import { AiOutlineCamera } from "react-icons/ai";
import { BsChatLeft } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import { LateralProfile } from "./Lateral";
import { CarrucelFotos, ItemCarrucel } from "../../Components/CarrucelFotos";
import { GetStart } from "../../Components/Stars";
import { useData } from "../../Context/dataContext";
import { getAge, getDateFomated } from "../../Utils";
import {  useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const { user } = useData();
  const { fullName, gender, aboutMe, birthDate, album, interests, scraps, friends, humor} = user;
  const formatedDate = getDateFomated(birthDate);
  const textIntereses = interests?.join(' / ')
  const textHumor = humor?.join(' / ')
  const age = getAge(birthDate)


  return (
    <Layout lateral={<LateralProfile user={user} />} visitedData={user}>
      <ProfileContent>
        <h1>{fullName}</h1>
        <ContentInfo border>
          <BoxContainer title="Recados">
            <BsChatLeft size={20} /> {scraps?.length}
          </BoxContainer>

          <BoxContainer title="Fotos">
            <AiOutlineCamera size={20} /> {album?.length}
          </BoxContainer>
          <BoxContainer title="Fãs ">
            <FiUsers size={20} /> {friends?.length}
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
          <BoxContainer title="Idade">{age} Anos</BoxContainer>
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
};
export default ProfilePage;