import React from "react"
import "./PersonalInfo.css"
import { ProfileDetails } from "../ProfileDetails"
import personalImg from "../../img/profile2.jpg"

function PersonalInfo({profile}) {
    

    return ([
        <section className="personalInfoSection" id="personalInfo">
            <div className="personalImgContainer">
                <img src={personalImg} alt="Manuel Rojas, Profile photograph."></img>
            </div>
            <div className="personalInfoDescription">
                <p className="subTitlePointer">About Me</p>
                <p className="divider"></p>
                <h6>I'm Manuel Rojas</h6>
                <p className="professionalTitle">Front-end Developer</p>
                <p className="descriptionContentDesktop">
                    Empresario, inversor y magnate sudafricano que también posee las nacionalidades canadiense y estadounidense. Es el fundador, consejero delegado e ingeniero jefe de SpaceX; inversor ángel, CEO y arquitecto de productos de Tesla, Inc.; fundador de The Boring Company; cofundador de Neuralink y OpenAI, aunque ya no tiene mas participación en OpenAI por desacuerdos en el rumbo de la empresa, además de ser el actual dueño de Twitter.
                </p>
                <p className="descriptionContentMobile">
                    Empresario, inversor y magnate sudafricano que también posee las nacionalidades canadiense y estadounidense. Es el fundador, consejero delegado e ingeniero jefe de SpaceX; inversor ángel, CEO y arquitecto de productos de Tesla, Inc.
                </p>
                <ProfileDetails profile={profile} />
                <a href = "#projectsSection">
                    <input type={"button"} value="See my work!" className="button"/>
                </a>
            </div>
        </section>   
    ])
}

export { PersonalInfo }