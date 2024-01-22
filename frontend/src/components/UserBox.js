import React from 'react';
import './UserBox.css';
import { jwtDecode } from 'jwt-decode';

function UserBox({ setModalBox, setPage, token, setToken }) {

  function logout() {
    setToken(null)
    localStorage.removeItem('token')
    setPage('Main')
  }

  function UserBoxes() {
    if (token !== null) {
      const login = jwtDecode(token).login

      return (
        <div className="UserBox">
          <button onClick={() => setPage('PersonalArea')}>Личный кабинет</button>
          <button onClick={() => logout()}>Выйти</button>
          <p>{login}</p>
        </div>
      )
    }

    return (
      <div className="UserBox">
        <button onClick={() => setModalBox('Login')}>Вход</button>
        <button onClick={() => setModalBox('Registration')}>Регистрация</button>
      </div>
    )
  }
  
  return (
    <UserBoxes />
  );
}

export default UserBox;