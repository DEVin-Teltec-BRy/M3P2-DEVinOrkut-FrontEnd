import { useSelector } from 'react-redux';
import { useMutation } from '@apollo/client';
import { CREATE_USER_MUTATION } from '../../../Graphql/Mutations/CreateUserMutations';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import CustomButton from '../../UI/CustomButton';
import { ButtonGroup } from '../../UI/CustomButton/style';
import { ConfirmGroup, LinkStyled } from '../style';
import { Spinner } from 'react-bootstrap';

const Final = () => {
  const state = useSelector((state) => state);
  const [createUser] = useMutation(CREATE_USER_MUTATION);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const navigate = useNavigate();

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

  useEffect(() => {
    if (!error && isSubmitted) {
      setTimeout(() => {
        navigate('/');
      }, 5000);
    }
  }, [navigate, error, isSubmitted]);

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
        <h2>Cadastro concluído com sucesso!</h2>
        <p>
          Seja bem-vindo ao DEVinOrkut. Você será redirecionando em instantes.
          Se não for, clique{' '}
          <LinkStyled to="/login">
            <strong>aqui</strong>
          </LinkStyled>
        </p>
        <ConfirmGroup>
          <Spinner animation="grow" variant="dark" />
          <Spinner animation="grow" variant="dark" />
          <Spinner animation="grow" variant="dark" />
        </ConfirmGroup>
      </>
    );
  }

  return <> {content} </>;
};

export default Final;
