import { useEffect, useState } from "react";
import { join, login } from "../services/auth";
import AuthContext from "./auth_context";

export const AuthProvider = (props) => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	useEffect(() => {
		const token = localStorage.getItem("token");
		if (token) {
			setIsLoggedIn(true);
		}
	}, [isLoggedIn]);

	const logoutHandler = () => {
		localStorage.removeItem("token");
		setIsLoggedIn(false);
	};

	const loginAndJoinHandler = async(type, email, password) => {
        const res = type === "login" ? await login(email, password) : await join(email, password)
        if(res.status === 200 || res.status ===201){
            localStorage.setItem("token", res.data.access_token);
            setIsLoggedIn(true);
        }else{
            window.alert(res.data?.message)
        }
	};

	return (
		<AuthContext.Provider
			value={{
				isLoggedIn: isLoggedIn,
				onLogout: logoutHandler,
				onLoginAndJoin: loginAndJoinHandler,
			}}
		>
			{props.children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;
