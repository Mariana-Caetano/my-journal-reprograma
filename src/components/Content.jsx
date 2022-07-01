function Content(props) {
    return(
        <>
        <div>
            <h3>{props.contentSubtitle}</h3>
            <img src={props.contentImg} alt={props.contentAlt} />
            <p>{props.contentText}</p>
        </div>
        </>
    )
}

export default Content