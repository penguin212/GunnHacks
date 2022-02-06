import Section from '../components/Section';
import Container from '../components/Container';


export default function About() {
    const sections = ['Hello', 'this is a section', 'let\'s conquer Australia'];
    return (
        <Container>
            {sections.map((d, i) => <Section key={d} title={`Section ${i}`} desc={d} />)}
            <p>Hello</p>
            <p>I am a child</p>
        </Container>
    )
}
