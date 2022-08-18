import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import styled from "styled-components";
const Layout = () => {
	return (
		<>
			<Header />
			<MainTag>
				<Outlet />
			</MainTag>
			<Footer />
		</>
	);
};

export default Layout;

const MainTag = styled.main`
	flex: 1;
    padding: 1em 2em;
	@media screen and (min-width: 768px) {
		min-width: 768px;
		margin: 0 auto;
	}
`;
