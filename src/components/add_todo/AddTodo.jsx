import React, { useState } from "react";
import styled from "styled-components";

const AddTodo = ({onAdd}) => {
	const [enteredValue, setEnteredValue] = useState("");
	const submitHandler = (e) => {
		e.preventDefault();
		onAdd(enteredValue);
        setEnteredValue("")
	};

	return (
		<FormTag onSubmit={submitHandler}>
			<input
				type="text"
				placeholder="할 일을 입력해주세요."
                value={enteredValue}
				onChange={(e) => setEnteredValue(e.target.value)}
			/>
			<button type="submit" disabled={!enteredValue}>
				추가
			</button>
		</FormTag>
	);
};

export default AddTodo;

const FormTag = styled.form`
	width: 100%;
	display: flex;
	box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
		rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
	border-radius: 5px;
	input {
		flex: 1;
		outline: none;
		border: none;
		font-size: 1.2rem;
		padding: 0.5em;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
		:focus {
			border: 2px solid #9563fb;
		}
	}
	button {
		color: white;
		background-color: #9563fb;
		cursor: pointer;
		border: none;
		font-size: 1.2rem;
		padding: 0.5em;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
        :disabled {
			color: #000;
			background-color: lightgray;
		}
	}
`;
