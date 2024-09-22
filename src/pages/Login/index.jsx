// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ContainerLogin, FormLogin, Register } from './styles';

const login = async (email, password) => {
  try {
    const response = await axios.post('http://localhost:5000/login', { email, password });
    console.log('Login bem-sucedido:', response.data);
    // Aqui você pode armazenar o token em localStorage ou state
  } catch (error) {
    console.error('Erro ao fazer login:', error.response.data);
  }
};

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault(); // Evita o comportamento padrão do formulário
    const email = e.target[0].value; // Pega o email do input
    const password = e.target[1].value; // Pega a senha do input
    await login(email, password); // Chama a função de login
    navigate('/'); // Redireciona após o login
  };

  return (
    <ContainerLogin>
      <h2>Login</h2>
      <FormLogin onSubmit={handleLogin}>
        <label htmlFor="">Seu e-mail</label>
        <input type="email" placeholder="Email" required />
        <label htmlFor="">Sua senha</label>
        <input type="password" placeholder="Senha" required />
        <button type="submit">Entrar</button>
      </FormLogin>
      <label htmlFor="">Ainda não tem conta?</label>
      <Register onClick={() => navigate('/register')}>Cadastra-se</Register> {/* Botão de registro */}
    </ContainerLogin>
  );
};

export default Login;
