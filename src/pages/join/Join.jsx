import React from 'react'
import {useNavigate} from "react-router-dom"
import useInput from '../../hooks/use-input';
import { join } from '../../services/auth';
import { FormTag, InputWrapperTag } from '../login/Login';
const Join = () => {
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
        const res = await join(enteredEmail,enteredPassword)
        if (res?.status === 201) {
			navigate("/todo");
		} else {
            // modal 알림
            console.log(res.data.message)
			resetemailInput();
			resetPasswordInput();
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
					회원가입
				</button>
			</FormTag>
		</>
  )
}

export default Join