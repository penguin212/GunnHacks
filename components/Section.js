export default function Section(props) {
    return (
        <section>
            <h1>{props.title}</h1>
            <p>{props.desc}</p>
            {props.withButton && <button>Hi</button>}
        </section>
    )
}
