// import projectsObject from "./object";

// PROJECTS JS

const projectsList = document.querySelector(".projects__list");
const categorBtns = document.querySelectorAll(".projects__categor-item");
const all = "all";
const categorActiveLi = document.querySelector(
  ".projects__categor-item-active"
);
const projectsObject = [
  {
    id: 1,
    categor: "Veb sayt",
    name: "UYMAKON mobil ilovasi",
    img: "../assets/images/projects/item1.png",
    icon: "../assets/images/projects/hover-icon.svg",
  },
  {
    id: 2,
    categor: "SMM",
    name: "UYMAKON mobil ilovasi",
    img: "../assets/images/projects/item2.png",
    icon: "../assets/images/projects/hover-icon.svg",
  },
  {
    id: 3,
    categor: "Veb dizayn",
    name: "UYMAKON mobil ilovasi",
    img: "../assets/images/projects/item3.png",
    icon: "../assets/images/projects/hover-icon.svg",
  },
  {
    id: 4,
    categor: "Veb sayt",
    name: "UYMAKON mobil ilovasi",
    img: "../assets/images/projects/item4.png",
    icon: "../assets/images/projects/hover-icon.svg",
  },
  {
    id: 5,
    categor: "SMM",
    name: "UYMAKON mobil ilovasi",
    img: "../assets/images/projects/item5.png",
    icon: "../assets/images/projects/hover-icon.svg",
  },
  {
    id: 6,
    categor: "Veb dizayn",
    name: "UYMAKON mobil ilovasi",
    img: "../assets/images/projects/item6.png",
    icon: "../assets/images/projects/hover-icon.svg",
  },
  {
    id: 7,
    categor: "Veb sayt",
    name: "UYMAKON mobil ilovasi",
    img: "../assets/images/projects/item1.png",
    icon: "../assets/images/projects/hover-icon.svg",
  },
  {
    id: 8,
    categor: "SMM",
    name: "UYMAKON mobil ilovasi",
    img: "../assets/images/projects/item2.png",
    icon: "../assets/images/projects/hover-icon.svg",
  },
  {
    id: 9,
    categor: "Mobil ilova",
    name: "UYMAKON mobil ilovasi",
    img: "../assets/images/projects/item3.png",
    icon: "../assets/images/projects/hover-icon.svg",
  },
  {
    id: 10,
    categor: "Veb dizayn",
    name: "UYMAKON mobil ilovasi",
    img: "../assets/images/projects/item4.png",
    icon: "../assets/images/projects/hover-icon.svg",
  },
  {
    id: 11,
    categor: "SMM",
    name: "UYMAKON mobil ilovasi",
    img: "../assets/images/projects/item5.png",
    icon: "../assets/images/projects/hover-icon.svg",
  },
  {
    id: 12,
    categor: "Mobil ilova",
    name: "UYMAKON mobil ilovasi",
    img: "../assets/images/projects/item6.png",
    icon: "../assets/images/projects/hover-icon.svg",
  },
];

projectsCategorHandler("all");
categorBtns.forEach((item, inx) => {
  item.addEventListener("click", () => {
    let act = inx + 1;
    categorActiveLi.style.transform = `translateX(${act * 132 - 132}px)`;
    projectsCategorHandler(item.id);
  });
});

function projectsCategorHandler(id) {
  projectsList.innerHTML = "";
  projectsObject.forEach((item, inx) => {
    const li = document.createElement("li");
    li.className = "projects__item";
    li.id = item.categor;
    li.innerHTML = `
    <span class="projects__item-categor">${item.categor}</span>
    <img src=${item.img} alt=${item.name}>

    <div class="projects__item-hover-box">
      <button class="projects__item-hover-close-btn">
        <img src=${item.icon} alt="project hover icon">
      </button>

      <p class="projects__item-title">${item.name}</p>
    </div>
    `;
    if (id == "all") {
      projectsList.appendChild(li);
    } else if (id === item.categor) {
      projectsList.appendChild(li);
    }
  });
}

// // HEADER AND HERO JS

// const sunBtn = document.querySelector("#sun");
// const moonBtn = document.querySelector("#moon");
// const mobileBtn = document.querySelector("#mobile-btn");
// const burgerBtn = document.querySelector("#burger-btn");
// const headerModal = document.querySelector(".header__modal");
// const modalX = document.querySelector("#x");

// sunBtn.addEventListener("click", () => {
//   document.body.classList.remove("dark");

//   sunBtn.classList.add("theme-active");
//   moonBtn.classList.remove("theme-active");
// });

// moonBtn.addEventListener("click", () => {
//   document.body.classList.add("dark");

//   moonBtn.classList.add("theme-active");
//   sunBtn.classList.remove("theme-active");
// });

// mobileBtn.addEventListener("click", () => {
//   document.body.classList.toggle("dark");

//   mobileBtn.classList.toggle("theme-dark");
// });

// burgerBtn.addEventListener("click", () => {
//   headerModal.classList.add("move-right");
// });

// modalX.addEventListener("click", () => {
//   headerModal.classList.remove("move-right");
// });
