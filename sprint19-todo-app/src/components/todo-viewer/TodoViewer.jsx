import Input from "../input/Input";
import TodoItem from "../todo-item/TodoItem";
import TextArea from "../input/TextArea";
import Button from "../button/Button";
import Card from "../card/Card";
import Modal from "../modal/Modal";
import { useState } from "react";
import "./TodoViewer.css";

export default function TodoViewer({initialTodos}) {

    const getEmptyTodo = () => {
        return {title: '', description: '', completed: false}
    };

    const [todos, setTodos] = useState(initialTodos);
    const [newTodo, setNewTodo] = useState(getEmptyTodo());
    const [newTodoError, setNewTodoError] = useState('');
    const [editTodoError, setEditTodoError] = useState('');
    const [editTodo, setEditTodo] = useState(getEmptyTodo());
    const [isModalOpen, setIsModalOpen] = useState(false);

    const completedTodos = todos.filter(todo => todo.completed);
    const uncompletedTodos = todos.filter(todo => !todo.completed);

    const handleNewTodoUpdate = (key, nextValue) => {
        setNewTodo(prev => {
            return {...prev, [key]: nextValue};
        });
    }

    const handleEditTodoUpdate = (key, nextValue) => {
        setEditTodo(prev => {
            return {...prev, [key]: nextValue};
        });
    }

    const updateTodo = (todoId, todoKey, todoNextValue) => {
        setTodos(todos.map(todo => {
            if (todo.id !== todoId) {
                return todo;
            }

            return {...todo, [todoKey]: todoNextValue}
        }));
    }

    const deleteTodo = (todoId) => {
        setTodos(todos.filter(todo => todo.id !== todoId));
    }

    const openModalForTodo = (todoId) => {
        setEditTodo({...todos.find(todo => todo.id === todoId)});
        setIsModalOpen(true);
    }

    const createNewTodo = (e) => {
        e.preventDefault();

        if (!newTodo.title) {
            setNewTodoError('Title is required');
            return;
        }
        if (!newTodo.description) {
            setNewTodoError('Description is required');
            return;
        }

        setNewTodoError('');

        const maxId = todos.reduce((currentId, todo) => {
            return parseInt(currentId) > parseInt(todo.id) ? currentId : todo.id
        }, 0);

        setTodos([...todos, {
            ...newTodo,
            id: (parseInt(maxId) + 1).toString(),
        }]);

        setNewTodo(getEmptyTodo());
    }

    const editExistingTodo = (e) => {
        e.preventDefault();

        if (!editTodo.title) {
            setEditTodoError('Title is required');
            return;
        }
        if (!editTodo.description) {
            setEditTodoError('Description is required');
            return;
        }

        setEditTodoError('');

        const todoId = editTodo.id;

        setTodos(todos.map(todo => {
            if (todo.id !== todoId) {
                return todo;
            }

            return {...todo, ...editTodo};
        }));

        setEditTodo(getEmptyTodo());

        setIsModalOpen(false);
    }

    return (
    <>
        
        <Card>
            <h2>Create Todo</h2>
            <form>
                <Input
                    value={newTodo.title}
                    onValueChange={value => handleNewTodoUpdate('title', value)}
                />
                <TextArea
                    value={newTodo.description}
                    onValueChange={value => handleNewTodoUpdate('description', value)}
                />
                {/* <Checkbox></Checkbox>
                <Input
                    value={newTodo.completed}
                    type="checkbox"
                    onValueChange={value => handleNewTodoUpdate('completed', value)}
                /> */}
                <Button type="submit" onClick={createNewTodo}>Create</Button>
                {newTodoError && (<p className="new-todo-error">{newTodoError}</p>)}
            </form>
        </Card>

        <Card>
            <h1>My todos</h1>
            <Button onClick={() => console.log("Open Modal")}>Add +</Button>
            <div className="list-container">
                {uncompletedTodos.map(todo => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        onCompletedChange={value => updateTodo(todo.id, 'completed', value)}
                        onDelete={() => deleteTodo(todo.id)}
                        onEdit={() => openModalForTodo(todo.id)}
                    />
                ))}
            </div>

            <div className="separator"></div>

            <h2>Completed</h2>
            <div className="list-container">
                {completedTodos.map(todo => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        onCompletedChange={value => updateTodo(todo.id, 'completed', value)}
                        onDelete={() => deleteTodo(todo.id)}
                        onEdit={() => openModalForTodo(todo.id)}
                    />
                ))}
            </div>
        </Card>

        <Modal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
        >
            <form>
                <Input
                    value={editTodo.title}
                    onValueChange={value => handleEditTodoUpdate('title', value)}
                />
                <TextArea
                    value={editTodo.description}
                    onValueChange={value => handleEditTodoUpdate('description', value)}
                />
                <Button type="submit" onClick={editExistingTodo}>Edit</Button>
                {editTodoError && (<p className="new-todo-error">{editTodoError}</p>)}
            </form>
        </Modal>
    </>
  );
}