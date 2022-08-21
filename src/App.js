import { useContext, useEffect } from "react";
import {Routes, Route, useNavigate } from "react-router-dom";
import Layout from "./components/Layout";
import Join from "./pages/join/Join";
import Login from "./pages/login/Login";
import Todo from "./pages/todo/Todo";
import AuthContext from "./store/auth_context";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
	const navigate = useNavigate()
	const {isLoggedIn} = useContext(AuthContext)
	useEffect(()=>{
		if (isLoggedIn) {
			navigate("/todo")
		}
	},[navigate,isLoggedIn])
	return (
		<>
			<GlobalStyles />
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Login />} />
					<Route path="join" element={<Join />} />
					<Route path="todo" element={<Todo />} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
