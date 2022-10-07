import styled from "styled-components";

import {
  MEDIA_QUERY_LG,
  MEDIA_QUERY_MD,
} from "../../constants/css/breakpoint.js";
import bgPic from "../../constants/css/picture/home-page/header-bg.d39c465.png";
import HeaderNav from "./HeaderNav";

const Wrapper = styled.header`
  background: url(${bgPic});
  background-size: cover;

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
  margin-top: 60px;
`;

const SloganContainer = styled.div`
  padding: 12px;
  width: 100%;

  & {
    color: #fff;
    text-align: center;

    h1 {
      margin-bottom: 16px;
      font-size: 3rem;
      font-weight: 400;
      line-height: 3.125rem;

      & > span {
        font-weight: 700;
      }
    }

    h4 {
      margin-bottom: 20px;
      font-size: 1.25rem;
      font-weight: 300;
      letter-spacing: 0.0125rem;
      line-height: 2rem;
    }
  }
`;

const FormLocationWrapper = styled.div`
  margin: 0 auto;
  margin-top: 12px;
  margin-bottom: 60px;
  padding: 12px;
  width: 100%;
  max-width: 100%;
  display: flex;
  flex: 0 0 100%;
  flex-wrap: wrap;

  ${MEDIA_QUERY_MD} {
    max-width: 100%;
    flex: 0 0 100%;
  }

  ${MEDIA_QUERY_LG} {
    max-width: 59%;
    flex: 0 0 59%;
  }
`;

const FormLocationContainer = styled.div`
  background: #fff;
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  border-color: #fff;
  border-radius: 4px;
`;

const LocationContent = styled.div`
  padding-left: 20px;
  display: flex;
  align-items: center;

  & > i {
    margin-right: 8px;
    color: rgba(0, 0, 0, 0.54);
    font-size: 24px;
  }

  & > span {
    margin-right: 40px;
    color: #757575;
  }
`;

const LocationButton = styled.button`
  padding: 0 24px !important;
  min-width: 92px;
  height: 52px;
  color: rgba(0, 0, 0, 0.87) !important;
  font-size: 1rem;
  font-weight: 500;
  border-right: 1px solid #dae1e7 !important;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.6, 1);

  &:hover {
    background: rgba(240, 240, 240, 1);
  }

  & > i {
    margin-right: 8px;
    font-size: 18px;
  }

  & > span {
    color: #212121;
    font-size: 1rem;
    font-weight: 400;
    letter-spacing: 0.09em;
  }
`;

const SearchInput = styled.input`
  padding-left: 20px;
  background: #fff;
  border-color: #fff;
  flex: 1;

  &:focus {
    outline: none;
  }
`;

const SearchButton = styled.button`
  padding: 0 24px !important;
  min-width: 92px;
  height: 52px;
  background: #d23f57 !important;
  color: #fff !important;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 1px;
  display: flex;
  align-items: center;
  border-style: none;
  border-color: #d23f57;
  border-radius: 4px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  box-shadow: 0 3px 1px -2px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%),
    0 1px 5px 0 rgb(0 0 0 / 12%);
  transition: all 0.2s cubic-bezier(0.4, 0, 0.6, 1);

  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }
`;

export default function Header() {
  return (
    <Wrapper>
      <HeaderNav />
      <Container className="content">
        <Content>
          <SloganContainer>
            <h1>
              Discover the best food & drinks in <span>New York</span>
            </h1>
            <h4>The meals you love, delivered with care</h4>
          </SloganContainer>
          <FormLocationWrapper>
            <FormLocationContainer>
              <LocationContent>
                <i className="fa fa-map-marker" aria-hidden="true"></i>
                <span>New York</span>
              </LocationContent>
              <LocationButton>
                <i className="fas fa-crosshairs"></i>
                <span>Locate Me</span>
              </LocationButton>
              <SearchInput placeholder="Search for restaurant"></SearchInput>
              <SearchButton>
                <span>Search</span>
              </SearchButton>
            </FormLocationContainer>
          </FormLocationWrapper>
        </Content>
      </Container>
    </Wrapper>
  );
}
