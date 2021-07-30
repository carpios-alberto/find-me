import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { ROUTES } from 'constants/routes';

const StyledNavBar = styled.nav`
  background-color: transparent;
  text-align: center;
  flex-shrink: 0;
  display: flex;
  justify-content: space-evenly;
  min-height: 85px;
  align-items: center;
  color: ${props => props.theme.colors.primary}
`;

const NavBar = () => {
  return (
    <StyledNavBar>
      <Link to={ROUTES.plan}>
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.2475 25.9436H11.7475V22.1331H14.2475V25.9436ZM20.9525 23.1213L18.3012 20.4272L20.0687 18.6312L22.7212 21.3265L20.955 23.1213H20.9525ZM5.0425 23.1213L3.27375 21.3252L5.92375 18.63L7.6925 20.426L5.0425 23.12V23.1213ZM12.9975 19.6016C9.54121 19.6002 6.74033 16.7523 6.74125 13.2402C6.74217 9.72822 9.54454 6.88178 13.0008 6.88225C16.4571 6.88271 19.2587 9.72991 19.2587 13.2419C19.2553 16.7538 16.4537 19.5995 12.9975 19.6016ZM12.9975 9.42257C10.9219 9.42397 9.24033 11.1346 9.24125 13.2436C9.24217 15.3527 10.9253 17.0618 13.0008 17.0613C15.0764 17.0608 16.7587 15.351 16.7587 13.2419C16.7567 11.1324 15.0735 9.42327 12.9975 9.42257ZM25.4975 14.5121H21.7475V11.9718H25.4975V14.5121ZM4.2475 14.5121H0.497498V11.9718H4.2475V14.5121ZM20.0675 7.85392L18.3012 6.05664L20.9525 3.36136L22.7212 5.15864L20.0687 7.85265L20.0675 7.85392ZM5.92625 7.85392L3.27625 5.15991L5.045 3.3639L7.695 6.05918L5.9275 7.85265L5.92625 7.85392ZM14.2475 4.35081H11.7475V0.540329H14.2475V4.35081Z" fill="#00AA9B"/>
        </svg>
        <div>Explore</div>
      </Link>
      <a>
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.2475 25.9436H11.7475V22.1331H14.2475V25.9436ZM20.9525 23.1213L18.3012 20.4272L20.0687 18.6312L22.7212 21.3265L20.955 23.1213H20.9525ZM5.0425 23.1213L3.27375 21.3252L5.92375 18.63L7.6925 20.426L5.0425 23.12V23.1213ZM12.9975 19.6016C9.54121 19.6002 6.74033 16.7523 6.74125 13.2402C6.74217 9.72822 9.54454 6.88178 13.0008 6.88225C16.4571 6.88271 19.2587 9.72991 19.2587 13.2419C19.2553 16.7538 16.4537 19.5995 12.9975 19.6016ZM12.9975 9.42257C10.9219 9.42397 9.24033 11.1346 9.24125 13.2436C9.24217 15.3527 10.9253 17.0618 13.0008 17.0613C15.0764 17.0608 16.7587 15.351 16.7587 13.2419C16.7567 11.1324 15.0735 9.42327 12.9975 9.42257ZM25.4975 14.5121H21.7475V11.9718H25.4975V14.5121ZM4.2475 14.5121H0.497498V11.9718H4.2475V14.5121ZM20.0675 7.85392L18.3012 6.05664L20.9525 3.36136L22.7212 5.15864L20.0687 7.85265L20.0675 7.85392ZM5.92625 7.85392L3.27625 5.15991L5.045 3.3639L7.695 6.05918L5.9275 7.85265L5.92625 7.85392ZM14.2475 4.35081H11.7475V0.540329H14.2475V4.35081Z" fill="#00AA9B"/>
        </svg>
        <div>Explore</div>
      </a>
      <a>
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.2475 25.9436H11.7475V22.1331H14.2475V25.9436ZM20.9525 23.1213L18.3012 20.4272L20.0687 18.6312L22.7212 21.3265L20.955 23.1213H20.9525ZM5.0425 23.1213L3.27375 21.3252L5.92375 18.63L7.6925 20.426L5.0425 23.12V23.1213ZM12.9975 19.6016C9.54121 19.6002 6.74033 16.7523 6.74125 13.2402C6.74217 9.72822 9.54454 6.88178 13.0008 6.88225C16.4571 6.88271 19.2587 9.72991 19.2587 13.2419C19.2553 16.7538 16.4537 19.5995 12.9975 19.6016ZM12.9975 9.42257C10.9219 9.42397 9.24033 11.1346 9.24125 13.2436C9.24217 15.3527 10.9253 17.0618 13.0008 17.0613C15.0764 17.0608 16.7587 15.351 16.7587 13.2419C16.7567 11.1324 15.0735 9.42327 12.9975 9.42257ZM25.4975 14.5121H21.7475V11.9718H25.4975V14.5121ZM4.2475 14.5121H0.497498V11.9718H4.2475V14.5121ZM20.0675 7.85392L18.3012 6.05664L20.9525 3.36136L22.7212 5.15864L20.0687 7.85265L20.0675 7.85392ZM5.92625 7.85392L3.27625 5.15991L5.045 3.3639L7.695 6.05918L5.9275 7.85265L5.92625 7.85392ZM14.2475 4.35081H11.7475V0.540329H14.2475V4.35081Z" fill="#00AA9B"/>
        </svg>
        <div>Explore</div>
      </a>
    </StyledNavBar>
  );
};

export default NavBar;