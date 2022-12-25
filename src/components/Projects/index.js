import React from "react";
import "./Projects.css"

function Projects(props) {
    return (
    <section className="projectsSection" id="projectsSection">
        <h5>Projects in Development</h5>
        <p className="divider" />
        <p>Today, front-end frameworks and libraries are becoming an essential part of the modern web.</p>
        <div className="projectsContainer">
           <div className="imgContainer">
                <img src={require("../../img/websiteScreenshot.jpg")} alt="Project 1" />
                <p>Today, front-end frameworks and libraries are becoming an essential part of the modern web.</p>
                <input type={"button"} value="Github Repository" className="button"></input>
            </div>
            <div className="imgContainer">
                <img src={require("../../img/pathfindersAdventuresScreenshot.jpg")} alt="Project 2" />
                <p>Today, front-end frameworks and libraries are becoming an essential part of the modern web.</p>
                <input type={"button"} value="Github Repository" className="button"></input>
            </div> 
        </div>
    </section>
    )
}

export { Projects }