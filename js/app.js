const cart = document.querySelector("#cart");
const cartContainer = document.querySelector("#list-cart tbody");
const clearCartBtn = document.querySelector("#clear-cart");
const courseList = document.querySelector("#course-list");
let courseArticle = [];

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

  courseArticle = [...courseArticle, courseInfo];

  carHTML(courseArticle);
}

function carHTML(courseArticle) {
  //Clean HTML
  cleanHTML();

  courseArticle.forEach((course) => {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>
            ${course.title}
        </td>
    `;

    cartContainer.appendChild(row);
  });
}

function cleanHTML() {
  while (cartContainer.firstChild) {
    cartContainer.removeChild(cartContainer.firstChild);
  }
}
