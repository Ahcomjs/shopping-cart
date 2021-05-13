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
    const selectedCourse = event.target.parentElement.parentElement;
    readCourse(selectedCourse);
  }
}

function readCourse(course) {
  const courseInfo = {
    img: course.querySelector("img").src,
    title: course.querySelector("h4").textContent,
    price: course.querySelector(".precio span").textContent,
    id: course.querySelector("a").getAttribute("data-id"),
    cantidad: 1,
  };
}
