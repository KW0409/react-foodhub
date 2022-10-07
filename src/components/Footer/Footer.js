import styled from "styled-components";
import { Link } from "react-router-dom";

import {
  MEDIA_QUERY_LG,
  MEDIA_QUERY_MD,
} from "../../constants/css/breakpoint.js";
import foodTruckLogo from "../../constants/css/picture/logo/foodTruck_logo.png";
import googlPlayLogo from "../../constants/css/picture/logo/google-play.430ca54.png";
import appStoreLogo from "../../constants/css/picture/logo/app-store.63e3986.png";

const Wrapper = styled.footer`
  padding: 64px 0;
  width: 100%;
  background: #f6f9fc;
`;

const Container = styled.div`
  margin: 0 auto;
  padding: 12px;
  width: 100%;
  ${MEDIA_QUERY_MD} {
    max-width: 900px;
  }

  ${MEDIA_QUERY_LG} {
    max-width: 1185px;
  }
`;

const Title = styled.h2`
  margin-bottom: 16px;
  font-size: 25px;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.87);
`;

const LinkContent = styled.div`
  margin: -12px;
  display: flex;
  flex-wrap: wrap;
  flex: 1 1 auto;
`;

const ContentList = styled.ul`
  padding: 12px;
  list-style: none;
  flex: 0 0 100%;
  max-width: 100%;

  ${MEDIA_QUERY_LG} {
    flex: 0 0 25%;
    max-width: 25%;
  }
`;

const LinkList = styled.ul`
  padding: 12px;
  list-style: none;
  flex: 0 0 100%;
  max-width: 100%;

  ${MEDIA_QUERY_MD} {
    flex: 0 0 50%;
    max-width: 50%;
  }

  ${MEDIA_QUERY_LG} {
    flex: 0 0 25%;
    max-width: 25%;
  }
`;

const ListItem = styled.li`
  margin-bottom: 12px;
  color: #4b566b;
`;

const LogoContainer = styled.div`
  width: 48px;
  min-width: 48px;
  height: 48px;
  margin-bottom: 24px;
`;
const logoStyle = {
  width: "inherit",
  height: "inherit",
};

const Description = styled.p`
  margin-bottom: 24px;
  color: #4b566b;
  font-size: 16px;
  font-weight: 400;
`;

const AppLogoWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const AppLogoContainer = styled(LogoContainer)`
  width: 120px;
  min-width: 48px;
  height: 45px;
  margin: 0;

  & + & {
    margin-left: 16px;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #4b566b;

  &:hover {
    color: #d23f57;
  }
`;

const ButtonList = styled(AppLogoWrapper)``;

const Button = styled.button`
  margin-right: 8px;
  width: 32px;
  height: 32px;
  color: #fff;
  background: #0f3460;
  border-style: none;
  border-radius: 50%;
  border-color: #0f3460;
  box-shadow: 0 3px 5px -1px rgb(0 0 0 / 20%), 0 6px 10px 0 rgb(0 0 0 / 14%),
    0 1px 18px 0 rgb(0 0 0 / 12%);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.6, 1);

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }

  & > i {
    font-size: 16px;
  }
`;

export default function Footer() {
  return (
    <Wrapper>
      <Container>
        <LinkContent>
          <ContentList>
            <LogoContainer>
              <img alt="foodTruck logo" style={logoStyle} src={foodTruckLogo} />
            </LogoContainer>

            <Description>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
              libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat
              et lectus vel ut sollicitudin elit at amet.
            </Description>

            <AppLogoWrapper>
              <AppLogoContainer>
                <img
                  alt="googlPlay logo"
                  style={logoStyle}
                  src={googlPlayLogo}
                />
              </AppLogoContainer>

              <AppLogoContainer>
                <img
                  alt="googlPlay logo"
                  style={logoStyle}
                  src={appStoreLogo}
                />
              </AppLogoContainer>
            </AppLogoWrapper>
          </ContentList>

          <LinkList>
            <Title>About Us</Title>
            <ListItem>
              <StyledLink to="/">Careers</StyledLink>
            </ListItem>
            <ListItem>
              <StyledLink to="/">Our Stores</StyledLink>
            </ListItem>
            <ListItem>
              <StyledLink to="/">Our Cares</StyledLink>
            </ListItem>
            <ListItem>
              <StyledLink to="/">Terms & Conditions</StyledLink>
            </ListItem>
            <ListItem>
              <StyledLink to="/">Privacy Policy</StyledLink>
            </ListItem>
          </LinkList>

          <LinkList>
            <Title>Customer Care</Title>
            <ListItem>
              <StyledLink to="/">Help Center</StyledLink>
            </ListItem>
            <ListItem>
              <StyledLink to="/">How to Buy</StyledLink>
            </ListItem>
            <ListItem>
              <StyledLink to="/">Track Your Order</StyledLink>
            </ListItem>
            <ListItem>
              <StyledLink to="/">Corporate & Bulk Purchasing</StyledLink>
            </ListItem>
            <ListItem>
              <StyledLink to="/">Returns & Refunds</StyledLink>
            </ListItem>
          </LinkList>

          <LinkList>
            <Title>Contact Us</Title>
            <ListItem>
              Jalalabad 20/1, Shah Farid Road Sylhet, Bangladesh. Email:
              uilib@gmail.com Phone: +880 1123 456 780
            </ListItem>
            <ListItem>Sylhet, Bangladesh.</ListItem>
            <ListItem>Email: uilib@gmail.com</ListItem>
            <ListItem>Phone: +880 1123 456 780</ListItem>
            <ListItem>
              <ButtonList>
                <Button>
                  <i className="fab fa-facebook"></i>
                </Button>

                <Button>
                  <i className="fab fa-twitter"></i>
                </Button>

                <Button>
                  <i className="fab fa-instagram"></i>
                </Button>

                <Button>
                  <i className="fab fa-youtube"></i>
                </Button>

                <Button>
                  <i className="fab fa-google"></i>
                </Button>
              </ButtonList>
            </ListItem>
          </LinkList>
        </LinkContent>
      </Container>
    </Wrapper>
  );
}
