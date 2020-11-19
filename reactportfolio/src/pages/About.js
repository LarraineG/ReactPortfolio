import React from "react";
import Container from "../components/Container"

const styles = {
    header: {   
        color: "white",
    },
    bio: {
        color: "white",
        textAlign: "center"
    },
    jumbotron: {
        backgroundImage: "linear-gradient(to bottom right, black, gray)",
        boxShadow: "0px 0px 50px black"
    },
    pic: {
        width: "250px",
        height: "400px",
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
        width: "40%"
    }
}

function About() {
    return (
        <Container className={"container w-95 mx-auto top-margin 70 vh-100 rounded"}>
            <div style={styles.jumbotron} className="jumbotron jumbotron-fluid rounded">
                <div className="container">
                    <h1 style={styles.header} className="display-4 text-center">Larraine Gonzales</h1>
                    <img style={styles.pic} src="https://user-images.githubusercontent.com/68169895/95691448-efe2cf80-0be4-11eb-8df6-bbb446341fb6.jpg" alt="Larraine!"></img>
                    <p style={styles.bio} className="lead">I am a certified Full Stack Developer. I thrive in the tech industry as I enjoy always learning the forever evolving tech tools! I have a background in marketing and sales, giving me a great eye for design for any desired market. </p>
                </div>
            </div>
        </Container>
    );
}

export default About;