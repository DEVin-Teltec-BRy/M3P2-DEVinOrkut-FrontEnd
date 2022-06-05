import { useSelector } from 'react-redux';
import { useMutation } from '@apollo/client';
import { CREATE_USER_MUTATION } from '../../../Graphql/Mutations/CreateUserMutations';
import { useCallback, useEffect, useState } from 'react';

const Final = () => {
  const state = useSelector((state) => state);
  const [createUser, { loading, error }] = useMutation(CREATE_USER_MUTATION);
  const [isLoading, setIsLoading] = useState(true);

  const addUser = useCallback(async () => {
    try {
      const response = await createUser({
        variables: {
          fullName: state.FormUserRegister.fullName,
          email: state.FormUserRegister.email,
          cpf: state.FormUserRegister.cpf,
          birthDate: state.FormUserRegister.birthDate,
          gender: state.FormUserRegister.gender,
          postal: state.FormUserRegister.postal,
          city: state.FormUserRegister.city,
          state: state.FormUserRegister.state,
          address: state.FormUserRegister,
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
      });
      if (error) {
        console.log(error);
      }
    } catch (e) {
      console.log(1, e);
      console.log(2, error);
    }
  }, [state.FormUserRegister, createUser, error]);

  useEffect(() => {
    if (state.FormStep === 5 && isLoading) {
      addUser();
      setIsLoading(false);
    }
  }, [addUser, state, createUser, isLoading]);

  console.log(state.FormUserRegister);

  const staleOutput = `JSON DATA Form-Completed: ${JSON.stringify(
    state,
    null,
    2
  )}`;

  return <pre>{staleOutput}</pre>;
};

export default Final;
