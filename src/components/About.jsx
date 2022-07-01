function About(props) {
    return(
        <>
            <div>
                <h2>{props.subtitle}</h2>
                <p>{props.text}</p>
                <img src={props.pic} alt={props.description} />
            </div>
        </>
    )
}

export default About