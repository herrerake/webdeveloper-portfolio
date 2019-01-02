//Portfolio Data that we will pass to handlebars
const portfolioData = {
    projects: 
    [
        {
            title: "AVIXA - AVIXA",
            website: "AVIXA",
            websiteURL: "https://www.avixa.org",
        },
        {
            title: "AVEC - AVIXA",
            website: "AV Executive Conference",
            websiteURL: "https://www.avexecutiveconference.com"
        }, 
        {
            title: "TIDE - AVIXA",
            website: "AV Executive Conference",
            websiteURL: "https://www.tideconference.com"
        }, 
        {
            title: "Veurinks RV - Level5 Advertising",
            website: "Veurinks RV",
            websiteURL: "https://www.veurinksrv.com"
        }, 
        {
            title: "React Tube - Personal Project",
            website: "GitHub Repo",
            websiteURL: "https://github.com/herrerake/youreacttube"
        },
        {
            title: "Crystal Collector Game - Personal Project",
            website: "Heroku Deployment",
            websiteURL: "https://sleepy-depths-82150.herokuapp.com/",
            overviewLink: "https://github.com/herrerake/week-4-game-CrystalsCollector"
        },
        {
            title: "Star Wars Game - Personal Project",
            website: "Heroku Deployment",
            websiteURL: "https://radiant-bayou-23324.herokuapp.com/",
            overviewLink: "https://github.com/herrerake/star-wars-rpg"
        },
        {
            title: "Trivia Game - Personal Project",
            website: "None",
            overviewLink: "https://github.com/herrerake/advanced-trivia-game"
        }
    ],
    techSkills: ["HTML", "CSS", "JavaScript", "jQuery",
                 "Bootstrap", "HandleBars", "C#", "ASP.NET",
                 "AJAX", "Node.js", "Express.js", "React.js",
                 "WordPress", "Sitefinity", "Git", "GitHub",
                 "Heroku"
                ],
    workExperience: ["AVIXA", "Level 10 Marketing / Level 5",
                     "George Washington University Coding Bootcamp",
                     "Orpheus Incorporated", "General Assembly"
                    ],
    education: ["General Assembly", "Rich Web Experience 2018", "Virginia Commonwealth University",
                "University of the West Indies - Cave Hill"
               ]
};
//Portfolio
(function(){
    let theScriptHTML = document.getElementById('portfolio-template').innerHTML;
    let theTemplate = Handlebars.compile(theScriptHTML);
    let contextObj = portfolioData;
    let compiledData = theTemplate(contextObj);

    document.getElementById('portfolio').innerHTML = compiledData;
}());
//Technical Skills
(function(){
    let theScriptHTML = document.getElementById('resume-template').innerHTML;
    let theTemplate = Handlebars.compile(theScriptHTML);
    let contextObj = portfolioData;
    let compiledData = theTemplate(contextObj);

    document.getElementById('resume').innerHTML = compiledData;
}());
//Work Experience
(function () {
    let theScriptHTML = document.getElementById('workExperience-template').innerHTML;
    let theTemplate = Handlebars.compile(theScriptHTML);
    let contextObj = portfolioData;
    let compiledData = theTemplate(contextObj);

    document.getElementById('workExperience').innerHTML = compiledData;
}());
//Education
(function (){
    let theScriptHtml = document.getElementById('education-template').innerHTML;
    let theTemplate = Handlebars.compile(theScriptHtml);
    let contextObj = portfolioData;
    let compiledData = theTemplate(contextObj);

    document.getElementById('education').innerHTML = compiledData;
}());