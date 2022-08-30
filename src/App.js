import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/home/Home";
import Todo from "./pages/todo/Todo";
import GlobalStyles from "./styles/GlobalStyles";
import PrivateRoutes from "./utils/PrivateRoutes";
import PublicRoutes from "./utils/PublicRoutes";

function App() {
	return (
		<>
			<GlobalStyles />
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route element={<PublicRoutes />}>
						<Route index element={<Home />} />
						<Route path="join" element={<Home />} />
					</Route>
					<Route element={<PrivateRoutes />}>
						<Route path="todo" element={<Todo />} />
					</Route>
				</Route>
				<Route path="*" element={<Navigate to="/"/>}/>
			</Routes>
		</>
	);
}

export default App;
