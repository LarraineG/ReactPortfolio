import React from "react";

const styles = {
    text: {
        color: "white"
    },
    bottom: {
        marginTop: "300px"
    },
    
}

function Footer() {
    return (
        <div className="bottom">
            <div className="card-body">
                <a style={styles.text} className="mx-5 badge margin top-300" href="https://www.linkedin.com/in/larraine-gonzales/" target="_blank">LinkedIn</a>
                <a style={styles.text} className="mx-5 badge" href="https://github.com/LarraineG" target="_blank">GitHub</a>
                <a style={styles.text} className="mx-5 badge" href="mailto:larrainegonzales@hotmail.com" target="_blank">Email: LarraineGonzales@hotmail.com</a>
                <span className="mx-5 badge" style={styles.text}>(281) 546-0924</span>
            </div>
        </div>
    );
}

export default Footer; 