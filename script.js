//! Fake usernames
const postContainer = document.getElementById("postContainer");
const [search, logo] = [
  document.getElementById("search"),
  document.getElementById("logo"),
];
/**
 * ! incoherient styles of friends Suggestions
 * *all API are free and can handle limited resources
 * todo: make the scroll fuction more functionable
 *
 */
let Appear;
Appear = false;
const clicked = (action,trigger) => {
  console.log("clicked running...", action, Appear); // debug line

  if (action === "search") {
    search.style.display = Appear ? "none" : "flex";
    Appear = !Appear;
  }
  if (action === "more") {
    localStorage.clear();
  }
  if (action === "messages") {
    e.preventDefault()
    document.getElementById("main").innerHTML = `
<input type="email" id="toEmail" placeholder="Recipient Email"><br>
<input type="text" id="subject" placeholder="Subject"><br>
<textarea id="message" placeholder="Your message"></textarea><br>
<button id="sendBtn">Send Email</button>

`;
    document.getElementById("sendBtn").addEventListener("click", function () {
      var to = document.getElementById("toEmail").value;
      var subject = encodeURIComponent(
        document.getElementById("subject").value
      );
      var body = encodeURIComponent(document.getElementById("message").value);

      // Create the mailto link dynamically
      var mailtoLink = "mailto:" + to + "?subject=" + subject + "&body=" + body;

      window.location.href = mailtoLink;
    });
  }
};

for (let i = 1; i <= 5; i++) {
  postContainer.innerHTML += ` 
    <div class="posts">
       <img class="post"
          src="">

      </div>
      <hr width="30%" color="gray">
      <br><br>`;
}
document.querySelectorAll(".post").forEach((post) => {
  let random_url = `https://picsum.photos/1080/1080?random=${Math.floor(
    Math.random() * 10000
  )}`;
  post.src = random_url;
});
let scrollTimeout;

window.addEventListener("scroll", () => {
  clearTimeout(scrollTimeout);

  scrollTimeout = setTimeout(() => {
    if (
      window.innerHeight + window.scrollY >=
      document.body.offsetHeight - 500
    ) {
      setTimeout(() => {
        for (let i = 1; i <= 5; i++) {
          let random_url = `https://picsum.photos/1080/1080?random=${Math.floor(
            Math.random() * 10000
          )}`;
          postContainer.innerHTML += `<div class="posts">
              <img class="post" src="${random_url}">
            </div>
            <hr width="30%" color="gray">
            <br><br>`;
        }
      }, 400);
    }
  }, 300);
});

const stories = () => {
  let randomStory = Math.floor(Math.random() * (20 - 10 + 1)) + 10;
  for (let i = 0; i <= randomStory; i++) {
    const gender = Math.random() < 0.5 ? "men" : "women"; // savage equality
    let link = `https://randomuser.me/api/portraits/${gender}/${Math.floor(
      Math.random() * 100
    )}.jpg`;
    let storyElement = document.createElement("img");
    storyElement.classList.add("story");
    document.getElementById("stories").appendChild(storyElement);
    storyElement.src = link;
  }
};
stories();
search.addEventListener("input", () => {});

window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  loader.style.display = "none";
});

const validUser = localStorage.getItem("Something");
document.querySelector(".Accname").innerHTML = validUser;

function changeUsername() {
  let newUsername = prompt("Username: ");
  document.querySelector(".Accname").innerHTML = newUsername;
}

window.addEventListener("load", () => {
  if (!validUser) window.location.href = "/Instagram/loginBeast.html";
});

