import styled from "styled-components";
import { Link } from "react-router-dom";

import {
  MEDIA_QUERY_LG,
  MEDIA_QUERY_MD,
} from "../../constants/css/breakpoint.js";

const Wrapper = styled.div`
  padding: 64px 0;
  width: 100%;
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
  margin-bottom: 20px;
  font-size: 25px;
  color: rgba(0, 0, 0, 0.87);
`;

const LinkContent = styled.div`
  margin: -12px;
  display: flex;
  flex-wrap: wrap;
  flex: 1 1 auto;
`;

const LinkList = styled.ul`
  margin-bottom: 12px;
  padding: 12px;
  list-style: none;

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
`;

const StyledLink = styled(Link)`
  color: rgba(0, 0, 0, 0.87);
  text-decoration: none;

  & > span {
    color: #9e9e9e;
  }
`;

export default function LocalitiesLink() {
  return (
    <Wrapper className="localities-link">
      <Container>
        <Title>Popular Localities In & Around New York</Title>
        <LinkContent>
          <LinkList>
            <ListItem>
              <StyledLink to="/restaurant/RestaurantTwoColumn">
                Newport <span>(26 places)</span>
              </StyledLink>
            </ListItem>
            <ListItem>
              <StyledLink to="/restaurant/RestaurantTwoColumn">
                Brooklyn <span>(14 places)</span>
              </StyledLink>
            </ListItem>
            <ListItem>
              <StyledLink to="/restaurant/RestaurantTwoColumn">
                Chinatown <span>(10 places)</span>
              </StyledLink>
            </ListItem>
            <ListItem>
              <StyledLink to="/restaurant/RestaurantTwoColumn">
                Chelsea <span>(20 places)</span>
              </StyledLink>
            </ListItem>
            <ListItem>
              <StyledLink to="/restaurant/RestaurantTwoColumn">
                Coney Island <span>(6 places)</span>
              </StyledLink>
            </ListItem>
          </LinkList>

          <LinkList>
            <ListItem>
              <StyledLink to="/restaurant/RestaurantTwoColumn">
                Newport <span>(26 places)</span>
              </StyledLink>
            </ListItem>
            <ListItem>
              <StyledLink to="/restaurant/RestaurantTwoColumn">
                Brooklyn <span>(14 places)</span>
              </StyledLink>
            </ListItem>
            <ListItem>
              <StyledLink to="/restaurant/RestaurantTwoColumn">
                Chinatown <span>(10 places)</span>
              </StyledLink>
            </ListItem>
            <ListItem>
              <StyledLink to="/restaurant/RestaurantTwoColumn">
                Chelsea <span>(20 places)</span>
              </StyledLink>
            </ListItem>
            <ListItem>
              <StyledLink to="/restaurant/RestaurantTwoColumn">
                Coney Island <span>(6 places)</span>
              </StyledLink>
            </ListItem>
          </LinkList>

          <LinkList>
            <ListItem>
              <StyledLink to="/restaurant/RestaurantTwoColumn">
                Newport <span>(26 places)</span>
              </StyledLink>
            </ListItem>
            <ListItem>
              <StyledLink to="/restaurant/RestaurantTwoColumn">
                Brooklyn <span>(14 places)</span>
              </StyledLink>
            </ListItem>
            <ListItem>
              <StyledLink to="/restaurant/RestaurantTwoColumn">
                Chinatown <span>(10 places)</span>
              </StyledLink>
            </ListItem>
            <ListItem>
              <StyledLink to="/restaurant/RestaurantTwoColumn">
                Chelsea <span>(20 places)</span>
              </StyledLink>
            </ListItem>
            <ListItem>
              <StyledLink to="/restaurant/RestaurantTwoColumn">
                Coney Island <span>(6 places)</span>
              </StyledLink>
            </ListItem>
          </LinkList>

          <LinkList>
            <ListItem>
              <StyledLink to="/restaurant/RestaurantTwoColumn">
                Newport <span>(26 places)</span>
              </StyledLink>
            </ListItem>
            <ListItem>
              <StyledLink to="/restaurant/RestaurantTwoColumn">
                Brooklyn <span>(14 places)</span>
              </StyledLink>
            </ListItem>
            <ListItem>
              <StyledLink to="/restaurant/RestaurantTwoColumn">
                Chinatown <span>(10 places)</span>
              </StyledLink>
            </ListItem>
            <ListItem>
              <StyledLink to="/restaurant/RestaurantTwoColumn">
                Chelsea <span>(20 places)</span>
              </StyledLink>
            </ListItem>
            <ListItem>
              <StyledLink to="/restaurant/RestaurantTwoColumn">
                Coney Island <span>(6 places)</span>
              </StyledLink>
            </ListItem>
          </LinkList>
        </LinkContent>
      </Container>
    </Wrapper>
  );
}
