let posts = document.getElementsByClassName("posts");
let newPostBtn = document.getElementById("new-form-btn");
let newPost = document.getElementById("newPost");
let editBtns = document.getElementsByClassName("editBtn");
let startDate = document.getElementById("start-date");
let endDate = document.getElementById("end-date");
let today = new Date();
let inUse = false;

function checkPostDate() {
  for (let i = 0; i < posts.length; i++) {
    let post = posts[i];
    let dateStr = post.getAttribute("data-date");
    let date = new Date(dateStr);
    if (date != null) {
      if (date >= today) {
        post.style.display = "none";
      }
    }
  }
}
function showByStartDate(dateIn) {
  for (let i = 0; i < posts.length; i++) {
    let post = posts[i];
    let dateStr = post.getAttribute("data-date");
    let date = new Date(dateStr);
    if (date != null) {
      if (date >= today) {
        post.style.display = "none";
      }
    }
  }
}
function showNewPost() {
  if (newPost.style.display == "block") {
    newPost.style.display = "none";
  } else {
    newPost.style.display = "block";
  }
}

function editPost(id) {
  for (let i = 0; i < posts.length; i++) {
    if (posts[i].id == id && !inUse) {
      inUse = true;
      let tital = posts[i].getElementsByClassName("tital")[0];
      let date = posts[i].getElementsByClassName("date")[0];
      let post = posts[i].getElementsByClassName("post")[0];
      let contentContainer = posts[i].getElementsByClassName("content")[0];
      contentContainer.appendChild(newPost);
      newPost.setAttribute("action", "edit-diary-post");
      newPost.setAttribute("th:id", id);
      let inputTital = document.getElementById("add-post-tital");
      inputTital.value = tital.innerText;
      tital.parentNode.removeChild(tital);
      let inputPost = document.getElementById("add-post-text");

      inputPost.value = post.innerText;

      post.parentNode.removeChild(post);
      date.parentNode.removeChild(date);
      newPost.style.display = "block";
      let ta = newPost.getElementsByTagName("textarea")[0];
      ta.style.width = "100%";

      let doneBtn = posts[i].getElementsByClassName("done-btn")[0];
      doneBtn.style.display = "block";
      doneBtn.addEventListener("click", () => {
        inUse = false;
      });
    }
  }
}

document.getElementById("post-date").defaultValue = today
  .toISOString()
  .split("T")[0];

newPostBtn.addEventListener("click", showNewPost);

for (let i = 0; i < editBtns.length; i++) {
  let editBtn = editBtns[i];
  editBtn.addEventListener("click", () => {
    let sliceEditBtn = "edit-btn ";
    let id = editBtn.id.replace(sliceEditBtn, "");
    console.log(id);
    editPost(id);
  });
}

checkPostDate();

startDate.addEventListener("change", () => {
  for (let i = 0; i < posts.length; i++) {
    let post = posts[i];
    let dateStr = post.getAttribute("data-date");
    let date = new Date(dateStr);
    date.setHours(23, 59, 59, 0);
    if (date != null) {
      if (date <= new Date(startDate.value)) {
        console.log("Ny datumvärde: " + new Date(startDate.value));
        console.log(date);
        post.style.display = "none";
      } else if (date >= new Date(endDate.value)) {
        console.log("här är vi nu i else ifen");
        console.log(endDate.value);
      } else {
        post.style.display = "block";
      }
    }
  }
});
endDate.addEventListener("change", () => {
  for (let i = 0; i < posts.length; i++) {
    let post = posts[i];
    let dateStr = post.getAttribute("data-date");
    let date = new Date(dateStr);
    date.setHours(0, 0, 0, 0);
    if (date != null) {
      if (date >= new Date(endDate.value)) {
        console.log("Ny datumvärde: " + new Date(endDate.value));
        console.log(date);
        post.style.display = "none";
      } else if (date <= new Date(startDate.value)) {
        console.log("snälla säg att det fungerar");
      } else {
        post.style.display = "block";
      }
    }
  }
  console.log("Ny datumvärde: " + endDate.value);
});
