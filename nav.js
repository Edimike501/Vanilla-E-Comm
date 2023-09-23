const list = [
  {
    id: 1,
    img: "./Media/a5.jpg",
    pname: "Air Nike Jordan",
    brand: "Nike",
    price: 35.99
  },
  {
    id: 2,
    img: "./Media/a6.avif",
    pname: "Air Nike Jordan",
    brand: "Nike",
    price: 35.99
  },
  {
    id: 3,
    img: "./Media/a7.avif",
    pname: "Air Nike Jordan",
    brand: "Nike",
    price: 35.99
  },
  {
    id: 4,
    img: "./Media/a1.jpg",
    pname: "Air Nike Jordan",
    brand: "Nike",
    price: 35.99
  },
  {
    id: 1,
    img: "./Media/a2.jpg",
    pname: "Air Nike Jordan",
    brand: "Nike",
    price: 35.99
  },
  {
    id: 2,
    img: "./Media/a3.jpg",
    pname: "Air Nike Jordan",
    brand: "Nike",
    price: 35.99
  },
  {
    id: 3,
    img: "./Media/a8.avif",
    pname: "Air Nike Jordan",
    brand: "Nike",
    price: 35.99
  },
  {
    id: 4,
    img: "./Media/a12.avif",
    pname: "Air Nike Jordan",
    brand: "Nike",
    price: 35.99
  },
  {
    id: 1,
    img: "./Media/a4.jpg",
    pname: "Air Nike Jordan",
    brand: "Nike",
    price: 35.99
  },
  {
    id: 2,
    img: "./Media/a10.avif",
    pname: "Air Nike Jordan",
    brand: "Nike",
    price: 35.99
  },
  {
    id: 3,
    img: "./Media/a11.avif",
    pname: "Air Nike Jordan",
    brand: "Nike",
    price: 35.99
  },
  {
    id: 4,
    img: "./Media/a9.avif",
    pname: "Air Nike Jordan",
    brand: "Nike",
    price: 35.99
  }
];

let allProducts = document.querySelector("#allProducts");
if (allProducts) {
  list.map((item) => {
    allProducts.innerHTML += `
        <a href="product-details.html" style='text-decoration: none;'>
          <div class="product">
            <div class="image" style='background-image: url(${item.img});'>
              
            </div>
            <div class="det flex-end flex-col">
              <p class="name">${item.pname}</p>
              <div class="brnd-cont flex-spc-btwn">
                <p class="brand">${item.brand}</p>
                <p class="price">$${item.price}</p>
              </div>
              <div class="btn flex-spc-btwn">
                <div>More</div>
                <button>add to cart</button>
              </div>
            </div>
          </div>
        </a>
      `;
  });
}

function change(event) {
  event.preventDefault();
  let newLocation = "";
  let location = window.location.href;
  let split = location.split("/");
  split.forEach((val, i, arr) => {
    if (val.length > 0 && i < arr.length - 1) {
      if (i == 0) {
        newLocation += val + "//";
        return;
      }
      newLocation += val + "/";
    }
  });
  window.location.href = newLocation + "home.html";
}

let showNavBtn = document.querySelector("#show_side_nav");
let closeNavBtn = document.querySelector("#close_side_nav");
let sideNav = document.querySelector("#side_nav");

if (showNavBtn) {
  showNavBtn.addEventListener("click", () => {
    sideNav.style.display = "block";
    setTimeout(() => {
      sideNav.style.opacity = "1";
      sideNav.firstElementChild.style.transform = "translateX(0%)";
    }, 300);
  });
}
if (closeNavBtn) {
  closeNavBtn.addEventListener("click", () => {
    sideNav.style.opacity = "0";
    sideNav.firstElementChild.style.transform = "translateX(-100%)";
    setTimeout(() => {
      sideNav.style.display = "none";
    }, 900);
  });
}
