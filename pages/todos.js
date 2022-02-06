import {useState} from 'react';
import Container from '../components/Container';


export default function Todos() {
    const [todos, setTodos] = useState([]);
    const [text, setText] = useState('');

    function addTodo() {
        if (text === '') return;
        setTodos([...todos, text]);
        setText('');
    }

    function removeTodo(i) {
        setTodos(todos.filter((_, j) => j !== i));
    }

    return (
        <Container>
            <h1>Todos</h1>
            {todos.map((d, i) => (
                <div key={d + i}>
                    <input type="checkbox" onChange={(e) => e.target.checked && removeTodo(i)} />
                    <span>{d}</span>
                </div>
            ))}
            <input
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && addTodo()}
            />
        </Container>
    )
}
