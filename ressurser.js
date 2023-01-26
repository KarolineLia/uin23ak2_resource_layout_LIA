const resources = [
    {
        category: "HTML",
        text: "HTML står for HyperText Markup Language, og er et strukturspråk som brukes for å lage strukturer til nettside- og applikasjonsgrensesnitt.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/html/"
            },
            {
                title: "HTML Living standard",
                url: "https://html.spec.whatwg.org/multipage/"
            },
            {
                title: "HTML.com Tutorials",
                url: "https://html.com/"
            },
        ]
    },
    {
        category: "CSS",
        text: "CSS står for Cascading StyleSheets, og brukes for å sette stilregler på HTML-elementer.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/css/"
            },
            {
                title: "W3C HTML & CSS Standards",
                url: "https://www.w3.org/standards/webdesign/htmlcss.html"
            },
            {
                title: "W3C CSS Validator",
                url: "https://jigsaw.w3.org/css-validator/"
            },
            {
                title: "CSS Tricks",
                url: "https://css-tricks.com/"
            },
        ]
    },
    {
        category: "JavaScript",
        text: "JavaScript er et scriptspråk basert på EcmaScript. JavaScript kjører direkte i nettleseren, og brukes ofte til å manipulere HTML og CSS i webgrensnesnitt.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/js/"
            },
            {
                title: "MDN Web Docs",
                url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            },
            {
                title: "How to read JavaScript Documentation",
                url: "https://www.youtube.com/watch?v=O3iR-CIufKM"
            },
        ]
    },
    {
        category: "React",
        text: "React er et rammeverk bygget i JavaScript. React bruker komponenter og states for å lage en levende frontend.",
        sources: [
            {
                title: "React documentation",
                url: "https://reactjs.org/docs/getting-started.html"
            },
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/REACT/DEFAULT.ASP"
            },
            {
                title: "How to read JavaScript Documentation",
                url: "https://www.youtube.com/watch?v=O3iR-CIufKM"
            },
        ]
    },
    {
        category: "Sanity and headless CMS",
        text: "Sanity er et headless CMS som står for innholdsadministrasjon. Innhold hentes inn i applikasjoner via GROQ-spørringer.",
        sources: [
            {
                title: "Sanity documentation",
                url: "https://www.sanity.io/docs"
            },
            {
                title: "OnCrawl: a beginners guide to headless CMS",
                url: "https://www.oncrawl.com/technical-seo/beginners-guide-headless-cms/"
            },
            {
                title: "Section.io: Getting started with Sanity CMS",
                url: "https://www.section.io/engineering-education/getting-started-with-sanity-cms/"
            },
        ]
    },
]


/*Her har jeg brukt:
https://www.w3schools.com/howto/howto_js_tabs.asp
https://www.w3schools.com/JSREF/met_document_queryselectorall.asp

Fikk også hjelp av Joachim Bjerkland for oppsettet mtp .map() i forEach()*/
const tabcontent = document.querySelectorAll('.tabcontent');
const tablinks = document.querySelectorAll('.tablinks');

tablinks.forEach((button, index) => {
    //Her så jeg på hvordan vi brukte index i lego webshop shopscript.js
    button.addEventListener('click', () => {
        const tabIndex = button.getAttribute('cat-index');
        //https://www.w3schools.com/jsref/met_element_addeventlistener.asp
        //Gir knappene et attribute for å koble sammen div id i html med knappene som skal
        //åpne hver enkelt meny fane.

        tablinks.forEach(tabButton => tabButton.classList.remove('active'))
        button.classList.add('active')
        //https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/forEach

        tabcontent.forEach(info => {
            //If/else for å si at hvis id til element i tabcontent er likt tabIndex (som er attributtet til knappene)
            //så skal disse elementene i tabcontent få klassen active, og at når den er aktiv skal html strukturen bli
            //konstruert.
            if(info.id === tabIndex) {
                info.classList.add('active');
                info.innerHTML = `
                <h2>${resources[index].category}</h2>
                <p>${resources[index].text}</p>
                <ul>
                    ${resources[index].sources.map(links => `
                    <li><a href="${links.url}">${links.title}</a></li>`).join('')}
                </ul>`
            } else {
                //Hvis element id ikke er lik tabIndex så skal klassen active bli fjernet. 
                info.classList.remove('active')
            }
        })
    })
}
);

/*https://stackoverflow.com/questions/3871547/iterating-over-result-of-getelementsbyclassname-using-array-foreach
https://www.geeksforgeeks.org/iterate-map-java/
https://www.baeldung.com/java-iterate-map*/
