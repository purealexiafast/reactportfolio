function TextContainer(props) {

    return (
        <div>
            {props.title && <h4>{props.title}</h4>}
            <p>{props.text}</p>
        </div>
    )
}
export default TextContainer