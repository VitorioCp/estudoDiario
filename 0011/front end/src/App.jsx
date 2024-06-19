import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useState } from 'react';

const createUser = async (userData) => {
  try {
    const response = await axios.post("http://localhost:3000/api/users", userData);
    return response.data;
  } catch (error) {
    throw new Error(`Erro ao criar usuário: ${error.message}`);
  }
};

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const mutation = useMutation(createUser, {
    onSuccess: (data) => {
      console.log('Usuário criado com sucesso:', data);
    },
    onError: (error) => {
      console.error('Erro ao criar usuário:', error);
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate({ name, email });
  };

  return (
    <>
      <h1>Tela de Cadastro</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={name}
          type="text"
          onChange={(e) => setName(e.target.value)}
          placeholder="Nome:"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email:"
        />

        <button type='submit'>
          {mutation.isLoading ? 'Criando...' : 'Criar Usuário'}
        </button>
      </form>
    </>
  );
}

export default App;
