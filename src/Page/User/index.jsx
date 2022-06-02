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
import { NewButtom } from "../../Components/Button";
import { GetStart } from "../../Components/Stars";

export const UserPage = () => {
  const isConected = false;

  return (
    <Layout lateral={<LateralProfile />}>
      <ProfileContent>
        <h1>Elon Musk</h1>

        <NewButtom bg="secondary" size="sm">
          {isConected ? (
            <AiOutlineCheckSquare size={20} />
          ) : (
            <AiOutlineUserAdd size={20} />
          )}
          {isConected ? " Conectados" : " Conectar"}
        </NewButtom>

        <ContentInfo border>
          <BoxContainer title="Recados">
            <BsChatLeft /> 1.1 M
          </BoxContainer>

          <BoxContainer title="Fotos">
            <AiOutlineCamera /> 104
          </BoxContainer>
          <BoxContainer title="Fãs ">
            <FiUsers /> 201 M
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
          <BoxContainer title="Aniversario">22 de agosto</BoxContainer>
          <BoxContainer title="Idade">21 Anos</BoxContainer>
          <BoxContainer title="Humor">Extrorvertido/Extravagante</BoxContainer>
        </ContentInfo>
        <ContentInfo expand>
          <BoxContainer title="Género">Masculino</BoxContainer>
          <BoxContainer title="Intereses no DevinOrkut">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem
            tempore quia totam delectus maxime nostrum neque reiciendis ratione,
            assumenda aliquid?
          </BoxContainer>
        </ContentInfo>
        <ContentInfo>
          <BoxContainer title="Quem sou eu">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem
              tempore quia totam delectus maxime nostrum neque reiciendis
              ratione, assumenda aliquid? Lorem ipsum dolor sit,
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem
              tempore quia totam delectus maxime nostrum neque reiciendis
              ratione, assumenda aliquid? Lorem ipsum dolor sit, Lorem ipsum
              dolor sit, amet consectetur adipisicing elit. Autem tempore quia
              totam delectus maxime nostrum neque reiciendis ratione, assumenda
              aliquid? Lorem ipsum dolor sit,
            </p>
          </BoxContainer>
        </ContentInfo>
        <CarrucelFotos title='Ultimas Fotos'>
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
