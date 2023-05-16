import styled from "styled-components";
import { useState } from 'react';
import {useNavigate, BrowserRouter} from 'react-router-dom';

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
  font-weight: bold;
  cursor: pointer;
`;

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const FormWrapper = styled.div`
  border: 1px solid #000;
  width: 400px;
  padding: 20px;
`;

const H2 = styled.h2`
  text-align: center;
  color: #000;
`;

function LoginForm () {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [userpassword, setuserpassword] = useState('');

  return (
    <Section>
      <FormWrapper>
        <H2> Webstargram </H2>

        <Form action="login_db.php">
            <Input type="text" value={username} onChange={(event) => setUsername(event.target.value)} placeholder='전화번호, 사용자 이름 또는 이메일' /> 
    
            <Input type="password" value={userpassword} onChange={(event) => setuserpassword(event.target.value)} placeholder='비밀번호' /> 
    
            <Button type="submit"> 로그인 </Button>
    
            <PasswordRequire> 
              <PasswordLink onClick={() => {navigate("/FindPassword")}}> 비밀번호를 잊으셨나요? </PasswordLink> 
            </PasswordRequire>

        </Form>
      </FormWrapper>
    </Section>
  )
}

export default LoginForm;