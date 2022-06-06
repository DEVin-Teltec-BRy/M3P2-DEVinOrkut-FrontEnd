import { useSelector } from 'react-redux';
import { useMutation } from '@apollo/client';
import { CREATE_USER_MUTATION } from '../../../Graphql/Mutations/CreateUserMutations';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import CustomButton from '../../UI/CustomButton';
import { ButtonGroup } from '../../UI/CustomButton/style';
import { ConfirmGroup } from '../style';

const Final = () => {
  const state = useSelector((state) => state);
  const [createUser] = useMutation(CREATE_USER_MUTATION);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    try {
      const { data } = await createUser({
        variables: {
          user: {
            fullName: state.FormUserRegister.fullName,
            email: state.FormUserRegister.email,
            cpf: state.FormUserRegister.cpf,
            birthDate: state.FormUserRegister.birthDate,
            gender: state.FormUserRegister.gender,
            postal: state.FormUserRegister.postal,
            city: state.FormUserRegister.city,
            state: state.FormUserRegister.state,
            address: state.FormUserRegister.address,
            number: state.FormUserRegister.number,
            complement: state.FormUserRegister.complement,
            district: state.FormUserRegister.district,
            reference: state.FormUserRegister.reference,
            relationship: state.FormUserRegister.relationship,
            humor: [state.FormUserRegister.humor],
            interests: [state.FormUserRegister.interests],
            aboutMe: state.FormUserRegister.aboutMe,
            password: state.FormUserRegister.password,
          },
        },
      });
      setIsSubmitted(true);
      console.log(data);
    } catch (error) {
      setError(error.message);
    }
  };

  const staleOutput = `JSON DATA Form-Completed: ${JSON.stringify(
    state,
    null,
    2
  )}`;

  <pre>{staleOutput}</pre>;

  let content = (
    <>
      <ConfirmGroup>
        <p>Confirmar envio de cadastro?</p>
      </ConfirmGroup>
      <ButtonGroup>
        <CustomButton>Não</CustomButton>
        <CustomButton type="submit" primary={true} onClick={handleSubmit}>
          Sim
        </CustomButton>
      </ButtonGroup>
    </>
  );

  if (error) {
    <div>{error}</div>;
  }

  if (!error && isSubmitted) {
    content = (
      <>
        <h1>Cadastro concluído com sucesso!</h1>
        <p>
          <strong> Seu cadastro foi concluído com sucesso!</strong>
        </p>
        <p>
          Agora você pode entrar no sistema e começar a usar o nosso serviço:{' '}
          <Link to="/login">
            <strong>Login</strong>
          </Link>
        </p>
      </>
    );
  }

  return <> {content} </>;
};

export default Final;
