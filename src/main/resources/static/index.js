let posts = document.getElementsByClassName("posts");

function checkPostDate() {
  let today = new Date();
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

checkPostDate();
