import React from "react";
import styled from "styled-components";

const Footer = () => {
	return (
		<FooterTag>
			<p>원티드</p>
		</FooterTag>
	);
};

export default Footer;

const FooterTag = styled.footer`
	background-color: #9563fb;
	padding: 1em 2em;

	p {
		color: #fff;
		font-size: 1.5rem;
		font-weight: 600;
	}
`;
