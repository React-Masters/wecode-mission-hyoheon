import styled from "styled-components";
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';

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
  font-size: 12px;
`;
  
const Button = styled.button`
  border: 1px solid #A6D7FF;
  background: ${({ active }) => (active ? '#0E8BF0' : '#A6D7FF')};
  color: white; 
  height: 30px;
  border-radius: 5px;
  cursor: pointer;
  transition: background, 1s;
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
  color: #4C4E9F;
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
  const [inputs, setInputs] = useState({
    id: '',
    password: '',
  })
  const { id, password } = inputs;

  const [active, setActive] = useState(false);

  const onChange = (e) => {
    const { value, name } = e.target;

    setInputs({
      ...inputs,
      [name]: value,
    });
  }

  const ActiveButton = () => {
    id.length >= 3 && password.length >= 3 ? setActive(true) : setActive(false);
  };

  const navigate = useNavigate();

  function Home (e) {
    e.preventDefault();

    if(active) {
      navigate("/Home");
    }
  }

  return (
    <Section>
      <FormWrapper>
        <H2> Webstargram </H2>

        <Form onSubmit={Home}>
            <Input type="text" name="id" onChange={onChange} placeholder='전화번호, 사용자 이름 또는 이메일' onKeyUp={ActiveButton} /> 
    
            <Input type="password" name="password" onChange={onChange} placeholder='비밀번호' onKeyUp={ActiveButton} /> 
    
            <Button type="submit" active={active}> 로그인 </Button>
    
            <PasswordRequire> 
              <PasswordLink onClick={() => {navigate("/FindPassword")}}> 비밀번호를 잊으셨나요? </PasswordLink> 
            </PasswordRequire>
        </Form>
      </FormWrapper>
    </Section>
  )
}

export default LoginForm;