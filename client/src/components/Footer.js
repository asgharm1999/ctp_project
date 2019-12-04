import React from "react";
import styled from 'styled-components';

const Styles = styled.div`
	.footer {
		display: flex;
		justify-content: center;
		align-items: flex-end;
		height: 20vh;
		background-color: black;
		color: white;
	}

`;

function Footer() {
  return (
  <Styles>
    <div className="footer">
      <h1>This is footer</h1>
    </div>
   </Styles>
  );
}

export default Footer;