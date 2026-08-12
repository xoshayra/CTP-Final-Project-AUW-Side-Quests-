const quests = [
  {
    id: 1,
    title: "Sunrise Over the Rooftop",
    category: "campus",
    points: 15,
    location: "Residence Hall Rooftop",
    icon: "",
    desc: "Wake up before 6am and watch the sun rise over campus with a friend."
  },

  {
    id: 2,
    title: "The Library All-Nighter",
    category: "campus",
    points: 20,
    location: "AUW Library",
    icon: "",
    desc: "Survive a full night of studying in the library during finals week."
  },

  {
    id: 3,
    title: "Naga Coma",
    category: "campus",
    points: 15,
    location: "Thanda Choomok",
    icon: "",
    desc: "Challenge your friends to eat six naga singaras without water."
  },

  {
    id: 4,
    title: "Club Fair Recruit",
    category: "campus",
    points: 10,
    location: "OSA, AUW",
    icon: "",
    desc: "Talk to at least three club tables and sign up for one."
  },

  {
    id: 5,
    title: "Office Hours, Actually",
    category: "campus",
    points: 15,
    location: "Faculty Offices",
    icon: "",
    desc: "Have a real conversation with a professor outside of class time."
  },

  {
    id: 6,
    title: "Truth, Dare or Fire",
    category: "campus",
    points: 10,
    location: "Dorm Common Room",
    icon: "",
    desc: "Just don't do anything to bring in the authorities!"
  },

  {
    id: 7,
    title: "Netflix n Sip",
    category: "campus",
    points: 20,
    location: "Cinematella TV Space",
    icon: "",
    desc: "Watch movies and series with your friends. CHALLENGE: YOU CAN'T SLEEP"
  },

  {
    id: 8,
    title: "The Classic Gate Selfie",
    category: "campus",
    points: 5,
    location: "AUW Front Gate",
    icon: "",
    desc: "Take the obligatory photo under the university sign."
  },

  {
    id: 9,
    title: "KEPZ Picnic",
    category: "campus",
    points: 15,
    location: "AUW KEPZ Campus",
    icon: "",
    desc: "Host a one-dish party with serene greenary of KEPZ."
  },

  {
    id: 10,
    title: "Piyaju at Patenga",
    category: "city",
    points: 20,
    location: "Patenga Beach",
    icon: "",
    desc: "Make sure to not miss the manual Nagar-Dola & Horse-riding after Piyaju."
  },

  {
    id: 11,
    title: "CRB Hill Wander",
    category: "city",
    points: 15,
    location: "CRB, Chattogram",
    icon: "",
    desc: "Walk the winding roads of CRB under its century-old trees."
  },

  {
    id: 12,
    title: "Fuchka Crawl",
    category: "city",
    points: 10,
    location: "Street Stalls",
    icon: "",
    desc: "Rate three different street-side fuchka stalls near campus."
  },

  {
    id: 13,
    title: "Rickshaw Mami Jaben?",
    category: "city",
    points: 15,
    location: "Anywhere in Chattogram",
    icon: "",
    desc: "This is your chance to become a Rickshaw Mami for once."
  },

  {
    id: 14,
    title: "নতুন Bridge",
    category: "city",
    points: 15,
    location: "Karnaphuli Riverside",
    icon: "",
    desc: "Catch the golden hour and make the 160BDT toll well spent."
  },

  {
    id: 15,
    title: "New Market Bargain",
    category: "city",
    points: 10,
    location: "New Market",
    icon: "",
    desc: "Bargaining a Rolex down to 600BDT? I'm in!"
  },

  {
    id: 16,
    title: "Museum Afternoon",
    category: "city",
    points: 15,
    location: "Ethnological Museum",
    icon: "",
    desc: "Spend an afternoon exploring a local museum."
  },

  {
    id: 17,
    title: "Foy's Lake Boat Ride",
    category: "city",
    points: 20,
    location: "Foy's Lake",
    icon: "",
    desc: "Get your eardrums ruptured; otolaryngologist, here I come..."
  },

  {
    id: 18,
    title: "Shoot or Ball?",
    category: "city",
    points: 15,
    location: "Sicho Arena",
    icon: "",
    desc: "Laser tag? Trampoline park? Go kart? They got it all!"
  },

  {
    id: 19,
    title: "Well Agro",
    category: "city",
    points: 20,
    location: "Mohara, Chandgaon",
    icon: "",
    desc: "Hangout with Cows & Fishes then maybe take some home?"
  },

{
    id: 21,
    title: "চাটগাঁইয়া Wedding Crash",
    category: "city",
    points: 15,
    location: "Any Wedding Club",
    icon: "",
    desc: "Oh? The Groom is my Father's Cousin's Grandmother's Sister's Son"
  },

  {
    id: 21,
    title: "Mati-ta",
    category: "city",
    points: 15,
    location: "Bhatiari",
    icon: "",
    desc: "Single or Dating or just existing, this place is for everyone."
  }
]

let completedIds = [];
let activeFilter = "all";
let searchTerm = "";

const questGrid = document.getElementById("quests");
const emptyState = document.getElementById("empty-state");

