let posts = document.getElementsByClassName("posts");
let newPostBtn = document.getElementById("new-form-btn");
let newPost = document.getElementById("newPost");
let newPostdiv = document.getElementById("new-post-div");
let editBtns = document.getElementsByClassName("editBtn");
let startDate = document.getElementById("start-date");
let endDate = document.getElementById("end-date");

let today = new Date();
today.setHours(23, 59, 59, 0);

let inUse = false;

function showNewPost() {
  if (newPost.style.display == "block") {
    newPost.style.display = "none";
    inUse = false;
  } else {
    newPostdiv.appendChild(newPost);
    newPost.setAttribute("action", "/new-post");
    document.getElementById("add-post-tital").value = "";
    document.getElementById("add-post-text").value = "";
    document.getElementById("post-date").defaultValue = today
      .toISOString()
      .split("T")[0];

    newPost.style.display = "block";
    inUse = true;
  }
}
function closeBtn(tital, date, post, contanier) {
  let closeBtn = document.createElement("button");
  closeBtn.innerText = "stäng";
  closeBtn.setAttribute("class", "dropbtn");
  closeBtn.style.float = "right";
  contanier.appendChild(closeBtn);
  closeBtn.addEventListener("click", () => {
    contanier.innerHTML = "";
    contanier.appendChild(tital);
    contanier.appendChild(post);
    contanier.appendChild(date);
    inUse = false;
    newPost.style.display = "none";
  });
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

      let inputTital = document.getElementById("add-post-tital");
      inputTital.value = tital.innerText;
      tital.parentNode.removeChild(tital);
      let inputPost = document.getElementById("add-post-text");
      document.getElementById("post-date").defaultValue = date.innerHTML;

      inputPost.value = post.innerText;

      post.parentNode.removeChild(post);
      date.parentNode.removeChild(date);
      newPost.style.display = "block";
      let ta = newPost.getElementsByTagName("textarea")[0];
      ta.style.width = "100%";

      let formId = posts[i].getElementsByClassName("form-id")[0];
      formId.value = id;
      console.log(formId.value);
      contentContainer.appendChild;

      contentContainer.appendChild(
        closeBtn(tital, date, post, contentContainer)
      );
    }
  }
}

newPostBtn.addEventListener("click", showNewPost);

for (let i = 0; i < editBtns.length; i++) {
  let editBtn = editBtns[i];
  editBtn.addEventListener("click", () => {
    let sliceEditBtn = "edit-btn ";
    let id = editBtn.id.replace(sliceEditBtn, "");
    editPost(id);
  });
}

startDate.addEventListener("change", () => {
  for (let i = 0; i < posts.length; i++) {
    let post = posts[i];
    let dateStr = post.getAttribute("data-date");
    let date = new Date(dateStr);
    date.setHours(23, 59, 59, 0);
    if (date != null) {
      if (date <= new Date(startDate.value)) {
        post.style.display = "none";
      } else if (date >= new Date(endDate.value)) {
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
        post.style.display = "none";
      } else if (date <= new Date(startDate.value)) {
      } else {
        post.style.display = "block";
      }
    }
  }
});
