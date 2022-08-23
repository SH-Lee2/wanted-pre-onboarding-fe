import React, { useEffect, useState } from "react";
import styled from "styled-components";
import AddTodo from "../../components/add_todo/AddTodo";
import LoadingSpinner from "../../components/loading_spinner/LoadingSpinner";
import TodoItem from "../../components/todo_item/TodoItem";
import {
	createTodo,
	deleteTodo,
	getTodos,
	updateTodo,
} from "../../services/todo";

const Todo = () => {
	const [todos, setTodos] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		const getTodoLIst = async () => {
			setIsLoading(true);
			const res = await getTodos();
			setTodos(res.data);
			setIsLoading(false);
		};
		getTodoLIst();
	}, []);

	const deleteHandler = async (id) => {
		await deleteTodo(id);
		const newTodos = todos.filter((item) => item.id !== id);
		setTodos(newTodos);
	};

	const addHandler = async (text) => {
		const res = await createTodo(text);
        console.log(text, res.data)

		setTodos((pre) => ([...pre, res.data]));
	};
	// 수정 , 완료
	const updateAndConfirmHandler = async (id, data) => {
		await updateTodo(id, data);
		setTodos((pre) =>
			pre.map((item) => {
				if (item.id === id) {
					item.todo = data.todo;
					item.isCompleted = data.isCompleted;
					return item;
				}
				return item;
			})
		);
	};

	return (
		<>
			{isLoading ? (
				<LoadingSpinner />
			) : (
				<>
					<TodoListTag>
						{todos &&
							todos.map((item) => (
								<TodoItem
									item={item}
									key={item.id}
									onDelete={deleteHandler}
									onUpdate={updateAndConfirmHandler}
								/>
							))}
					</TodoListTag>
					<AddTodo onAdd={addHandler} />
				</>
			)}
		</>
	);
};

export default Todo;

const TodoListTag = styled.ul`
	width: 100%;
	box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
		rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
	display: flex;
	flex-direction: column;
	row-gap: 1em;
	border-radius: 5px;
`;
