let posts = document.getElementsByClassName("posts");
let newPostBtn = document.getElementById("new-form-btn");
let newPost = document.getElementById("newPost");
let today = new Date();

function checkPostDate() {
  for (let i = 0; i < posts.length; i++) {
    let post = posts[i];
    let dateStr = post.getAttribute("data-date");
    console.log("den fins vist:", dateStr);
    let date = new Date(dateStr);
    if (date != null) {
      if (date >= today) {
        post.style.display = "none";
        console.log("i if");
      } else {
        console.log(dateStr);
        console.log("date in html", date);
        console.log(today);
      }
    } else {
      console.log("data-date är null");
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

document.getElementById("post-date").defaultValue = today
  .toISOString()
  .split("T")[0];
newPostBtn.addEventListener("click", showNewPost);

checkPostDate();
