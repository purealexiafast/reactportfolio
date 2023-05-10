import pdf from '../assets/pdf.pdf'

function Projects() {
    return (
        <div>
            <h3>Resume</h3>
            <p id="projects">I have recently completed a certificate in full stack develoment from Carleton University. My top skills include:
            </p>
            <ul id="list">
                <li>HTML, CSS</li>
                <li>REACT</li>
                <li>UI, UX</li>
            </ul>

            <p>Please view my resume here:</p>
            <a href={pdf} target="_blank">Download Resume</a>


        </div>
    )
}

export default Projects