import React from "react";
import styled from "styled-components";
import useInput from "../../hooks/use-input";
import { login } from "../../services/auth";
import {useNavigate} from "react-router-dom"

const Login = () => {
    const navigate = useNavigate()
	const {
		value: enteredEmail,
		isValid: enteredEmailIsValid,
		hasError: emailInputHasError,
		valueChangeHandler: emailChangedHandler,
		inputBlurHandler: emailBlurHandler,
		reset: resetemailInput,
	} = useInput(
		(value) =>
			value.trim() !== "" &&
			/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)
	);

	const {
		value: enteredPassword,
		isValid: enteredPasswordIsValid,
		hasError: passwordInputHasError,
		valueChangeHandler: passwordChangedHandler,
		inputBlurHandler: passwordBlurHandler,
		reset: resetPasswordInput,
	} = useInput((value) => value.trim() !== "" && value.length >= 8);

	const submitHandler = async(event) => {
		event.preventDefault();
        const res = await login(enteredEmail, enteredPassword)
        if(res.status === 200){
            navigate("/todo")
        }else{
            // modal 알림
            resetemailInput()
            resetPasswordInput()
        }
	};

	let form = false;

	if (enteredEmailIsValid && enteredPasswordIsValid) form = true;

	return (
		<>
			<FormTag onSubmit={submitHandler}>
				<InputWrapperTag>
					<label htmlFor="email">이메일</label>
					<input
						type="email"
						placeholder="이메일을 입력해주세요."
						value={enteredEmail}
						onChange={emailChangedHandler}
                        onBlur={emailBlurHandler}
					/>
                    {emailInputHasError && <p>이메일 형식에 맞게 입력해주세요.</p>}
				</InputWrapperTag>
				<InputWrapperTag>
					<label htmlFor="password">비밀번호</label>
					<input
						type="password"
						placeholder="비밀번호를 입력해주세요."
						value={enteredPassword}
						onChange={passwordChangedHandler}
                        onBlur={passwordBlurHandler}
					/>
                    {passwordInputHasError && <p>비밀번호 8자리 이상 입력해주세요.</p>}
				</InputWrapperTag>
				<button type="submit" disabled={!form}>
					로그인
				</button>
			</FormTag>
		</>
	);
};

export default Login;

const FormTag = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
    height: 70%;
	width: 100%;
	row-gap: 2em;
	button {
        font-size: 1rem;
        background-color: #9563fb;
		border: none;
        color: #fff;
        padding: .5em 1em;
        border-radius: 5px;
        transition: .5s;
		:disabled {
            background-color: gray;
		}
	}
`;
const InputWrapperTag = styled.div`
	display: flex;
	row-gap: .75em;
    flex-direction: column;
	label {
		font-size: 1.2rem;
		color: #9563fb;
	}
	input {
		flex: 1;
		padding: 0.5em;
		font-size: 1rem;
		:focus {
			outline-color: #9563fb;
		}
	}
    p{
        font-size: .8rem;
        color: red;
    }
`;
