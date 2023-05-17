
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faPlaneUp } from '@fortawesome/free-solid-svg-icons';
import { faSquarePlus } from '@fortawesome/free-solid-svg-icons';
import { faCompass } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import styled from "styled-components";

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 20px;
  `;

const H2 = styled.h2`
  text-align: center;
`;

const Input = styled.input`

`;

const Icon = styled.div`
  margin-right: 20px;
`;

const Span = styled.span`

`;

function Home() {
    return (
      <Header>
        <H2> Webstargram </H2>
        <Input type="text"/> 

        <Icon> 
          <Span> <FontAwesomeIcon icon={faHouse} /> </Span>
          <Span> <FontAwesomeIcon icon={faPlaneUp} /> </Span>
          <Span> <FontAwesomeIcon icon={faSquarePlus} /> </Span>
          <Span> <FontAwesomeIcon icon={faCompass} /> </Span>
          <Span> <FontAwesomeIcon icon={faHeart} /> </Span>
          <Span>  </Span>
        </Icon>
      </Header>
    )
}

export default Home