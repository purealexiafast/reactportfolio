import Header from "../components/Header"
import TextContainer from "../components/TextContainer"
import profileimg from "../assets/images/profile.jpg"

function AboutMe() {
    return (
        <>
            <Header header="About Me" />
            <div id="about-me">
                {<img id="profileimg" src={profileimg}></img>}
                <TextContainer id="workhistory" title="Work History" text="Hi, my name is Alexia. I am a front end developer who has recently completed the Carleton University Certificate Program in Full Stack Develoment. I specialize in React. I come from a background of The Arts, and therefore have a lot of creative soft skills in terms of UI and UX." />

            </div>
        </>
    )
}

export default AboutMe 