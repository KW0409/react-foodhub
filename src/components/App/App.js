import styled from "styled-components";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import { HomePage, FoodMenuPage, RestaurantTwoColumnPage } from "../../pages";
import Toolbar from "../Toolbar";
import LocalitiesLink from "../LocalitiesLink";
import Footer from "../Footer";
import PageUpwardButton from "../PageUpwardButton/PageUpwardButton";

const Root = styled.div`
  height: 100%;
`;

export default function App() {
  return (
    <Root className="app-wrapper" id="page-top">
      <Router>
        <Toolbar />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/restaurant/FoodMenu" element={<FoodMenuPage />}></Route>
          <Route
            path="/restaurant/RestaurantTwoColumn"
            element={<RestaurantTwoColumnPage />}
          ></Route>
        </Routes>
        <LocalitiesLink />
        <Footer />
        <PageUpwardButton />
      </Router>
    </Root>
  );
}
