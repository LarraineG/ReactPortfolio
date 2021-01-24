import React from "react";

const styles = {
    projectConatiner: {
        color: "black"
    },
    img: {
        postion: "absolute",
        display: "flex",
        alignItems: "flex-end",
        width: "100%"
    },
    cardBody: {
        width: "100%"
    }
}

function Project(props) {
    return (
        <div style={styles.projectConatiner} className="card text-center col-5 mx-auto rounded my-1 shadow-lg border" >
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.about}</p>
                <a style={styles.img} href={props.href}><img className="img-thumbnail" src={props.img} alt="Project Thumbnail"></img></a>
            </div>
        </div>
    );
}

export default Project;