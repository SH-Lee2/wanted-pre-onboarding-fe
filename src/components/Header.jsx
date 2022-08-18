import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const Header = () => {
	return (
		<HeaderTag>
			<div>
				<h1>원티드 프리온보딩 코스</h1>
			</div>
			<nav>
				<ul>
					<li>
						<Link to="/">로그인</Link>
					</li>
					<li>
						<Link to="join">회원가입</Link>
					</li>
				</ul>
			</nav>
		</HeaderTag>
	);
};

export default Header;

const HeaderTag = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1em 2em;
	div {
		flex: 1;
		text-align: center;
		h1 {
			color: #9563fb;
			font-size: 2rem;
		}
	}
	nav {
		ul {
			display: flex;
			column-gap: 1em;
			li {
				padding: 0.5em 1em;
				border-radius: 5px;
				background-color: #9563fb;
				a {
					color: #fff;
				}
			}
		}
	}
	border-bottom: 1px solid #9563fb;
`;
