import React from "react";
import styled from 'styled-components';

const Styles = styled.div`
	.footer {
		display: flex;
		justify-content: center;
		align-items: center;
		color: white;
		position: absolute;
		background-color: rgba(0,0,0,.5);
		height: 70px;
		width: 100%;
		bottom: 0;
		z-index: 401;
		word-spacing: 5px;
		font-size: 18px;
	}

	.footer a {
		font-size: 24px;
		text-decoration: none;
		opacity: 1.0;
		color: #5bc0de;
		font-weight: 300;
	}

	.footer a:hover {
		font-size: 30px;
		text-decoration: none;
		opacity: 1.0;
		color: black;
	}

`;

function Footer() {
  return (
  <Styles>
    <div className="footer ">
      <span> Created by <a href={"https://github.com/elunaj"}> Elias Luna </a></span>
      <span>&nbsp;and <a href={"https://github.com/asgharm1999"}> Muhammad Asghar&nbsp;</a></span>
      <span> @ <a href={"https://cunytechprep.nyc"}> CUNY Tech Prep </a></span>
    </div>
   </Styles>
  );
}

export default Footer;