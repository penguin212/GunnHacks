import {useState} from 'react';
import Container from '../components/Container';


export default function Counter() {
    const [count, setCount] = useState(0);
    const [on, setOn] = useState(false);

    return (
        <Container>
            <h1>The current count is {count}</h1>
            <button onClick={() => setCount(count + 1)}>Click me!</button>
            <button onClick={() => setOn(!on)}>
                Button is {on ? 'activated' : 'deactivated'}
            </button>
        </Container>
    )
}
