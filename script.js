const people = [
  {photo: "./assets/images/avatar-mark-webber.webp", name: "Mark", lastName: "Webber", reaction: "reacted to your recent post", theme: "My first tournament today", timeReaction: "1M ago"},
  {photo: "./assets/images/avatar-angela-gray.webp", name: "Angela", lastName: "Gray", reaction: "followed you", theme: "", timeReaction: "5m ago"},
  {photo: "./assets/images/avatar-jacob-thompson.webp", name: "Jacob", lastName: "Thompson", reaction: "has joined your group", theme: " Chess Club", timeReaction: "1 day ago"},
  {photo: "./assets/images/avatar-rizky-hasanuddin.webp", name: "Rizky", lastName: "Hasanuddin", reaction: "sent you a private message", theme: "", timeReaction: "5 days ago"},
  {photo: "./assets/images/avatar-kimberly-smith.webp", name: "Rizky", lastName: "Hasanuddin", reaction: "commented on your picture", theme: "", timeReaction: "1 week ago"},
  {photo: "./assets/images/avatar-nathan-peterson.webp", name: "Rizky", lastName: "Hasanuddin", reaction: "reacted to your recent post", theme: "5 end-game strategies to increase your win rate", timeReaction: "2 weeks ago"},
  {photo: "./assets/images/avatar-angela-gray.webp", name: "Rizky", lastName: "Hasanuddin", reaction: " left the group", theme: "Chess Club", timeReaction: "2 weeks ago"},
];

const notified = document.querySelector(".notifications-people")
const fragment = document.createDocumentFragment()
people.map((person)=>{
  const $li = document.createElement("li")
  $li.classList.add("notified-person")
  $li.innerHTML = `
  <img src="${person.photo}" alt="person1" class="person-photo">
  <div class="name-text">
    <h3 class="person-text">
  ${person.name} ${person.lastName}  <span class="reaction">${person.reaction}</span>  <span class="post">${person.theme}</span>  <span class="notviews"></span></h3>
 <h4 class="time-reaction">${person.timeReaction}</h4>
  </div>
  `
  fragment.append($li)
})

notified.append(fragment)

console.log(people)

const ListItems = document.querySelectorAll(".notified-person");
let notifiedViews = false;
const btnAllASRead = document.querySelector(".mark-all-notified");
const countNotified = document.querySelector(".countNotify")
countNotified.textContent = people.length;

ListItems.forEach((item) => {
  item.addEventListener("click", () => {
    if (!notifiedViews && !item.classList.contains("clicked")) {
      item.querySelector(".notviews").style.display = "none";
      item.style.backgroundColor = "white";
      item.classList.add("clicked");

      countNotified.textContent -= 1;
      if (countNotified.textContent < 0) {
        countNotified.textContent = 0;
      }
    }
  });
});

btnAllASRead.addEventListener("click", () => {
  if (!notifiedViews) {
    ListItems.forEach((item) => {
      item.style.backgroundColor = "white";
      item.querySelector(".notviews").style.display = "none";
      countNotified.textContent = 0
    });
  }
});

