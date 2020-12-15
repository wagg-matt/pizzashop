import React from 'react';
import styled from 'styled-components';
import 'normalize.css';

import Footer from './Footer';
import Nav from './Nav';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';

import stripes from '../assets/images/stripes.svg';

const SiteBorderStyles = styled.div`
  background: #fff url(${stripes});
  background-size: 1500px;
  border: 5px solid #fff;
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.044);
  margin: 12rem auto 4rem auto;
  margin-top: clamp(2rem, 10vw, 12rem);
  max-width: 1000px;
  padding: 5px;
  padding: clamp(5px, 1vw, 25px);

  @media (max-width: 1100px) {
    margin-left: 1.5rem;
    margin-right: 1.5rem;
  }
`;

const ContentStyles = styled.div`
  background-color: #fff;
  padding: 2rem;
`;

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <Typography />
      <SiteBorderStyles>
        <ContentStyles>
          <Nav />
          {children}
          <Footer />
        </ContentStyles>
      </SiteBorderStyles>
    </>
  );
}
