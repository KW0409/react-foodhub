import styled from "styled-components";

import {
  MEDIA_QUERY_LG,
  MEDIA_QUERY_MD,
} from "../../constants/css/breakpoint.js";
import mobileAppImg from "../../constants/css/picture/home-page/App.4927ff9.png";
import googlPlayLogo from "../../constants/css/picture/logo/google-play.430ca54.png";
import appStoreLogo from "../../constants/css/picture/logo/app-store.63e3986.png";

const Wrapper = styled.div`
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

const Content = styled.div`
  display: flex;
  justify-content: center;
`;

const MobileAppImg = styled.div`
  margin-right: 32px;
  margin-bottom: 12px;
  max-width: 185px;

  & > img {
    max-width: 185px;
  }
`;

const MobileAppInfo = styled.div`
  display: flex;
  flex-direction: column;

  & > h1 {
    color: rgba(0, 0, 0, 0.87);
    font-size: 40px;
  }

  & > p {
    color: #757575;
    font-size: 18px;
  }

  & > h6 {
    margin-bottom: 12px;
    color: #9e9e9e;
    font-size: 14px;
    font-weight: 400;
  }
`;

const RadioContainer = styled.div`
  margin: 16px 0;
  padding-top: 4px;
  max-width: 100%;
  color: rgba(0, 0, 0, 0.87);
  font-size: 16px;
  text-align: left;
  display: flex;
  flex: 0 1 auto;
  align-items: flex-start;

  & {
    & > div {
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
    }

    div + div {
      margin-left: 16px;
    }

    label {
      min-height: 8px;
      color: rgba(0, 0, 0, 0.6);
      font-size: 16px;
      line-height: 20px;
    }

    input {
      margin-right: 8px;
      width: 24px;
      height: 24px;
      color: rgba(0, 0, 0, 0.87);
      z-index: 1;
    }

    label:hover,
    input:hover {
      cursor: pointer;
    }

    input:hover {
      & + div {
        background: rgba(210, 210, 210, 0.6);
        transform: scale(1.2);
      }
    }

    input:checked:hover {
      & + div {
        background: rgba(0, 117, 255, 0.3);
        transform: scale(1.2);
      }
    }

    input + div:hover {
      cursor: pointer;
      background: rgba(210, 210, 210, 0.6);
      transform: scale(1.2);
    }

    input:checked + div:hover {
      background: rgba(0, 117, 255, 0.3);
      transform: scale(1.2);
    }
  }
`;

const Hover = styled.div`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  position: absolute;
  top: -5px;
  left: -5px;
`;

const InputContainer = styled.div`
  margin-bottom: 32px;
  display: flex;

  & div {
    padding: 0 12px;
    min-height: 38px;
    font-size: 16px;
    background: #fff;
    display: flex;
    flex: 1 1 auto;
    align-items: center;
    border-color: rgba(0, 0, 0, 0.42);
    border-left: 1px solid #dae1e7;
    border-top: 1px solid #dae1e7;
    border-bottom: 1px solid #dae1e7;
    border-radius: 4px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;

    & > input {
      padding: 4px 0 2px;
      color: rgba(0, 0, 0, 0.87);
      font-size: 16px;
      border-style: none;
      flex-grow: 1;

      &:focus {
        outline: none;
      }
    }
  }
`;

const InputButton = styled.button`
  padding: 20px 16px;
  min-width: 64px;
  height: 36px;
  background: #d23f57;
  color: #fff;
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
    opacity: 0.8;
  }
`;

const AppLogoWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const AppLogoContainer = styled.div`
  width: 150px;
  min-width: 48px;
  height: 50px;
  margin: 0;

  & + & {
    margin-left: 16px;
  }
`;
const logoStyle = {
  width: "inherit",
  height: "inherit",
};

export default function GetMobileApp() {
  return (
    <>
      <Wrapper className="mobile-app">
        <Container>
          <Content>
            <MobileAppImg>
              <img alt="mobileApp pic" src={mobileAppImg} />
            </MobileAppImg>
            <MobileAppInfo>
              <h1>Get the Mobile App</h1>
              <p>
                We will send you a link, open it on your phone to download the
                app
              </p>
              <RadioContainer>
                <div>
                  <input type="radio" name="contact" id="email"></input>
                  <Hover />
                  <label htmlFor="email">Email</label>
                </div>

                <div>
                  <input type="radio" name="contact" id="phone"></input>
                  <Hover />
                  <label htmlFor="phone">Phone</label>
                </div>
              </RadioContainer>
              <InputContainer>
                <div>
                  <input placeholder="Email"></input>
                </div>
                <InputButton>SEARCH</InputButton>
              </InputContainer>
              <h6>Download App from</h6>
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
            </MobileAppInfo>
          </Content>
        </Container>
      </Wrapper>
    </>
  );
}
