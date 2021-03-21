import React, {useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";

const TodoList: React.FC  = () => {
    const {todo, page, limit, error, loading} = useTypedSelector( state => state.todo)
    const pages = [1,2,3,4,5]
    const {fetchTodo, setTodoPage} = useActions()
    console.log(todo, 'todo')
    useEffect( () => {
        fetchTodo(page, limit)
    },[page])
    if (loading) return <h1>Loading...</h1>
    if (error) return <h1>{error}</h1>
    return (
        <div>
            <ul>
                {todo.map(todo =>
                    <li key={todo.id}>{todo.id} - {todo.title}</li>
                )}
            </ul>
            <div style={{display: "flex"}} >
                {pages.map(pag =>
                    <div onClick={() => setTodoPage(pag)}
                        style={{border: pag === page ? '2px solid red': '2px solid gray', padding: 12, cursor: "pointer"  }}>{pag}</div>
                )}
            </div>
        </div>
    );
};

export default TodoList;
