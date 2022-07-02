function About(props) {
    return(
        <>
            <div className="aboutMe">
                <img src={props.pic} alt={props.description} />
                <div className="aboutContent">
                    <h2>{props.subtitle}</h2>
                    <p>{props.text}</p>
                </div>
            </div>
        </>
    )
}

export default About