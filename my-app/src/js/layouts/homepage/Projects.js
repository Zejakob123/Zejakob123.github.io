import projectData from "../../assets/info/project.json";

function PaginationButton({ carouselID, numOfImg }) {
    console.log("paginationButton:carouselID=" + carouselID + ";numOfImg=" + numOfImg);

    const carouselIndBtn = [];

    for (let i = 0; i < numOfImg; i++) {
        carouselIndBtn.push(i);
    }



    return (
        <div className="carousel-indicators">
            {carouselIndBtn.map(index => {
                return <button type="button" data-bs-target={"#" + carouselID} data-bs-slide-to={index.toString()} aria-label={"Slide " + (index + 1).toString()} className={index === 0 && "active"} aria-current={index === 0 ? "true" : "false"} ></button>
            })
            }
        </div>
    );
}

function CarouselInner({ imgPaths, carouselID }) {
    console.log("CarouselInner:imgPaths=" + imgPaths + ";carouselID=" + carouselID);

    const carouselItems = imgPaths.map((path, index) => {
        return (
            <div className={"carousel-item" + (index === 0 ? " active" : "")}>

                <img className="d-block w-100 img-thumbnail" src={path.src} alt={"img-" + carouselID + "-" + index} />
                <div className="carousel-caption d-none d-md-block"></div>
            </div>
        );
    });

    return (
        <div className="carousel-inner">
            {carouselItems}
        </div>
    );
}

function CarouselControlBtn({ carouselID }) {
    console.log("CarouselControlBtn:carouselID=" + carouselID);
    return (
        <>
            <button className="carousel-control-prev" type="button" data-bs-target={"#" + carouselID} data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target={"#" + carouselID} data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </>
    );
}

function Carousel({ carouselID, imgPaths }) {
    console.log("Carousel:carouselID=" + carouselID + ";imgPaths=" + imgPaths);
    return (
        <div className="carousel slide" id={carouselID} data-bs-ride="true">
            <PaginationButton carouselID={carouselID} numOfImg={imgPaths.length} />
            <CarouselInner imgPaths={imgPaths} carouselID={carouselID} />
            <CarouselControlBtn carouselID={carouselID} />
        </div>
    );
}

function Description({ projectInfo, index }) {
    console.log("Description:projectInfo=" + projectInfo + ";index=" + index);

    const oriURL = window.location.origin;
    console.log(oriURL);
    return (
        <div className="card-body d-flex flex-column justify-content-between">
            <h5 className="card-title d-flex justify-content-center">{projectInfo.title}</h5>
            <div className="d-flex justify-content-center">
                <button className="btn btn-primary w-100" data-bs-toggle="collapse" data-bs-target={"#collapse-" + index} type="button" aria-expanded="false" aria-controls={"collapse-" + index}>
                    Description
                    {/* <i className="fa-sharp fa-solid fa-caret-down px-1"></i> */}
                </button>
            </div>
            <div className="collapse flex-grow-1" id={"collapse-" + index}>
                <div className="card card-body">
                    <p className="date-text">{projectInfo.sdate + " - " + projectInfo.edate}</p>
                    <p className="text-start">{projectInfo.description}</p>
                    <ul>
                        {
                            projectInfo.responsible.map((responsible, index) => {
                                return <li key={index}><p className="text-start">{responsible}</p></li>
                            })
                        }
                    </ul>

                    <p>{ }</p>
                </div>
            </div>
        </div>
    );
}

function ProjectCard({ carouselID, projectInfo }) {
    console.log("ProjectCard: carouselID=" + carouselID + ";projectInfo=" + Object.entries(projectInfo));
    return (
        <div className="col-lg-6 col-md-6 col-sm-12 p-1 d-flex align-items-stretch">
            <div className="card shadow-sm text-center w-100">
                <Carousel carouselID={carouselID} imgPaths={projectInfo.image} />
                <Description projectInfo={projectInfo} index={carouselID[carouselID.length - 1]} />
            </div>
        </div>
    );
}

function Projects() {
    console.log(projectData);
    //   console.log(projectInfo.project[0].title);

    return (
        <>
            <div id="project" className="row pt-5 d-flex justify-content-center">
                <div className="col-lg-9 col-md-12 col-sm-12 col-12 py-2 px-4">
                    <h2>Project:</h2>
                </div>
                <div
                    className="col-lg-9 d-flex flex-wrap justify-content-start align-items-stretch"
                >
                    {projectData.project.map((info, index) => {
                        return <ProjectCard carouselID={"carousel-" + index} projectInfo={info} />
                    })}
                </div>

            </div>
        </>
    );
}

export default Projects;