import '../../../css/skill.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faCss3Alt, faJs, faReact, faVuejs, faLaravel, faFigma, faJava, faDocker, faAndroid, faGit } from '@fortawesome/free-brands-svg-icons'
import { faDatabase, faCloud, faMicrochip } from '@fortawesome/free-solid-svg-icons'

function Skills() {

    const skillsProgramming = [
        {
            name: "C/C++",
            img: "",
            icon: faMicrochip,
            description: ""
        },
        {
            name: "C#",
            img: "",
            icon: faMicrochip,
            description: ""
        },
        {
            name: "Java",
            img: "",
            icon: faJava,
            description: ""
        },
        {
            name: "HTML",
            img: "",
            icon: faHtml5,
            description: ""
        },
        {
            name: "CSS",
            img: "",
            icon: faCss3Alt,
            description: ""
        },
        {
            name: "JavaScript",
            img: "",
            icon: faJs,
            description: ""
        },
        {
            name: "ReactJS",
            img: "",
            icon: faReact,
            description: ""
        },
        {
            name: "React Native",
            img: "",
            icon: faReact,
            description: ""
        },
        {
            name: "VueJS",
            img: "",
            icon: faVuejs,
            description: ""
        },
        {
            name: "Laravel",
            img: "",
            icon: faLaravel,
            description: ""
        },
        {
            name: "Android Studio",
            img: "",
            icon: faAndroid,
            description: ""
        }

    ];

    const skillsKnowledge = [
        {
            name: "DSA",
            img: "",
            icon: faDatabase,
            description: ""
        },
        {
            name: "Database Design",
            img: "",
            icon: faDatabase,
            description: ""
        },
        {
            name: "Software Design",
            img: "",
            icon: faDatabase,
            description: ""
        },
        {
            name: "Software Testing",
            img: "",
            icon: faMicrochip,
            description: ""
        },
        {
            name: "UI / UX Design",
            img: "",
            icon: faMicrochip,
            description: ""
        },
        {
            name: "Data Mining",
            img: "",
            icon: faMicrochip,
            description: ""
        },
    ];

    const skillsTools = [
        {
            name: "Google Cloud Platform",
            img: "",
            icon: faCloud,
            description: ""
        },
        {
            name: "Azure Cloud",
            img: "",
            icon: faCloud,
            description: ""
        },
        {
            name: "Docker",
            img: "",
            icon: faDocker,
            description: ""
        },
        {
            name: "XamarinUI Testing",
            img: "",
            icon: faFigma,
            description: ""
        },
        {
            name: "Selenium",
            img: "",
            icon: faFigma,
            description: ""
        },
        {
            name: "Git",
            img: "",
            icon: faGit,
            description: ""
        },
        {
            name: "Figma",
            img: "",
            icon: faFigma,
            description: ""
        },
    ];

    return (
        <>
            <div id="skills" className="row pt-5 d-flex justify-content-center mb-4">
                <div className="col-lg-9 col-md-12 col-sm-12 col-12 py-2 px-4">
                    <h2>Skills:</h2>
                </div>
                <div className="col-lg-9 col-md-12 col-sm-12 col-12 py-2 px-4">
                    <h4>Programming:</h4>
                </div>
                <div
                    className="col-lg-9 d-flex flex-wrap justify-content-start align-items-stretch gap-2"
                >
                    {
                        skillsProgramming.map((skill, index) => {
                            return (
                                <div className="logo-container p-2 py-3">
                                    <div className="text-center w-100">
                                        <div className="card-body">
                                            <FontAwesomeIcon icon={skill.icon} size='2xl' />
                                            <h5 className="logo-text">{skill.name}</h5>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
                <div className="col-lg-9 col-md-12 col-sm-12 col-12 py-2 px-4 mt-2">
                    <h4>Knowledge / Concept:</h4>
                </div>
                <div
                    className="col-lg-9 d-flex flex-wrap justify-content-start align-items-stretch gap-2"
                >
                    {
                        skillsKnowledge.map((skill, index) => {
                            return (
                                <div className="logo-container p-2 py-3">
                                    <div className="text-center w-100">
                                        <div className="card-body">
                                            <FontAwesomeIcon icon={skill.icon} size='2xl' />
                                            <h5 className="logo-text">{skill.name}</h5>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
                <div className="col-lg-9 col-md-12 col-sm-12 col-12 py-2 px-4 mt-2">
                    <h4>technology Tools:</h4>
                </div>
                <div
                    className="col-lg-9 d-flex flex-wrap justify-content-start align-items-stretch gap-2"
                >
                    {
                        skillsTools.map((skill, index) => {
                            return (
                                <div className="logo-container p-2 py-3">
                                    <div className="text-center w-100">
                                        <div className="card-body">
                                            <FontAwesomeIcon icon={skill.icon} size='2xl' />
                                            <h5 className="logo-text">{skill.name}</h5>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </>
    );
}

export default Skills;