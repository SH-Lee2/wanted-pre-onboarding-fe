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
`;
