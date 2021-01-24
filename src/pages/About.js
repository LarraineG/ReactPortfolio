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
        boxShadow: "0px 0px 50px black",
        backgroundColor: "black"
    },
    pic: {
        width: "40%",
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
        mediaScreen: "max-width: 20%"

    },
    resume: {
        color: "black",
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
    }
}

function About() {
    return (
        <Container className={"container w-95 mx-auto top-margin 70 vh-100 rounded"}>
            <div style={styles.jumbotron} className="jumbotron jumbotron-fluid rounded">
                <div className="container">
                    <h1 style={styles.header} className="display-4 text-center">Larraine Gonzales</h1>
                    <img style={styles.pic} className="headshot" src="https://user-images.githubusercontent.com/68169895/105635464-894a9000-5e28-11eb-9b84-64ef1aa69c97.png" alt="Larraine!"></img>
                    <p style={styles.bio} className="lead">I am a certified Full Stack Developer. I thrive in the tech industry as I enjoy always learning the forever evolving tech tools! I have a background in marketing and sales, giving me a great eye for design for any desired market. <a style={styles.resume} href="https://drive.google.com/file/d/1Sc92BIYK3cvK3wkyVS3HdbtJjnb9mPEL/view?usp=sharing">View Resume</a></p>
                </div>
            </div>
        </Container>
    );
}

export default About;