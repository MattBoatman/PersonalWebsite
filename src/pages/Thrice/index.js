import React, { Component } from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import Toolbar from "../../components/Toolbar";

class Home extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Thrice</title>
          <meta name="description" content="An honest review of Thrice" />
          <meta property="og:title" content="Matt Boatman | Thrice" />
          <meta name="author" content="Matt Boatman" />
        </Helmet>
        <Toolbar
          title="Matt Boatman"
          rightLinks={[{ title: "home", link: "/" }]}
        />
        <Wrapper>
          <Content>
          <Client>Thrice</Client>
            <ul>
              <LI>
                Black Honey: 3/10 (LRanking: 10/10)
              </LI>
              <LI>
                The Artist In The Ambulance: 6/10 (LRanking: 10/10)
              </LI>
              <LI>
                Hurricane: 5/10 (LRanking: 10/10)
              </LI>
            </ul>
          </Content>
        </Wrapper>
      </div>
    );
  }
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const LI = styled.li`
  padding: 5px 0px;
  line-height: 21px;
`;
const Content = styled.div`
  padding: 24px;
  width: 80%;
  @media (min-width: 320px) and (max-width: 600px) {
    width: 100%;
    padding: 12px;
  }
`;
const Client = styled.div`
  font-size: 18px;
  font-weight: bold;
  padding-top: 10px;
`;

export default Home;
