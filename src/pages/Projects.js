import React from "react";
import Project from "../components/Project";
import Container from "../components/Container";

const styles = {
    
}
const projectList = [
    {
        title: "Weather Dashboard",
        href: "https://larraineg.github.io/WeatherDashboard/",
        about: "This is an easy to use Weather Application with a search box for your desired location with a 5 day forecast, utilizing a third party API",
        img: "https://user-images.githubusercontent.com/68169895/95691097-34b93700-0be2-11eb-9ae5-e561a4e2de00.png"
    },
    {
        title: "Brain Juice",
        href: "https://brainjuicing.herokuapp.com/",
        about: "Brain Juice is an application for students, those in creative fields, employees, writers, or anyone that may be experiencing burnout or mental fatigue to access a happy place for relaxation and revitalizing their minds.",
        img: "https://user-images.githubusercontent.com/68169895/95691142-819d0d80-0be2-11eb-9a33-2e3ed3f8ab42.png"
    },
    {
        title: "Budget Tracker",
        href: "https://budgtrac.herokuapp.com/",
        about: "This budget tracker will maintain functionality online and offline and a great tool for an budgeting your expenses",
        img: "https://user-images.githubusercontent.com/68169895/95691172-c3c64f00-0be2-11eb-9b1c-b8b7ed7e569f.png"
    },
    {
        title: "Note Taker",
        about: "This is a simple way to take any notes you may want to jot down",
        img: "https://user-images.githubusercontent.com/68169895/95691357-29ffa180-0be4-11eb-87de-38ec89007bb6.png"
    },
]

function Projects () {
    return(
        <Container className={"col-sm "}>
            <div className="col">
                {projectList.map((obj) => <Project key={obj.title} title={obj.title} href={obj.href} about={obj.about} img={obj.img}/>)}
            </div>
        </Container>
    );
}

            
export default Projects;