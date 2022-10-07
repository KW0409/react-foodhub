import styled from "styled-components";
import { Link } from "react-router-dom";

import {
  MEDIA_QUERY_LG,
  MEDIA_QUERY_MD,
} from "../../constants/css/breakpoint.js";
import foodTruckLogo from "../../constants/css/picture/logo/foodTruck_logo.png";

const Wrapper = styled.nav`
  & {
    button,
    input {
      background: transparent;
      font: inherit;
      border-style: none;
    }

    button {
      padding: 0;
      color: #fff !important;
      transition: all 0.2s cubic-bezier(0.4, 0, 0.6, 1);

      &:hover {
        cursor: pointer;
        background: rgba(255, 255, 255, 0.08);
      }
    }
  }
`;

const Container = styled.div`
  padding: 12px;
  margin: 0 auto;
  width: 100%;
  ${MEDIA_QUERY_MD} {
    max-width: 900px;
  }

  ${MEDIA_QUERY_LG} {
    max-width: 1185px;
  }
`;

const Content = styled.div`
  margin-top: 24px;
  margin-bottom: 40px;
  display: flex;
  align-items: center;
`;

const LogoContainer = styled.div`
  width: 48px;
  height: 48px;
`;
const logoStyle = {
  width: "inherit",
  height: "inherit",
};

const Spacer = styled.div`
  flex-grow: 1;
`;

const UserButton = styled.button`
  padding: 0 16px !important;
  height: 36px;
  min-width: 64px;
  border-radius: 4px;
  display: flex;
  align-items: center;

  & > i {
    margin-right: 12px;
    font-size: 24px;
  }
`;

const ShoppingChartButton = styled(UserButton)`
  margin-right: 8px;

  & > i,
  & > span {
    margin-right: 3px;
    font-size: 16px;
  }
`;

const NavbarButton = styled.button`
  width: 48px;
  height: 48px;
  border-radius: 4px;

  & > i {
    font-size: 24px;
  }
`;

export default function Toolbar() {
  return (
    <Wrapper className="header-nav">
      <Container>
        <Content>
          <Link to="/">
            <LogoContainer>
              <img alt="foodTruck logo" style={logoStyle} src={foodTruckLogo} />
            </LogoContainer>
          </Link>
          <Spacer></Spacer>
          <UserButton>
            <i className="far fa-user-circle"></i>
            <span>ACCOUNT</span>
          </UserButton>
          <ShoppingChartButton>
            <i className="fas fa-shopping-cart"></i>
            <span>(8)</span>
          </ShoppingChartButton>
          <NavbarButton>
            <i className="fas fa-bars"></i>
          </NavbarButton>
        </Content>
      </Container>
    </Wrapper>
  );
}
