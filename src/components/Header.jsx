import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import AuthContext from "../store/auth_context";
const Header = () => {
	const { isLoggedIn, onLogout } = useContext(AuthContext);
	return (
		<HeaderTag>
			<WrapperTag>
				<div>
					<h1>원티드 프리온보딩 코스</h1>
				</div>
				<nav>
					<ul>
						{isLoggedIn ? (
							<li onClick={onLogout}>로그아웃</li>
						) : (
							<>
								<li>
									<Link to="/">로그인</Link>
								</li>
								<li>
									<Link to="join">회원가입</Link>
								</li>
							</>
						)}
					</ul>
				</nav>
			</WrapperTag>
		</HeaderTag>
	);
};

export default Header;

const HeaderTag = styled.header`
	div {
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
				color: #fff;
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

const WrapperTag = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 1em 2em;
	@media screen and (min-width: 768px) {
		max-width: 768px;
		margin: 0 auto;
	}
`;