const pointsTotal = document.getElementById("points-total");
const questsTotal = document.getElementById("quests-total");
const progressFill = document.getElementById("progress-fill");

const filterButtons = document.querySelectorAll(".filter-btn");
const searchInput = document.getElementById("search-input");

const feedbackForm = document.getElementById("feedback-form");
const formResponse = document.getElementById("form-response");

function buildCardHTML(quest) {

  let isDone = false;

  for (let i = 0; i < completedIds.length; i++) {
    if (completedIds[i] == quest.id) {
      isDone = true;
    }
  }

  let tagClass;
  let tagLabel;

  if (quest.category == "campus") {
    tagClass = "tag-campus";
    tagLabel = "On Campus";
  } else {
    tagClass = "tag-city";
    tagLabel = "Off Campus";
  }

  let cardClass = "quest-card";

  if (isDone) {
    cardClass = "quest-card completed";
  }

  let buttonText = "Log This Quest";

  if (isDone) {
    buttonText = "Logged ✓";
  }

  let cardHTML =
    '<article class="' + cardClass + '" data-id="' + quest.id + '">' +

      '<span class="quest-stamp">LOGGED</span>' +

      '<div class="quest-top">' +

        '<span class="quest-icon">' +
          quest.icon +
        '</span>' +

        '<span class="quest-tag ' + tagClass + '">' +
          tagLabel +
        '</span>' +

      '</div>' +

      '<h3 class="quest-title">' +
        quest.title +
      '</h3>' +

      '<p class="quest-desc">' +
        quest.desc +
      '</p>' +

      '<div class="quest-meta">' +

        '<span>' +
          quest.location +
        '</span>' +

        '<span>+' +
          quest.points +
          ' pts</span>' +

      '</div>' +

      '<button class="quest-btn" type="button">' +
        buttonText +
      '</button>' +

    '</article>';

  return cardHTML;
}

function renderQuests() {

  questGrid.innerHTML = "";

  let foundQuest = false;

  for (let i = 0; i < quests.length; i++) {

    let quest = quests[i];

    let matchesFilter = false;

    if (
      activeFilter == "all" ||
      quest.category == activeFilter
    ) {
      matchesFilter = true;
    }

    let title = quest.title.toLowerCase();
    let location = quest.location.toLowerCase();
    let search = searchTerm.toLowerCase();

    let matchesSearch = false;

    if (
      title.indexOf(search) != -1 ||
      location.indexOf(search) != -1
    ) {
      matchesSearch = true;
    }

    if (matchesFilter && matchesSearch) {

      questGrid.innerHTML += buildCardHTML(quest);

      foundQuest = true;
    }
  }

  if (foundQuest == false) {
    emptyState.hidden = false;
  } else {
    emptyState.hidden = true;
  }
}

function updateStats() {

  let totalPoints = 0;

  for (let i = 0; i < completedIds.length; i++) {

    for (let j = 0; j < quests.length; j++) {

      if (completedIds[i] == quests[j].id) {
        totalPoints = totalPoints + quests[j].points;
      }

    }
  }

  pointsTotal.innerHTML = totalPoints;

  questsTotal.innerHTML =
    completedIds.length + " / " + quests.length;

  let percent =
    (completedIds.length / quests.length) * 100;

  progressFill.style.width = percent + "%";
}

function toggleQuest(id) {

  let found = false;
  let position = -1;

  for (let i = 0; i < completedIds.length; i++) {

    if (completedIds[i] == id) {
      found = true;
      position = i;
    }

  }

  if (found == true) {

    completedIds.splice(position, 1);

  } else {

    completedIds.push(id);

  }

  renderQuests();
  updateStats();
}

questGrid.addEventListener("click", function(event) {

  let button = event.target;

  if (button.classList.contains("quest-btn")) {

    let card = button.parentElement;

    let id = Number(card.getAttribute("data-id"));

    toggleQuest(id);
  }

});

for (let i = 0; i < filterButtons.length; i++) {

  filterButtons[i].addEventListener("click", function() {

    for (let j = 0; j < filterButtons.length; j++) {
      filterButtons[j].classList.remove("active");
    }

    filterButtons[i].classList.add("active");

    activeFilter =
      filterButtons[i].getAttribute("data-filter");

    renderQuests();

  });

}

searchInput.addEventListener("input", function(event) {

  searchTerm = event.target.value;

  renderQuests();

});

feedbackForm.addEventListener("submit", function(event) {

  event.preventDefault();

  const name = document.getElementById("name");
  const category = document.getElementById("category");
  const idea = document.getElementById("idea");

  if (name.value == "" || idea.value == "") {

    formResponse.innerHTML =
      "Please fill in your name and a quest idea before mailing it in.";

    formResponse.className =
      "form-response error";

  } else {

    let categoryLabel;

    if (category.value == "campus") {
      categoryLabel = "on-campus";
    } else {
      categoryLabel = "off-campus";
    }

    formResponse.innerHTML =
      "Thanks, " +
      name.value +
      "! Your " +
      categoryLabel +
      " quest idea has been logged for review.";

    formResponse.className =
      "form-response success";

    feedbackForm.reset();
  }

});

renderQuests();
updateStats();