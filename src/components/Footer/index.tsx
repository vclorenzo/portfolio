import React from 'react';
import {
  StyledCopyrightText,
  StyledFooter,
  StyledLinks,
} from './index.styled.ts';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
      <StyledFooter>
        <StyledLinks color={'light'}>
          <ul>
            <a
              className='test'
              href='https://www.linkedin.com/in/vanz-czeray-lorenzo-981893189/'
              target='_blank'
              rel='noreferrer noopener'
            >
              <li>
                <div>
                  <FaLinkedin />
                </div>
              </li>
            </a>
            <a
              className='test'
              href='https://github.com/vclorenzo'
              target='_blank'
              rel='noreferrer noopener'
            >
              <li>
                <div>
                  <FaGithub />
                </div>
              </li>
            </a>
          </ul>
        </StyledLinks>
        <StyledCopyrightText>
          Copyright © 2024. All Rights Reserved
        </StyledCopyrightText>
      </StyledFooter>
    </>
  );
};

export default Footer;
