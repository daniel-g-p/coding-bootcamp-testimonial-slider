const buttonPrevious = document.querySelector("#previous");
const buttonNext = document.querySelector("#next");
const comment = document.querySelector("#comment");
const person = document.querySelector("#person");
const photo = document.querySelector("#photo");
let index = 0;

const reviews = [{
    personName: "Tanya Sinclair",
    profession: "UX Engineer",
    comment: `"I've been interested in coding for a while but never taken the jump, until now. I couldn't recommend this course enough. I'm now in the job of my dreams and so excited about the future."`,
    imageSource: "image-tanya.jpg"
}, {
    personName: "John Tarkpor",
    profession: "Junior Front-End Developer",
    comment: `"If you want to lay the best foundation possible I'd recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer."`,
    imageSource: "image-john.jpg"
}, {
    personName: "Anna Rodgers",
    profession: "Mobile Developer",
    comment: `"The content of the course covers such a wide range of topics, it really does give a solid overview of how to create a fully functional website/app from scratch, I definitely recommend it."`,
    imageSource: "image-anna.jpg"
}, {
    personName: "Dennis Kaman",
    profession: "Full-Stack Developer",
    comment: `"One of the best courses for beginners, it will spark your passion for web development in an entertaining way all while giving you the best content to level up your skills."`,
    imageSource: "image-dennis.jpg"
}, {
    personName: "Sarah Lavine",
    profession: "Back-End Engineer",
    comment: `"This course is really well put together and fleshes out the fundamentals of HTML, CSS, and JS in a clear and concise package. If you are considering to attend a bootcamp, this is a great prep tool!"`,
    imageSource: "image-sarah.jpg"
}, ];

buttonNext.addEventListener("click", () => {
    index++;
    if (index > reviews.length - 1) {
        index = 0;
    }
    changePerson();
});

buttonPrevious.addEventListener("click", () => {
    index--;
    if (index < 0) {
        index = reviews.length - 1;
    }
    changePerson();
});

const changePerson = () => {
    const review = reviews[index];
    photo.setAttribute("src", review.imageSource);
    comment.innerText = review.comment;
    person.innerHTML = `${review.personName} <span>${review.profession}</span>`;
};
