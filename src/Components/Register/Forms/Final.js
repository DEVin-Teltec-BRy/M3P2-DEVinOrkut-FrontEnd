import { useSelector } from 'react-redux';
import { useMutation } from '@apollo/client';
import { CREATE_USER_MUTATION } from '../../../Graphql/Mutations/CreateUserMutations';
import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Loading } from '../../Loading';

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

      if (response) {
        setIsLoading(false);
      }
    } catch (e) {
      setError(e.message);
    }
  }, [state, createUser]);

  useEffect(() => {
    if (state.FormStep === 5) {
      addUser();
    }
  }, [addUser, state, createUser]);

  const staleOutput = `JSON DATA Form-Completed: ${JSON.stringify(
    state,
    null,
    2
  )}`;

  <pre>{staleOutput}</pre>;

  let content = <p>Processando...</p>;

  if (error) {
    <div>{error}</div>;
  }

  if (!isLoading) {
    content = <Loading />;
  }

  if (!isLoading && !error) {
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
