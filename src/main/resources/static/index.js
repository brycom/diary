let posts = document.getElementsByClassName("posts");
let newPostBtn = document.getElementById("new-form-btn");
let newPost = document.getElementById("newPost");
let editBtn = document.getElementsByClassName("editBtn");
let today = new Date();

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
function showNewPost() {
  if (newPost.style.display == "block") {
    newPost.style.display = "none";
  } else {
    newPost.style.display = "block";
  }
}

function editBtnClick(i) {
  console.log(editBtn[i].innerHTML);
}
//set default value for new post
document.getElementById("post-date").defaultValue = today
  .toISOString()
  .split("T")[0];
//popup for new post
newPostBtn.addEventListener("click", showNewPost);

for (var i = 0; i < editBtn.length; i++) {
  let editButton = editBtn[i];
  editButton.addEventListener("click", editBtnClick(i));
}

checkPostDate();
