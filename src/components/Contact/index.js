import React from "react";
import { ContactForm } from "../ContactForm/ContactForm";
import "./Contact.css"
import { GoMarkGithub } from "react-icons/go";
import { BsLinkedin } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { GrMapLocation } from "react-icons/gr";

function Contact() {
    return (
        <section className="contactSection" id="contactSection">
                <div className="contactColumns">
                    <ContactForm />
                </div>
                <div className="contactColumns">
                    <h6>Contact Me</h6>
                    <p className="divider"/>
                    <p>Feel free to use the most comfortable contact plataform for you.</p>
                    <div className="contactDetails">
                        <BsWhatsapp className="contactIcon" />
                        <p> +54 9 11 5488 1218</p>
                    </div>
                    <div className="contactDetails">
                        <SiGmail className="contactIcon" />
                        <p>Duranalejandro661@gmail.com</p>
                    </div>
                    <div className="contactDetails">
                        <BsLinkedin className="contactIcon" />
                        <p>linkdin account</p>
                    </div>
                    <div className="contactDetails">
                        <GoMarkGithub className="contactIcon" />
                        <p>+54 9 11 5488 1218</p>
                    </div>
                    <div className="contactDetails">
                        <GrMapLocation className="contactIcon" />
                        <p>Sarandi, Provincia de Buenos Aires. Argentina</p>
                    </div>
                </div>
        </section>
    )
}

export { Contact }