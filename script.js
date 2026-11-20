
// MOBILE NAVIGATION
const menuToggle = document.getElementById("menuToggle");
const navigation = document.getElementById("navigation");

menuToggle.addEventListener("click", function () {
    navigation.classList.toggle("active");
});

document.querySelectorAll("#navigation a").forEach(link => {
    link.addEventListener("click", function () {
        navigation.classList.remove("active");
    });
});

// PATH SELECTION
function selectPath(path) {
    const interest = document.getElementById("interest");
    const goal = document.getElementById("goal");

    if (path === "formal") {
        interest.value = "education";
        goal.value = "study";
    } else {
        interest.value = "";
        goal.value = "training";
    }
}

// INTEREST AND GOAL FORM
const interestForm = document.getElementById("interestForm");
const recommendation = document.getElementById("recommendation");

// TRAINING SEARCHES BASED ON SELECTED INTEREST
const trainingSearches = {
    technology: "computer skills and ICT tutorials for beginners step by step",
    business: "business and entrepreneurship training for beginners",
    beauty: "beauty therapy and hairdressing tutorials",
    sports: "football and sports coaching tutorials",
    music: "music production and performing arts training",
    fashion: "fashion design and tailoring tutorials for beginners",
    cooking: "cooking and catering tutorials for beginners",
    photography: "photography and video editing tutorials",
    education: "educational learning tutorials",
    other: "practical skills training for beginners"
};

interestForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const interest = document.getElementById("interest").value;
    const goal = document.getElementById("goal").value;

    let title = "";
    let description = "";
    let link = "";

    const searchTerm = trainingSearches[interest] ||
                       "practical skills training for beginners";

    // FORMAL EDUCATION
    if (goal === "study") {
        title = "Your Formal Education Path";
        description = "Explore universities and degree programmes that match your interests.";
        link = "https://www.kuccps.net/";
    }

    else if (goal === "tvet") {
        title = "Your TVET Education Path";
        description = "Explore technical and vocational institutions and practical courses.";
        link = "https://www.tveta.go.ke/";
    }

    // PRACTICAL DEVELOPMENT
    else if (goal === "training") {
        title = "Your Skills Development Path";
        description = "Find practical training videos based on your selected interest.";

        link = "https://www.youtube.com/results?search_query=" +
               encodeURIComponent(searchTerm);
    }

    else if (goal === "job") {
        title = "Your Employment Path";
        description = "Explore job listings, internships and entry-level opportunities.";
        link = "https://www.brightermonday.co.ke/";
    }

    else if (goal === "business") {
        title = "Your Entrepreneurship Path";
        description = "Start learning business planning, marketing and money management.";

        link = "https://www.youtube.com/results?search_query=" +
               encodeURIComponent("entrepreneurship training for beginners");
    }

    else if (goal === "skills") {
        title = "Improve Your Skills";
        description = "Find tutorials and resources to practise and improve your abilities.";

        link = "https://www.youtube.com/results?search_query=" +
               encodeURIComponent(searchTerm);
    }

    // DISPLAY RECOMMENDATION
    recommendation.hidden = false;

    recommendation.innerHTML = `
        <h3>${title}</h3>
        <p>${description}</p>
        <p><strong>Your interest:</strong> ${
            interest.replace(/^\w/, character => character.toUpperCase())
        }</p>

        <a href="${link}"
           target="_blank"
           rel="noopener noreferrer"
           class="card-link">
            Explore Opportunities →
        </a>
    `;

    recommendation.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
    });
});

// FOOTER YEAR
console.log("Welcome to JollyPod Hub!");
console.log("Every Potential Deserves a Path.");
