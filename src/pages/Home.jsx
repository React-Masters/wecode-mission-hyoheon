
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faPaperPlane, faSquarePlus, faCompass, faHeart } from "@fortawesome/free-regular-svg-icons";
import styled from "styled-components";
import avatarIcon from "../img/avatarIcon.png"

const Wrapper = styled.div`
  width: 1500px;
  margin: 0 auto;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 20px;
  margin: 0 auto;
  padding: 0 20px;
  `;

const H2 = styled.h2`
`;

const Input = styled.input`
`;

const Icon = styled.div`
  margin-right: 20px;
`;


const Span = styled.span`
  &:last-child img { 
    transform: translateY(3px);
    height: 32px;
  }  
  margin-left: 20px;
`;



const Img = styled.img`
  width: 40px;
  height: 30px;
`;

function Home() {
    return (
      <Wrapper>
        <Header>
          <H2> Webstargram </H2>

          <Input type="text"/> 

          <Icon> 
            <Span> <FontAwesomeIcon icon={faHouse} size="2x" color=""/> </Span>
            <Span> <FontAwesomeIcon icon={faPaperPlane} size="2x" /> </Span>
            <Span> <FontAwesomeIcon icon={faSquarePlus} size="2x" /> </Span>
            <Span> <FontAwesomeIcon icon={faCompass} size="2x" /> </Span>
            <Span> <FontAwesomeIcon icon={faHeart} size="2x" /> </Span>
            <Span> <Img src={avatarIcon} alt="profile_image"/> </Span>
          </Icon>
        </Header>

        {/* <Main>
          <Section>
            <ProfileImg>
              <Span>  </Span>
              <Span>  </Span>
              <Span>  </Span>
              <Span>  </Span>
              <Span>  </Span>
              <Span>  </Span>
            </ProfileImg>

            <Post>
              <PostProfile> </PostProfile>
              <PostImg> </PostImg>
              <PostLike> </PostLike>
            </Post>
          </Section>

          <Aside>

          </Aside>
        </Main> */}
        
      </Wrapper>
       
    )
}

export default Home