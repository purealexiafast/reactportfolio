import { Link } from "react-router-dom"


function Navigation(props) {


    return (
        <div>
            <h2>{props.title}</h2>
            <div>
                <Link id="buttonsubmit" to="/"><button onClick={() => props.setPage("Home")}>About Me</button></Link>
                <Link id="buttonsubmit" to="/portfolio"><button onClick={() => props.setPage("Portfolio")}>Portfolio</button></Link>
                <Link id="buttonsubmit" to="/projects"><button>Resume</button></Link>
                <Link id="buttonsubmit" to="/contact"><button onClick={() => props.setPage("Contact")}>Contact</button></Link>
            </div>
        </div>
    )
}

export default Navigation