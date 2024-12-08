import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/authSlice'; // ваш слайс
import { useNavigate } from 'react-router-dom';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Псевдологин: здесь можно заменить на локальное хранилище или имитацию запроса
    const fakeUser = { id: 1, name: 'John Doe', email: email, avatar: 'avatar.png' };
    const fakeToken = '1234567890abcdef';

    // Эмулируем успешный ответ и сохраняем данные в redux и localStorage
    dispatch(login({ token: fakeToken, user: fakeUser }));

    // Переходим на страницу профиля после логина
    navigate('/profile');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
      <button type="submit">Login</button>
    </form>
  );
}
