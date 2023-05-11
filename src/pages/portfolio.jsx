// import horiseon from "../../images/horiseon.jpg"
// import portfolio from "../../images/portfolio.jpg"
// import password from "../../images/password.jpg"
// import quiz from "../../images/quiz.jpg"
// import calendar from "../../images/calendar.jpg"
// import weather from "../../images/weather.jpg"




function Portfolio() {
    return (
        <div>
            <h3>Portfolio</h3>
            <p>Please see various projects below.</p>

            <h4>Horiseon Website</h4>
            {<img class="images" src="/images/horiseon.jpg"></img>}
            <div class="links">
                <a href="https://github.com/purealexiafast/horiseon-corporation-website"><h4>GitHub</h4></a><a href="https://purealexiafast.github.io/horiseon-corporation-website/"><h4>Deployed</h4></a>
            </div>

            <h4></h4>
            {<img class="images" src="/images/portfolio.jpg"></img>}
            <div class="links">
                <a href="https://github.com/purealexiafast/alexia-fast-portfolio-project-website"><h4>GitHub</h4></a><a href="https://purealexiafast.github.io/alexia-fast-portfolio/"><h4>Deployed</h4></a>
            </div>

            <h4></h4>
            {<img class="images" src="/images/password.jpg"></img>}
            <div class="links">
                <a href="https://github.com/purealexiafast/javascript-password-generator"><h4>GitHub</h4></a><a href="https://purealexiafast.github.io/javascript-project/"><h4>Deployed</h4></a>
            </div>

            <h4></h4>
            {<img class="images" src="/images/quiz.jpg"></img>}
            <div class="links">
                <a href="https://github.com/purealexiafast/timed-quiz-javascript"><h4>GitHub</h4></a><a href="https://purealexiafast.github.io/timed-quiz-javascript/"><h4>Deployed</h4></a>
            </div>

            <h4></h4>
            {<img class="images" src="images/calendar.jpg"></img>}
            <div class="links">
                <a href="https://github.com/purealexiafast/javascript-calender"><h4>GitHub</h4></a><a href="https://purealexiafast.github.io/javascript-calender/"><h4>Deployed</h4></a>
            </div>

            <h4></h4>
            {<img class="images" src="weather.jpg"></img>}
            <div class="links">
                <a href="https://github.com/purealexiafast/weather-dash"><h4>GitHub</h4></a><a href="https://purealexiafast.github.io/weather-dash/"><h4>Deployed</h4></a>
            </div>

        </div>
    )
}

export default Portfolio