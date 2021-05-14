const cart = document.querySelector("#cart");
const cartContainer = document.querySelector("#list-cart tbody");
const clearCartBtn = document.querySelector("#clear-cart");
const courseList = document.querySelector("#course-list");
let cartArticle = [];

loadEventListeners();
function loadEventListeners() {
  courseList.addEventListener("click", addCourses);
  cart.addEventListener("click", deleteCourse);
}

//Functions
function addCourses(event) {
  event.preventDefault();
  if (event.target.classList.contains("add-cart")) {
    const selectedCourse = event.target.parentElement.parentElement;
    readCourse(selectedCourse);
  }
}

function deleteCourse(event) {
  if (event.target.classList.contains("delete-course")) {
    const btnDelete = confirm("Are you sure you want to delete it?");
    if (btnDelete) {
      event.target.parentElement.parentElement.remove();
    }
  }
}

function readCourse(course) {
  const courseInfo = {
    img: course.querySelector("img").src,
    title: course.querySelector("h4").textContent,
    price: course.querySelector(".precio span").textContent,
    id: course.querySelector("a").getAttribute("data-id"),
    quantity: 1,
  };

  const exist = cartArticle.some((course) => course.id === courseInfo.id);
  if (exist) {
    const courses = cartArticle.map((course) => {
      if (course.id === courseInfo.id) {
        course.quantity++;
        return course;
      } else {
        return course;
      }
    });
    cartArticle = [...courses];
  } else {
    cartArticle = [...cartArticle, courseInfo];
  }

  cartHTML(cartArticle);
}

function cartHTML(cartArticle) {
  //Clean HTML
  cleanHTML();

  cartArticle.forEach((course) => {
    const { id, img, title, price, quantity } = course;
    const row = document.createElement("tr");
    row.innerHTML = `
        <td><img src="${img}" width="100"></td>
        <td>${title}</td>
        <td>${price}</td>
        <td>${quantity}</td>
        <td><a href="#" class="delete-course" data-id="${id}">X</a></td>
    `;

    cartContainer.appendChild(row);
  });
}

function cleanHTML() {
  while (cartContainer.firstChild) {
    cartContainer.removeChild(cartContainer.firstChild);
  }
}
