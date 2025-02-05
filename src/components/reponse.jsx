import Markdown from 'react-markdown';
import React from 'react';

const Response = React.forwardRef((props, ref) => {
    return (
        <section id="suggested-recipe-container">
            <div ref={ref}>
                <Markdown>{props.result}</Markdown>
            </div>
        </section>
    );
});

export default Response;