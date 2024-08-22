AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Full-Stack Developer",
    cardImage: "assets/images/experience-page/SharrdsGames.webp",
    place: "CHTD Group (Roblox Development Group)",
    time: "(June, 2024 - present)",
    desp: "<li>Worked with Htdmodule to become a core part in developing the up-coming game HTD</li> <li>Helped develop many features for the game such as Towers, Trading, and many other systems intergrated in the game</li> <li>Helped maintain and create a functional Anti-Cheat for the game and intergrated hardcodes into the Towers to prevent exploitation of the games systems</li>",
  },
  {
    title: "Freelance Developer",
    cardImage: "assets/images/experience-page/TopTotal.png",
    place: "Upwork, Toptal, and PeoplePerHour",
    time: "(Mar, 2022 - present)",
    desp: "<li>Worked as a freelancer for many websites</li><li>Contributed towards many semi succesful projects worked as both a Frontend and Backend developer</li><li>Created varios APIs, Anti-Cheats, and other useful Development tools to assist Full Time developers.</li>",
  },
  {
    title: "Not Applicable",
    cardImage: "assets/images/experience-page/NA.png",
    place: "Not Applicable",
    time: "(Not Applicable)",
    desp: "<li>Currently Working On Filling This Out</li><li></li><li></li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "Google Cloud Hackathon 2022",
    cardImage: "assets/images/experience-page/GoogleCloud",
    description:
      "Responsible for developing a machine learning solution using TensorFlow, aimed at solving read world problems within a limited time frame.",
  },
  {
    title: "TechCrunch Disrupt 2023",
    cardImage: "assets/images/experience-page/TechCrunch2",
    description:
      "Responsible for developing an app that helps users understand their environmental impact based on their daily activities",
  },
  {
    title: "TreeHack 2025",
    cardImage: "assets/images/experience-page/TreeHack",
    description:
      "Responsible for creating an AR Application that enhances educational content for students. The app overlays interactive 3D Models and information on textbooks and/or real world objects",
  },
  {
    title: "MLH Local Hack Day",
    cardImage: "assets/images/experience-page/MlHIcon",
    description:
      "Responsible for building a mobile app that connects individuals who want to learn a skill with people who can teach them that skill.",
  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

// Hackathon Section

const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
{
    title: "Google Developer Student Clubs - Thailand",
    subtitle: "Mentor",
    image: "assets/images/experience-page/gdsc.png",
    desp: "As a high school and university student, I mentored peers in Thailand through Google Developer Student Clubs, guiding them through Applied Data Science and machine learning projects.",
    href: "https://developers.google.com/community/gdsc",
  },
  {
    title: "Coder Dojo Thailand",
    subtitle: "Mentor",
    image: "assets/images/experience-page/coderdojo.png",
    desp: "I volunteered as a mentor at CoderDojo Thailand, helping young students learn coding and develop projects in a collaborative and supportive environment.",
    href: "https://coderdojo.com/",
  },
  {
    title: "Hack Club Thailand",
    subtitle: "Club Leader and Mentor",
    image: "assets/images/experience-page/hackclub.png",
    desp: "I led and mentored peers in Hack Club Thailand, organizing coding events and workshops for high school students interested in technology.",
    href: "https://hackclub.com/",
  },
  {
    title: "Junior Achievement Thailand",
    subtitle: "Mentor",
    image: "assets/images/experience-page/ja.png",
    desp: "As part of Junior Achievement Thailand, I mentored younger students in entrepreneurship and technology, helping them develop projects that integrate business and coding skills.",
    href: "https://jaasiapacific.org/",
  },
  {
    title: "Google Code-in",
    subtitle: "Mentor",
    image: "assets/images/experience-page/googlecodein.png",
    desp: "I mentored high school students globally in Google Code-in, guiding them through open-source projects and helping them develop their coding skills.",
    href: "https://codein.withgoogle.com/",
  },
  {
    title: "AtlasHacks",
    subtitle: "Mentor",
    image: "assets/images/experience-page/atlas.png",
    desp: "I mentored participants at AtlasHacks, a global hackathon aimed at fostering creativity within students from around the world, guiding them through coding challenges and project development.",
    href: "https://atlashacks2.devpost.com/",
  },
  {
    title: "JITHack",
    subtitle: "Mentor",
    image: "assets/images/experience-page/jithack.png",
    desp: "As a mentor for JITHack, I supported participants in a virtual design and development hackathon organized by students of Jyothy Institute of Technology, helping them build innovative projects in a 24-hour timeframe.",
    href: "https://jithack.netlify.app/",
  },
  {
    title: "Citro Tech",
    subtitle: "Mentor",
    image: "assets/images/experience-page/citro.png",
    desp: "I mentored participants at Citro Hacks, an inclusive online hackathon organized by Citro Tech, a student-led organization dedicated to empowering minorities in the tech field.",
    href: "https://citro.tech/",
  },
  {
    title: "Recess Hacks",
    subtitle: "Mentor",
    image: "assets/images/experience-page/recess.png",
    desp: "I served as a mentor at Recess Hacks, a hackathon for high school students in the Greater Toronto Area that encourages innovation and technology engagement.",
    href: "https://recesshacks.com/",
  },
  {
    title: "NHacks",
    subtitle: "Mentor",
    image: "assets/images/experience-page/nhacks.png",
    desp: "As a mentor for NHacks VI, I helped students develop their skills in computer science by guiding them through project creation and coding challenges.",
    href: "https://nhacks-vi.devpost.com/",
  },
];
const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp, href }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="${href}" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
