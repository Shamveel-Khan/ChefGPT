export default function List(props) {
    if (props.content && props.content.length > 0) {
        const listItems = props.content.map((item, index) => (
            item && <li key={index}>{item}</li>
        )).filter(Boolean);
        return (
            <>
            <div id="list">
                <h2>Ingredients:</h2>
                <br />
                <div>
                    {listItems.length > 0 && (
                        <ul>
                            {listItems}
                        </ul>
                    )}
                </div>
            </div>
            </>
        );
    } else {
        return (
            <div id="list-empty">
                <h2>
                    Add ingredients:
                </h2>
            </div>
        );
    }
}