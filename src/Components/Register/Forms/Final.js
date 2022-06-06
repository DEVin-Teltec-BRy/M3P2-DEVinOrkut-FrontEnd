import { useSelector } from 'react-redux';
import { useMutation } from '@apollo/client';
import { CREATE_USER_MUTATION } from '../../../Graphql/Mutations/CreateUserMutations';
import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Spinner from 'react-bootstrap/Spinner';

const Final = () => {
  const state = useSelector((state) => state);
  const [createUser] = useMutation(CREATE_USER_MUTATION);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  const addUser = useCallback(async () => {
    try {
      const response = await createUser({
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

      return response;
    } catch (e) {
      setError(e.message);
    }
  }, [state.FormUserRegister, createUser]);

  useEffect(() => {
    if (state.FormStep === 5 && isLoading) {
      addUser();
      setIsLoading(false);
    }
  }, [addUser, state, createUser, isLoading]);

  const staleOutput = `JSON DATA Form-Completed: ${JSON.stringify(
    state,
    null,
    2
  )}`;

  <pre>{staleOutput}</pre>;

  let content = (
    <>
      <Spinner animation="grow" variant="success" />
      <Spinner animation="grow" variant="danger" />
      <Spinner animation="grow" variant="warning" />
    </>
  );

  if (error) {
    <div>{error}</div>;
  }

  if (!isLoading && !error) {
    content = (
      <>
        <h1>Cadastro concluído com sucesso!</h1>
        <p>
          <strong> Seu cadastro foi concluído com sucesso!</strong>
        </p>
        <p>
          Agora você pode entrar no sistema e começar a usar o nosso serviço.
          <Link to="/login">
            {' '}
            <strong>Login</strong>
          </Link>
        </p>
      </>
    );
  }

  return <> {content} </>;
};

export default Final;
