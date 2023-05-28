import { useEffect } from "react";

function PaginationButton({ carouselID, numOfImg }){
    const carouselIndBtn = [];

    for(let i = 0; i < numOfImg; i++){
        carouselIndBtn.push(i);
    }

    carouselIndBtn.map(index=>{
        return <button type="button" data-bs-target={ "#"+carouselID } data-bs-slide-to={index} aria-label={"Slide"+ index} aria-current={ index===0 && true } className={index === 0 && "active"}></button>
    });

    return (
        <div className="carousel-indicators">
            { carouselIndBtn }
        </div>
    );
}

function CarouselInner({ imgPaths, carouselID }){


    const carouselItems = imgPaths.map((path, index) =>{
        return (
            <div className={"carousel-item" + " " + (index === 0 && "active")}>
                <img className="d-block w-100 img-thumbnail" src={path} alt={"img-"+carouselID+"-"+index} />
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

function CarouselControlBtn({carouselID}){
    return (
        <>
            <button class="carousel-control-prev" type="button" data-bs-target={"#"+carouselID} data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target={"#"+carouselID} data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </>
    );
}

function Carousel({carouselID, imgPaths}){
    return (
        <div class="carousel slide" id="carousel-0" data-bs-ride="true">
            {/* <div class="carousel-indicators">
                <button type="button" data-bs-target="#carousel-0" data-bs-slide-to="0" aria-label="Slide 1" aria-current="true" class="active"></button>
                <button type="button" data-bs-target="#carousel-0" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carousel-0" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carousel-0" data-bs-slide-to="3" aria-label="Slide 4"></button>
                <button type="button" data-bs-target="#carousel-0" data-bs-slide-to="4" aria-label="Slide 5"></button>
                <button type="button" data-bs-target="#carousel-0" data-bs-slide-to="5" aria-label="Slide 6"></button>
            </div> */}
            <PaginationButton carouselID={carouselID} numOfImg={imgPaths.length} />
            {/* <div class="carousel-inner">
                <div class="carousel-item active"><img class="d-block w-100 img-thumbnail"
                    src="./Leong Wee Hong _ Personal Portfolio_files/1.jpg" alt="img-0-0" />
                    <div class="carousel-caption d-none d-md-block">
                        <h5></h5>
                        <p></p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100 img-thumbnail" src="./Leong Wee Hong _ Personal Portfolio_files/2.jpg" alt="img-0-1" />
                    <div class="carousel-caption d-none d-md-block">
                        <h5></h5>
                        <p></p>
                    </div>
                </div>
                <div class="carousel-item"><img class="d-block w-100 img-thumbnail"
                    src="./Leong Wee Hong _ Personal Portfolio_files/3.jpg" alt="img-0-2" />
                    <div class="carousel-caption d-none d-md-block">
                        <h5></h5>
                        <p></p>
                    </div>
                </div>
                <div class="carousel-item"><img class="d-block w-100 img-thumbnail"
                    src="./Leong Wee Hong _ Personal Portfolio_files/4.jpg" alt="img-0-3" />
                    <div class="carousel-caption d-none d-md-block">
                        <h5></h5>
                        <p></p>
                    </div>
                </div>
                <div class="carousel-item"><img class="d-block w-100 img-thumbnail"
                    src="./Leong Wee Hong _ Personal Portfolio_files/5.jpg" alt="img-0-4" />
                    <div class="carousel-caption d-none d-md-block">
                        <h5></h5>
                        <p></p>
                    </div>
                </div>
                <div class="carousel-item"><img class="d-block w-100 img-thumbnail"
                    src="./Leong Wee Hong _ Personal Portfolio_files/6.jpg" alt="img-0-5" />
                    <div class="carousel-caption d-none d-md-block">
                        <h5></h5>
                        <p></p>
                    </div>
                </div>
            </div> */}
            <CarouselInner imgPaths = {imgPaths} carouselID={carouselID}/>
            <CarouselControlBtn carouselID={carouselID} />
        </div>
    );
}

function Description({ projectInfo }){
    return (
        <div class="card-body">
            <h5 class="card-title d-flex justify-content-center">{ projectInfo.title }</h5>
            <div class="d-flex justify-content-center">
                <a class="btn btn-primary w-100" data-bs-toggle="collapse" href={window.location.origin+"#collapse-0"} role="button" aria-expanded="false" aria-controls="#collapse-0">
                    Description
                    <i class="fa-sharp fa-solid fa-caret-down px-1"></i>
                </a>
            </div>
            <div class="collapse" id="collapse-0">
                <div class="card card-body">
                    <p class="date-text">{ projectInfo.sdate + " - " + projectInfo.edate }</p>
                    <p>{ projectInfo.description }</p>
                    <p>{ projectInfo.responsible }</p>
                </div>
            </div>
        </div>
    );
}

function ProjectCard({carouselID, projectInfo}){
    return (
        <div class="col-md-4 col-sm-6 p-1 d-flex align-items-stretch">
            <div class="card shadow-sm text-center w-100">
                <Carousel carouselID={carouselID} imgPaths={projectInfo.image}/>
                <Description projectInfo={projectInfo} />
            </div>
        </div>
    );
}

function Projects() {

    let projectInfo = null;
    console.log(window.location.origin+'/info/project.json');
    useEffect(()=>{
        fetch(window.location.origin+'./info/project.json')
            .then(response=> projectInfo = response.json(),console.log(projectInfo));
    });

    return (
        <>
            <div id="project" className="row pt-5 d-flex justify-content-center">
                <div className="col-lg-9 col-md-11 col-sm-10 col-12 py-2 px-4">
                    <h2>Project:</h2>
                </div>
                { projectInfo.map((info, index)=>{
                    return <ProjectCard carouselID={"carousel-"+index} projectInfo={info}/>
                })}
                {/* <div class="col-md-4 col-sm-6 p-1 d-flex align-items-stretch">
                    <div class="card shadow-sm text-center w-100">
                        <div class="carousel slide" id="carousel-0" data-bs-ride="false">
                            <div class="carousel-indicators"><button type="button" data-bs-target="#carousel-0"
                                data-bs-slide-to="0" aria-label="Slide 1" aria-current="true"
                                class="active"></button><button type="button" data-bs-target="#carousel-0"
                                    data-bs-slide-to="1" aria-label="Slide 2"></button><button type="button"
                                        data-bs-target="#carousel-0" data-bs-slide-to="2"
                                        aria-label="Slide 3"></button><button type="button" data-bs-target="#carousel-0"
                                            data-bs-slide-to="3" aria-label="Slide 4"></button><button type="button"
                                                data-bs-target="#carousel-0" data-bs-slide-to="4"
                                                aria-label="Slide 5"></button><button type="button" data-bs-target="#carousel-0"
                                                    data-bs-slide-to="5" aria-label="Slide 6"></button></div>
                            <div class="carousel-inner">
                                <div class="carousel-item active"><img class="d-block w-100 img-thumbnail"
                                    src="./Leong Wee Hong _ Personal Portfolio_files/1.jpg" alt="img-0-0" />
                                    <div class="carousel-caption d-none d-md-block">
                                        <h5></h5>
                                        <p></p>
                                    </div>
                                </div>
                                <div class="carousel-item"><img class="d-block w-100 img-thumbnail"
                                    src="./Leong Wee Hong _ Personal Portfolio_files/2.jpg" alt="img-0-1" />
                                    <div class="carousel-caption d-none d-md-block">
                                        <h5></h5>
                                        <p></p>
                                    </div>
                                </div>
                                <div class="carousel-item"><img class="d-block w-100 img-thumbnail"
                                    src="./Leong Wee Hong _ Personal Portfolio_files/3.jpg" alt="img-0-2" />
                                    <div class="carousel-caption d-none d-md-block">
                                        <h5></h5>
                                        <p></p>
                                    </div>
                                </div>
                                <div class="carousel-item"><img class="d-block w-100 img-thumbnail"
                                    src="./Leong Wee Hong _ Personal Portfolio_files/4.jpg" alt="img-0-3" />
                                    <div class="carousel-caption d-none d-md-block">
                                        <h5></h5>
                                        <p></p>
                                    </div>
                                </div>
                                <div class="carousel-item"><img class="d-block w-100 img-thumbnail"
                                    src="./Leong Wee Hong _ Personal Portfolio_files/5.jpg" alt="img-0-4" />
                                    <div class="carousel-caption d-none d-md-block">
                                        <h5></h5>
                                        <p></p>
                                    </div>
                                </div>
                                <div class="carousel-item"><img class="d-block w-100 img-thumbnail"
                                    src="./Leong Wee Hong _ Personal Portfolio_files/6.jpg" alt="img-0-5" />
                                    <div class="carousel-caption d-none d-md-block">
                                        <h5></h5>
                                        <p></p>
                                    </div>
                                </div>
                            </div><button class="carousel-control-prev" type="button" data-bs-target="#carousel-0"
                                data-bs-slide="prev"><span class="carousel-control-prev-icon"
                                    aria-hidden="true"></span><span
                                        class="visually-hidden">Previous</span></button><button
                                            class="carousel-control-next" type="button" data-bs-target="#carousel-0"
                                            data-bs-slide="next"><span class="carousel-control-next-icon"
                                                aria-hidden="true"></span><span class="visually-hidden">Next</span></button>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title d-flex justify-content-center">UniFlea</h5>
                            <div class="d-flex justify-content-center"><a class="btn btn-primary w-100"
                                data-bs-toggle="collapse" href="http://localhost/#collapse-0" role="button"
                                aria-expanded="false" aria-controls="#collapse-0">Description<i
                                    class="fa-sharp fa-solid fa-caret-down px-1"></i></a></div>
                            <div class="collapse" id="collapse-0">
                                <div class="card card-body">
                                    <p class="date-text">October 2022 - January 2023</p>
                                    <p>A ecommerce web application that providing a platform for university user to easy
                                        to sell their pre-loved items. This is a project built with the technique of
                                        Laravel, Vue JS and Vuetify. The project built is in C2C business mode.</p>
                                    <p>The module I worked on:</p>
                                    <p>-UserDashboard
                                        -Report User
                                        -User Order Tracking
                                        -Item Sell Tracking
                                        -User Profile
                                        -Item Sale Details</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                {/* <div class="col-md-4 col-sm-6 p-1 d-flex align-items-stretch">
                    <div class="card shadow-sm text-center w-100">
                        <div class="carousel slide" id="corousel-1" data-bs-ride="false">
                            <div class="carousel-indicators"><button type="button" data-bs-target="#corousel-1"
                                data-bs-slide-to="0" aria-label="Slide 1" aria-current="true"
                                class="active"></button><button type="button" data-bs-target="#corousel-1"
                                    data-bs-slide-to="1" aria-label="Slide 2"></button><button type="button"
                                        data-bs-target="#corousel-1" data-bs-slide-to="2"
                                        aria-label="Slide 3"></button><button type="button" data-bs-target="#corousel-1"
                                            data-bs-slide-to="3" aria-label="Slide 4"></button><button type="button"
                                                data-bs-target="#corousel-1" data-bs-slide-to="4" aria-label="Slide 5"></button>
                            </div>
                            <div class="carousel-inner">
                                <div class="carousel-item active"><img class="d-block w-100 img-thumbnail"
                                    src="./Leong Wee Hong _ Personal Portfolio_files/1(1).jpg" alt="img-1-0" />
                                    <div class="carousel-caption d-none d-md-block">
                                        <h5></h5>
                                        <p></p>
                                    </div>
                                </div>
                                <div class="carousel-item"><img class="d-block w-100 img-thumbnail"
                                    src="./Leong Wee Hong _ Personal Portfolio_files/2(1).jpg" alt="img-1-1" />
                                    <div class="carousel-caption d-none d-md-block">
                                        <h5></h5>
                                        <p></p>
                                    </div>
                                </div>
                                <div class="carousel-item"><img class="d-block w-100 img-thumbnail"
                                    src="./Leong Wee Hong _ Personal Portfolio_files/3(1).jpg" alt="img-1-2" />
                                    <div class="carousel-caption d-none d-md-block">
                                        <h5></h5>
                                        <p></p>
                                    </div>
                                </div>
                                <div class="carousel-item"><img class="d-block w-100 img-thumbnail"
                                    src="./Leong Wee Hong _ Personal Portfolio_files/4(1).jpg" alt="img-1-3" />
                                    <div class="carousel-caption d-none d-md-block">
                                        <h5></h5>
                                        <p></p>
                                    </div>
                                </div>
                                <div class="carousel-item"><img class="d-block w-100 img-thumbnail"
                                    src="./Leong Wee Hong _ Personal Portfolio_files/5(1).jpg" alt="img-1-4" />
                                    <div class="carousel-caption d-none d-md-block">
                                        <h5></h5>
                                        <p></p>
                                    </div>
                                </div>
                            </div><button class="carousel-control-prev" type="button" data-bs-target="#corousel-1"
                                data-bs-slide="prev"><span class="carousel-control-prev-icon"
                                    aria-hidden="true"></span><span
                                        class="visually-hidden">Previous</span></button><button
                                            class="carousel-control-next" type="button" data-bs-target="#corousel-1"
                                            data-bs-slide="next"><span class="carousel-control-next-icon"
                                                aria-hidden="true"></span><span class="visually-hidden">Next</span></button>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title d-flex justify-content-center">MapTest</h5>
                            <div class="d-flex justify-content-center"><a class="btn btn-primary w-100"
                                data-bs-toggle="collapse" href="http://localhost/#collapse-1" role="button"
                                aria-expanded="false" aria-controls="#collapse-1">Description<i
                                    class="fa-sharp fa-solid fa-caret-down px-1"></i></a></div>
                            <div class="collapse" id="collapse-1">
                                <div class="card card-body">
                                    <p class="date-text">Sep 2021 - October 2021</p>
                                    <p>A self-taught android application integrated with Huawei Mobile Service (HMS)
                                        Software Development Kit (SDK) such as map kit and site kit. It is an Android
                                        application that assists the users in daily life which help user to record their
                                        map searching record into the local storage.</p>
                                    <p>The module I worked on:</p>
                                    <p>-Search location
                                        -Set Record
                                        -Record History</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </>
    );
}

export default Projects;