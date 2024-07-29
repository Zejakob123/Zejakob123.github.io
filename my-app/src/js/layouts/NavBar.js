export default function NavBar(){
    return (
        <>
            <nav className="navbar navbar-expand-sm navbar-dark sticky-top py-1 px-1 shadow">
              <div className="container-fluid">
                <a className="navbar-brand py-0" href="#about">
                  <img src="./pic_wh.jpg" alt="Logo" className="rounded-circle navbar-img"/>
                </a>
                
                <button className="navbar-toggler" type="button" aria-label="Dropdown" data-bs-toggle="collapse" data-bs-target="#collapsibleBar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div id="collapsibleBar" className="collapse navbar-collapse justify-content-end">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" href="#about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#project">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#skill">Skills</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#award">Awards</a>
                        </li>
                    </ul>
                </div>
              </div>
            </nav>
        </>
    );
}