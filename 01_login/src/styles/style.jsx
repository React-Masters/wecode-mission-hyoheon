import styled from "styled-components";
import { useState } from 'react';

const Form = styled.form `
    display: flex;
    flex-direction: column;
    justify-content: center;
`;
  
const Input = styled.input`
    margin-bottom: 8px;
    border-radius: 5px;
    padding-left: 5px;
    height: 25px;
    border: 1px solid #000;
`;
  
const Button = styled.button`
    border: 1px solid #A6D7FF;
    background: #A6D7FF;
    color: white;
    height: 30px;
    border-radius: 5px;
    cursor: pointer;
`;

const PasswordRequire = styled.div`
margin: 10px;
text-align: center;
text-decoration: none;
color: #79799F;
`;

const PasswordLink = styled.a`
  margin-top: 50px;
  text-decoration: none;
  font-weight: bold;
`;

function LoginForm () {
    const [username, setUsername] = useState('');
    const [userpassword, setuserpassword] = useState('');
  
    return (
      <Form action="login_db.php">
          <Input type="text" value={username} onChange={(event) => setUsername(event.target.value)} placeholder='전화번호, 사용자 이름 또는 이메일' /> 
  
          <Input type="password" value={userpassword} onChange={(event) => setuserpassword(event.target.value)} placeholder='비밀번호' /> 
  
          <Button type="submit"> 로그인 </Button>
  
          <PasswordRequire> <PasswordLink href='#'> 비밀번호를 잊으셨나요? </PasswordLink> </PasswordRequire>
      </Form>
    )
  }

  export default LoginForm;