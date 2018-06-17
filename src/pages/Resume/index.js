import React, { Component } from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import Toolbar from "../../components/Toolbar";
import ContentBlock from "../../components/ContentBlock";
import TimeBlock from "../../components/TimeBlock";

class Home extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Matt Boatman | Résumé</title>
          <meta name="description" content="Résumé for Matt Boatman" />
          <meta property="og:title" content="Matt Boatman | Résumé" />
          <meta name="author" content="Matt Boatman" />
        </Helmet>
        <Toolbar
          title="Matt Boatman"
          rightLinks={[{ title: "home", link: "/" }]}
        />
        <Wrapper>
          <Content>
            <h1>Work Experience</h1>
            <TimeBlock
              place="Improving"
              duration="Nov 2017 - Present"
              title="Senior Consultant"
            />
            <Client>Client: Wendy's</Client>
            <ul>
              <LI>
                Tasked with localizing all of Wendy's applications
                <ul>
                  <LI>Kiosk</LI>
                  <LI>
                    <A href="https://find.wendys.com" target="_blank">
                      find.wendys.com,{" "}
                    </A>
                    <A href="https://order.wendys.com" target="_blank">
                      order.wendys.com,{" "}
                    </A>
                    <A href="https://my.wendys.com" target="_blank">
                      my.wendys.com
                    </A>
                  </LI>
                </ul>
              </LI>
              <LI>Focus on Canadian specific (English and French) workflows</LI>
              <LI>
                Created, documented, and taught the lab the new localization
                process
              </LI>
              <LI>
                Used{" "}
                <A href="https://www.i18next.com/" target="_blank">
                  i18next,{" "}
                </A>
                in combination with{" "}
                <A href="https://react.i18next.com/" target="_blank">
                  react-i18next,{" "}
                </A>
              </LI>
              <LI>
                Created a wrapping npm package that encapsulated i18next and
                react-i18next functionality along with Wendy's specific
                localization functions so any application could consume it
              </LI>
              <LI>
                Created the package{" "}
                <A href="https://www.npmjs.com/package/i18next-pseudo">
                  i18next-pseudo
                </A>{" "}
                to help developers create UIs without focusing on the length of
                english words
              </LI>
            </ul>
            <Client>Client: Roofsnap</Client>
            <ul>
              <LI>
                Identified client requirements and executed work in accordance
                with timelines
              </LI>
              <LI>
                Built a React/Redux site for a client that analyzes roofs from
                satellite imagery to estimate roofing costs
              </LI>
              <LI>
                All components tested using Enzyme and Chai, redux-mock-store
                for async action creators and middleware
              </LI>
              <LI>Designed the website following Material-UI guidelines</LI>
              <LI>
                Connected to 3rd party APIs to get accurate imagery based on
                addresses
              </LI>
            </ul>
            <hr />
            <TimeBlock
              place="Aver"
              duration="July 2017 - Nov 2017"
              title="Front-end Engineer"
            />
            <ul>
              <LI>
                Front-end engineer creating responsive and accessible web pages
                for differing business features
              </LI>
              <LI>
                Created and maintained npm libraries to be used across the
                microservice architecture. These included reusable AngularJS
                components as well as cross-cutting features such as
                authorization and routing
              </LI>
              <LI>
                Moved the current application from UI-Router .4x to 1.6x and
                converted the AngularJS application to use a component-based
                architecture
              </LI>
              <LI>
                Set a standard of integration tests for the front-end which
                complemented the discovery testable code and provided a greater
                confidence in the code
              </LI>
              <LI>
                Improved the development experience by rewriting the docker
                image utilized by the front-end applications
              </LI>
              <LI>
                Created prototypes to assist the business in selling new
                products
              </LI>
            </ul>
            <hr />
            <TimeBlock
              place="Capital One"
              duration="July 2014 - May 2017"
              title="Senior Software Engineer"
            />
            <Client>
              Role: EASE (Capital One Customer Credit Card Portal)
            </Client>
            <ul>
              <LI>
                Lead Front-end engineer for an agile feature team delivering
                critical features for Capital One card customers{" "}
              </LI>
              <LI>
                Product completed using AngularJs and Java while interfacing
                with RESTful APIs to create a UI compatible across all devices
                with support to IE10, Safari 8, and iOS8
              </LI>
              <LI>Features were written using TDD using Selenium</LI>
              <LI>Built and modified enterprise-wide UI components</LI>
              <LI>Lead the development and design of the new payments flow</LI>
              <LI>
                The new payments flow has 650k customers daily and increased
                payment completion by 6%
              </LI>
              <LI>
                Features delivered to production were address management,
                autopay, link accounts, email campaigns
              </LI>
              <LI>
                Supported production releases using Splunk, customer feedback,
                and manual validations
              </LI>
              <LI>
                Member of The Ohio State recruiting team. Responsible for job
                fit interviews and leading the selling process
              </LI>
            </ul>

            <Client>Role: IRIS (Capital One Customer Service Platform)</Client>
            <ul>
              <LI>
                Full stack developer on an agile team for Capital One’s Agent
                servicing platform
              </LI>
              <LI>
                Projects completed using C# and ASP.NET with a MVC pattern
              </LI>
              <LI>
                Interfaced with IVR systems to improve the workflow of various
                features for servicing agents
              </LI>
              <LI>
                Improved test coverage for the whole project and set standards
                for minimum test coverage
              </LI>
              <LI>
                Capital One Coders core member, which is a 10-week course on
                coding for underserved middle schoolers
              </LI>
            </ul>
            <hr />
            <h1>Technologies</h1>
            <Client>Skilled in:</Client>
            <ul>
              <LI>
                Javascript, ES6, React, Redux, Redux Thunk, AngularJS, Enzyme,
                Chai, Webpack, npm, Jasmine, Karma, Node.JS, Java, CSS3, HTML5,
                Jenkins, Travis, Github, AWS S3/Route 53, Docker, Material-UI,
                Bootstrap, Accessibility Standards, BrowserStack, Sinon
              </LI>
            </ul>
            <Client>Experience with:</Client>
            <ul>
              <LI>
                C#, Typescript, Angular, Underscore.js, Lodash, RequireJS,
                express, MongoDB, gulp, C++, C, Selenium, Babel
              </LI>
            </ul>
            <Client>Learning:</Client>
            <ul>
              <LI>Ruby, web design</LI>
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
const A = styled.a`
  color: #efdcd3;
  /* text-decoration: none; */
`;

const LI = styled.li`
  padding: 5px 0px;
  line-height: 21px;
`;
const Content = styled.div`
  padding: 24px;
  width: 80%;
`;

const Client = styled.div`
  font-size: 18px;
  font-weight: bold;
  padding-top: 10px;
`;
export default Home;
