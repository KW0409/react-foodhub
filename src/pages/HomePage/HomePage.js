import styled from "styled-components";
import { Link } from "react-router-dom";

import {
  MEDIA_QUERY_LG,
  MEDIA_QUERY_MD,
  MEDIA_QUERY_SM,
} from "../../constants/css/breakpoint.js";
import choicePic1 from "../../constants/css/picture/home-page/15.15c95d2.jpg";
import choicePic2 from "../../constants/css/picture/home-page/16.bbc24cb.jpg";
import choicePic3 from "../../constants/css/picture/home-page/17.3634737.jpg";
import choicePic4 from "../../constants/css/picture/home-page/18.2a12c1e.jpg";
import GetMobileApp from "./GetMobileApp";
import Header from "./Header";

const CommonWrapper = styled.div`
  background: #fff;
  background: ${(props) => props.$isBlue && "#f6f9fc"};
`;

const CommonContainer = styled.div`
  margin: 0 auto;
  padding: 60px 12px;
  width: 100%;
  ${MEDIA_QUERY_MD} {
    max-width: 900px;
  }

  ${MEDIA_QUERY_LG} {
    max-width: 1185px;
  } ;
`;

const CommonContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -12px;
`;

const CardContainer = styled.div`
  width: 100%;
  padding: 12px;
  flex: 0 0 100%;
  max-width: 100%;

  ${MEDIA_QUERY_SM} {
    flex: 0 0 50%;
    max-width: 50%;
  }

  ${MEDIA_QUERY_MD} {
    flex: 0 0 33.33%;
    max-width: 33.33%;
  }

  ${MEDIA_QUERY_LG} {
    flex: 0 0 25%;
    max-width: 25%;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const Card = styled.div`
  border: thin solid rgba(0, 0, 0, 0.12);
  border-radius: 4px;

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
    filter: brightness(1.1);
  }
`;

const CardImg = styled.div`
  max-width: 100%;
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;

  & > img {
    width: 100%;
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
  }
`;

const CardInfo = styled.div`
  padding: 16px;
  text-align: center;
  color: rgba(0, 0, 0, 0.87);
  font-size: 20px;
  font-weight: bold;
`;

export default function HomePage() {
  return (
    <>
      <Header />
      <CommonWrapper className="action-choice" $isBlue>
        <CommonContainer>
          <CommonContent>
            <CardContainer>
              <StyledLink to="/restaurant/FoodMenu">
                <Card>
                  <CardImg>
                    <img alt="choice pic" src={choicePic1}></img>
                  </CardImg>
                  <CardInfo>Order Food Online</CardInfo>
                </Card>
              </StyledLink>
            </CardContainer>

            <CardContainer>
              <StyledLink to="/restaurant/FoodMenu">
                <Card>
                  <CardImg>
                    <img alt="choice pic" src={choicePic2}></img>
                  </CardImg>
                  <CardInfo>Go Out For Meal</CardInfo>
                </Card>
              </StyledLink>
            </CardContainer>

            <CardContainer>
              <StyledLink to="/restaurant/FoodMenu">
                <Card>
                  <CardImg>
                    <img alt="choice pic" src={choicePic3}></img>
                  </CardImg>
                  <CardInfo>Nightlife & Clubs</CardInfo>
                </Card>
              </StyledLink>
            </CardContainer>

            <CardContainer>
              <StyledLink to="/restaurant/FoodMenu">
                <Card>
                  <CardImg>
                    <img alt="choice pic" src={choicePic4}></img>
                  </CardImg>
                  <CardInfo>Pro MemberShip</CardInfo>
                </Card>
              </StyledLink>
            </CardContainer>
          </CommonContent>
        </CommonContainer>
      </CommonWrapper>
      <CommonWrapper className="collections">
        <CommonContainer></CommonContainer>
      </CommonWrapper>
      <CommonWrapper className="cuisine">
        <CommonContainer></CommonContainer>
      </CommonWrapper>
      <CommonWrapper className="popular">
        <CommonContainer></CommonContainer>
      </CommonWrapper>
      <GetMobileApp />
    </>
  );
}
