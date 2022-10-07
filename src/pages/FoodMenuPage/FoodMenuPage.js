import styled from "styled-components";

import {
  MEDIA_QUERY_LG,
  MEDIA_QUERY_MD,
} from "../../constants/css/breakpoint.js";

const Wrapper = styled.div`
  margin-top: 64px;
`;

const Container = styled.div`
  margin: 0 auto;
  padding: 60px 12px;
  width: 100%;
  height: 800px;
  ${MEDIA_QUERY_MD} {
    max-width: 900px;
  }

  ${MEDIA_QUERY_LG} {
    max-width: 1185px;
  }

  text-align: center;
`;

export default function FoodMenuPage() {
  return (
    <Wrapper className="food-menu-wrapper">
      <Container>I am FoodMenuPage</Container>
    </Wrapper>
  );
}
