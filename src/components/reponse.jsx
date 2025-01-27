import Markdown from 'react-markdown'

export default function Response(props) {
    return (
        <section id="suggested-recipe-container">
            <Markdown>
                {props.result}
            </Markdown>
        </section>
    )
}