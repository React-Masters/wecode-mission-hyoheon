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


function Home() {
    return (
      <Section>
        <H2> Home </H2>
      </Section>
    )
}

export default Home