import React from "react";

function About() {
    return (
        <div>
            <section id="about-me" className="my-5">
                <div className = "flex-row">
                    <h1 className="about-title primary-border">About Me</h1>
                </div>
                <div className="flex-row">
                    <div className="about-info">
                        <p>Welcome to my portfolio website! I'm Mark, full-stack web developer.</p>
                        <p>I am a former actor who has found a new home in learning and implementing new coding skills.</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About;