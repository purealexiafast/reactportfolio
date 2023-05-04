import { Link } from "react-router-dom"


function Navigation(props) {


    return (
        <div>
            <h2>{props.title}</h2>
            <div>
                <Link to="/"><button onClick={() => props.setPage("Home")}>About Me</button></Link>
                <Link to="/portfolio"><button onClick={() => props.setPage("Portfolio")}>Portfolio</button></Link>
                <Link to="/projects"><button>Projects</button></Link>
                <Link to="/contact"><button onClick={() => props.setPage("Contact")}>Contact</button></Link>
            </div>
        </div>
    )
}

export default Navigation