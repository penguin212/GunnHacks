import {useRef} from 'react';
import Container from '../components/Container';

// DISCLAIMER: this was not part of the workshop and was a little tangent at the end to explain refs
// If you are confused by this file that is a-ok
export default function Refs() {
    const ref = useRef();

    return (
        <Container>
            <input ref={ref} value="Focus me" />
            <button onClick={() => ref.current?.focus()}>Click to focus!</button>
        </Container>
    )
}
