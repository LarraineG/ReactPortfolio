import React from "react";

const styles = {
    LinkedIn: {
        width: "100px",
        height: "100px",
        marginTop: "95px",
        marginLeft: "10px"
    },
    GitHub: {
        width: "100px",
        height: "100px",
    },
    email: {
        width: "100px",
        height: "100px",
        marginLeft: "0px",
        marginTop: "60px",
    }
}

function Contact() {
    return (
        <div class="container vh-100">
            <div class="col-xsm my-auto">
                <a href="mailto:larrainegonzales@hotmail.com" target="_blank">
                    <img style={styles.email} src="https://user-images.githubusercontent.com/68169895/95689982-3b43b080-0bda-11eb-876a-bb1b26a0b909.jpg" alt="Email"></img>
                </a>
            </div>
            <div class="row">
                <div class="col-xsm my-auto">
                    <a href="https://www.linkedin.com/in/larraine-gonzales-9295abb9/" target="_blank">
                        <img style={styles.LinkedIn} src="https://user-images.githubusercontent.com/68169895/95690066-ab523680-0bda-11eb-8502-80f07b046c90.jpg" alt="LinkedIn">
                        </img>
                    </a>
                </div>
                <br/>
                <div class="col-xsm ">
                    <a href="https://github.com/LarraineG" target="_blank">
                        <img style={styles.GitHub} src="https://user-images.githubusercontent.com/68169895/95689950-0b94a880-0bda-11eb-84dd-c2cd943d6573.png" alt="GitHub">
                        </img>
                    </a>
                </div>
            </div>
            <div className="text-center" style={{ color: "white" }}>
                <h1>Contact Info:</h1>
                <a href="mailto:larrainegonzales@hotmail.com">E-mail: LarraineGonzales@hotmail.com</a>
                <p>Phone: (281) 546-0924</p>
            </div>
        </div>
    );
}

export default Contact;