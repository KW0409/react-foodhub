import styled from "styled-components";
import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

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
  display: ${(props) => (props.$isShow ? "flex" : "none")};
  align-items: center;

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

// 控制 toolbar 是否要在這個 url 顯現
function showBar(location) {
  let pathName = location.pathname;
  if (pathName !== "/") return true;
  return false;
}

// 控制 toolbar 在滑動頁面時的 style
function barScrollStyle(element, location) {
  const showShadow =
    "box-shadow: 0 2px 4px -1px rgb(0 0 0 / 20%), 0 4px 5px 0 rgb(0 0 0 / 14%), 0 1px 10px 0 rgb(0 0 0 / 12%);";

  if (window.scrollY > 0) {
    element.setAttribute("style", showShadow);
  } else {
    element.removeAttribute("style");
  }
  if (location.pathname !== "/") return;

  const showElement =
    "display: flex; box-shadow: 0 2px 4px -1px rgb(0 0 0 / 20%), 0 4px 5px 0 rgb(0 0 0 / 14%), 0 1px 10px 0 rgb(0 0 0 / 12%);";
  if (window.scrollY > 436) {
    element.setAttribute("style", showElement);
  } else {
    element.removeAttribute("style");
  }
}

export default function Toolbar() {
  const location = useLocation();

  const toolbarRef = useRef();
  const [isShow, setIsShow] = useState(() => showBar(location));

  useEffect(() => {
    setIsShow(showBar(location));
    window.addEventListener("scroll", () =>
      barScrollStyle(toolbarRef.current, location)
    );
  }, [location]);

  return (
    <Wrapper
      $isShow={isShow}
      ref={toolbarRef}
      className="toolbar"
      id="tool-bar"
    >
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

/*
https://ithelp.ithome.com.tw/articles/10276921

https://www.uj5u.com/qiye/179493.html

https://ithelp.ithome.com.tw/m/articles/10279966

https://ithelp.ithome.com.tw/articles/10207679

https://codepen.io/cy810912/pen/rNVKRGY?editors=1111

http://www.eion.com.tw/Blogger/?Pid=1154

https://www.796t.com/content/1549928701.html

https://www.jianshu.com/p/43c249d8ed17

https://zhangjiali0627.github.io/页面交互/2020-06-05/animation.html
*/
