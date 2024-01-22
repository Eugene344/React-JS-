import React from 'react';
import './PersonalArea.css';

function PersonalArea({token}) {
  function changeEmail() {
    const email = document.getElementById('email').value
    const api = 'http://127.0.0.1:9001/user/changeEmail'
    const data = {
      token: token,
      email: email
    }
    fetch(api, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(result => result.json())
    .then((result) => {
      console.log(result)
      document.getElementById('emailMessage').innerText = "Вы изменили E-Mail."
    })
  }

function changePass() {
    const pass = document.getElementById('pass').value
    const api = 'http://127.0.0.1:9001/user/changePassword'
    const data = {
        token: token,
        password: pass
    }
    fetch(api, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(result => result.json())
    .then((result) => {
      console.log(result)
      document.getElementById('passMessage').innerText = "Вы изменили пароль."
    })
  }

  return (
      <div className="PersonalArea">
          <h1>Личный кабинет</h1>
          <input id='email' placeholder='E-Mail' type='email' />
          <button onClick={changeEmail}>Сменить E-Mail</button>
          <p id='emailMessage'></p>
          <input id='pass' placeholder='Пароль' type='password' />
          <button onClick={changePass}>Сменить пароль</button>
          <p id='passMessage'></p>
      </div>
  );
}

export default PersonalArea;