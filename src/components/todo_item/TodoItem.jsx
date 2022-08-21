import React, { useState } from "react";
import styled from "styled-components";
const TodoItem = ({ item, onDelete, onUpdate }) => {
	const [editMode, setEditMode] = useState(false);
	const [enteredValue, setEnteredValue] = useState(item.todo);
	const saveHandler = () => {
		setEditMode(false);
		onUpdate(item.id, {
			todo: enteredValue,
			isCompleted: item.isCompleted,
		});
	};

	const confirmHandler = () => {
		onUpdate(item.id, {
			todo: enteredValue,
			isCompleted: true,
		});
	};

	const cancelHandler = () => {
		setEditMode(false);
		setEnteredValue(item.todo);
	};

	return (
		<>
			<ItemTag key={item.id}>
				{!editMode ? (
					<>
						<p>
							{item.isCompleted ? (
								<s>{enteredValue}</s>
							) : (
								enteredValue
							)}
						</p>
						<div>
							{!item.isCompleted && (
								<button
									className="edit"
									type="button"
									onClick={() => setEditMode(true)}
								>
									수정
								</button>
							)}
							<button
								className="confirm"
								type="button"
								onClick={confirmHandler}
								disabled={item.isCompleted}
							>
								완료
							</button>
							<button
								className="delete"
								type="button"
								onClick={() => onDelete(item.id)}
							>
								삭제
							</button>
						</div>
					</>
				) : (
					<>
						<input
							type="text"
							value={enteredValue}
							autoFocus
							onChange={(e) => setEnteredValue(e.target.value)}
						/>
						<div>
							<button
								className="save"
								type="button"
								onClick={saveHandler}
							>
								저장
							</button>
							<button
								className="cancel"
								type="button"
								onClick={cancelHandler}
							>
								취소
							</button>
						</div>
					</>
				)}
			</ItemTag>
		</>
	);
};

export default TodoItem;

const ItemTag = styled.li`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0.5em 1em;
	:not(:last-child) {
		border-bottom: 1.5px solid #9563fb;
	}
	column-gap: 1em;
	input {
		flex: 1;
		:focus {
			outline: none;
		}
	}
	div {
		display: flex;
		column-gap: 0.5em;
		button {
			border: none;
			border-radius: 5px;
			color: #fff;
			display: flex;
			padding: 0.2em 0.5em;
			cursor: pointer;
		}
		.edit {
			background-color: #9563fb;
		}
		.confirm {
			cursor: pointer;
			background-color: lightgray;
			:disabled {
				background-color: #39e75f;
				cursor: auto;
			}
		}
		.save {
			background-color: #39e75f;
		}
		.delete,
		.cancel {
			background-color: #ff2c2c;
		}
	}
`;
