import './../../../css/aboutme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'


function AboutMe() {
    let avatar = `p-2 rounded-3`;
    const flexItems = "py-1 d-flex justify-content-sm-center align-items-center";
    const textFormat = "text-decoration-none mx-1 text-white d-flex flex-column justify-content-center align-items-center";
    const contactsContainerFormat = "col-lg-9 col-md-11 col-sm-10 col-8 py-1 px-2 d-flex flex-wrap flex-sm-row flex-column justify-content-between";
    const Contacts = [
        { icon: faEnvelope, link: "mailto:jzleong@outlook.com", text: "jzleong@outlook.com", bg_color: "bg-info" },
        { icon: faWhatsapp, link: "https://api.whatsapp.com/send?phone=60177655410", text: "+60 177655410", bg_color: "bg-green" },
        { icon: faGithub, link: "https://github.com/Zejakob123", text: "Zejakob123 (GitHub)", bg_color: "bg-black" },
        { icon: faLinkedin, link: "https://www.linkedin.com/in/leong-wee-hong/", text: "Leong Wee Hong (LinkedIn)", bg_color: "bg-primary" }
    ];
    const ContactItems = Contacts.map(contact => {

        return (
            <div className={flexItems}>
                <a className={`${textFormat} ${contact.bg_color} rounded-2 p-2`} href={contact.link} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={contact.icon} className={avatar} size={"xl"} /></a>
            </div>
        );
    });
    return (
        <>
            <div id="about" className="row d-flex pt-5 d-flex justify-content-center aboutmeview gap-4 bg-section-1">
                <div className="col-lg-3 col-md-4 col-sm-6 col-7 py-2 px-4 d-flex flex-column justify-content-center">
                    <img className="rounded-pill img-fluid w-100"
                        src={window.location.origin + "/pic_wh.jpg"} alt="Wee Hong" />
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 py-2 px-4 d-flex flex-column justify-content-center">
                    <div>
                        <h1>Hi. I'm <strong>Leong Wee Hong</strong>.</h1>
                        <h5>Software Engineering | Web Development | Mobile Development | Backend Development</h5>
                        <p>I have experience with a diverse range of technologies. Learn more about my journey in software engineering. Let's connect and create something amazing together!</p>
                        <div
                            className='d-flex flex-row justify-content-start align-items-center w-100 gap-4 mt-5'>

                            {ContactItems}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AboutMe;
