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
        }
    ]
};

(function(){
    let theScriptHTML = document.getElementById('portfolio-template').innerHTML;
    let theTemplate = Handlebars.compile(theScriptHTML);
    let contextObj = portfolioData;
    let compiledData = theTemplate(contextObj);

    document.getElementById('portfolio').innerHTML = compiledData;
}());

//Resume Data that we will pass to handlebars

const resumeData = {
    techSkills:
    ["HTML", "CSS", "JavaScript", "HandleBars", "C#", "ASP.NET"],
    workExperience:
    ["AVIXA", "Level 10 Marketing / Level 5", "George Washington University Coding Bootcamp", "Orpheus Incorporated", "General Assembly"]
};

(function(){
    let theScriptHTML = document.getElementById('resume-template').innerHTML;
    let theTemplate = Handlebars.compile(theScriptHTML);
    let contextObj = resumeData;
    let compiledData = theTemplate(contextObj);

    document.getElementById('resume').innerHTML = compiledData;
}());

(function () {
    let theScriptHTML = document.getElementById('workExperience-template').innerHTML;
    let theTemplate = Handlebars.compile(theScriptHTML);
    let contextObj = resumeData;
    let compiledData = theTemplate(contextObj);

    document.getElementById('workExperience').innerHTML = compiledData;
}());