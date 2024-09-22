import React, { useState } from 'react';
import axios from 'axios';
import { ContainerLogin, FormLogin } from '../../pages/Login/styles';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/register', formData);
      console.log('Registro realizado:', formData);
    } catch (error) {
      if (error.response) {
        console.error('Erro ao registrar:', error.response.data);
      } else {
        console.error('Erro desconhecido:', error.message);
      }
    }
  };

  return (
    <ContainerLogin>
      <h2>Cadastrar</h2>
      <FormLogin onSubmit={handleSubmit}>
        <input type="name" name="username" placeholder="Nome de usuário" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Senha" onChange={handleChange} required />
        <button type="submit">Registrar</button>
      </FormLogin>
    </ContainerLogin>
  );
};

export default Register;
