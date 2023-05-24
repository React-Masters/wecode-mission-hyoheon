import styled from "styled-components";

const Section = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  `;

const H2 = styled.h2`
  text-align: center;
`;


function FindPassword() {
    return (
      <Section>
        <H2> 비밀번호 찾기 </H2>
      </Section>
    )
}

export default FindPassword