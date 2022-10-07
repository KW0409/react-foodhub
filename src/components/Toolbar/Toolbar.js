import styled from "styled-components";
import { Link } from "react-router-dom";

import {
  MEDIA_QUERY_LG,
  MEDIA_QUERY_MD,
} from "../../constants/css/breakpoint.js";
import foodTruckLogo from "../../constants/css/picture/logo/foodTruck_logo.png";

const Wrapper = styled.div`
  margin: 0 auto;
  padding: 4px 16px;
  width: 100%;
  height: 64px;
  background: #fff;
  display: flex;
  align-items: center;
  box-shadow: 0 2px 4px -1px rgb(0 0 0 / 20%), 0 4px 5px 0 rgb(0 0 0 / 14%),
    0 1px 10px 0 rgb(0 0 0 / 12%);

  position: fixed;
  top: 0;
  z-index: 2;

  & {
    button,
    input {
      background: transparent;
      font: inherit;
      border-style: none;
    }

    button {
      padding: 0;
      color: rgba(0, 0, 0, 0.54);
      transition: all 0.2s cubic-bezier(0.4, 0, 0.6, 1);

      &:hover {
        cursor: pointer;
        background: rgba(245, 245, 245, 1);
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
  display: flex;
  align-items: center;
`;

const LogoContainer = styled.div`
  width: 48px;
  height: 48px;
  margin-right: 40px;
`;
const logoStyle = {
  width: "inherit",
  height: "inherit",
};

const FormLocationContainer = styled.div`
  width: 610px;
  font-size: 16px;
  display: none;
  border: 1px solid #dae1e7;
  border-radius: 4px;

  ${MEDIA_QUERY_MD} {
    display: flex !important;
  }
`;

const LocationContent = styled.div`
  padding-left: 20px;
  display: flex;
  align-items: center;

  & > i {
    margin-right: 8px;
    color: rgba(0, 0, 0, 0.54);
  }

  & > span {
    margin-right: 12px;
    color: #757575;
  }
`;

const LocationButton = styled.button`
  width: 44px;
  height: 44px;
`;

const SearchInput = styled.input`
  padding-left: 20px;
  background: #fff;
  border-color: #fff;
  flex-grow: 1;

  &:focus {
    outline: none;
  }
`;

const SearchButton = styled(LocationButton)`
  & > i {
    font-size: 12px;
  }
`;

const Spacer = styled.div`
  flex-grow: 1;
`;

const UserButton = styled.button`
  padding: 0 16px !important;
  height: 36px;
  min-width: 64px;
  color: rgba(0, 0, 0, 0.87) !important;
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
  border-radius: 50%;

  & > i {
    font-size: 24px;
  }
`;

export default function Toolbar() {
  return (
    <Wrapper className="toolbar" id="tool-bar">
      <Container>
        <Link to="/">
          <LogoContainer>
            <img alt="foodTruck logo" style={logoStyle} src={foodTruckLogo} />
          </LogoContainer>
        </Link>
        <FormLocationContainer>
          <LocationContent>
            <i className="fa fa-map-marker" aria-hidden="true"></i>
            <span>New York</span>
          </LocationContent>
          <LocationButton>
            <i className="fas fa-crosshairs"></i>
          </LocationButton>
          <SearchInput placeholder="Search for restaurant"></SearchInput>
          <SearchButton>
            <i className="fas fa-search"></i>
          </SearchButton>
        </FormLocationContainer>
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
      </Container>
    </Wrapper>
  );
}
