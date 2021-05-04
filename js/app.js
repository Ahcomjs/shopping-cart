const cart = document.querySelector("#cart");
const cartContainer = document.querySelector("#list-cart tbody");
const clearCartBtn = document.querySelector("#clear-cart");
const courseList = document.querySelector("#course-list");

loadEventListeners();
function loadEventListeners() {
  courseList.addEventListener("click", addCourses);
}

//Functions

function addCourses(event) {
    event.preventDefault();
  if (event.target.classList.contains("add-cart")) {
    console.log("Adding to cart");
  }
}
