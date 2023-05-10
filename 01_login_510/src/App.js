import { useState } from 'react';
import './App.css';

function Form () {
  const [username, setUsername] = useState('');
  const [userpassword, setuserpassword] = useState('');

  return (
    <form action="login_db.php">
        <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} placeholder='전화번호, 사용자 이름 또는 이메일' /> 

        <input type="password" value={userpassword} onChange={(event) => setuserpassword(event.target.value)} placeholder='비밀번호' /> 

        <button type="submit"> 로그인 </button>

        <div className='password_require'> <a href='#'> 비밀번호를 잊으셨나요? </a> </div>
    </form>
  )
}

function App() {
  return (
    <div className='wrapper'>
      <div className='form_wrapper'>
        <h2> Webstargram </h2>

        <Form />
      </div>
    </div>
  );
}

export default App;
