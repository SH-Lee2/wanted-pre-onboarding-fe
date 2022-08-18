import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Join from "./pages/join/Join";
import Login from "./pages/login/Login";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
	return (
		<BrowserRouter>
			<GlobalStyles />
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Login />} />
					<Route path="join" element={<Join />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
