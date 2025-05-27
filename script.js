const popularProducts = [
  {
    img: "https://www.zdnet.com/a/img/resize/6f9484ab38f23233c10648adb637b400d2d04108/2024/01/08/79a6db02-e743-44d2-8ecd-a2ad5f9f43ce/dsc00931.jpg?auto=webp&fit=crop&height=360&width=640",
    name: "Motion Pillow",
    price: "$699.99",
  },
  {
    img: "https://www.zdnet.com/a/img/resize/c1219212332645c25a7e7d5a743ae807d142c6e2/2024/01/11/e5fea2a2-f6ad-4c2e-be54-171f77723dbe/dsc01472.jpg?auto=webp&fit=crop&height=360&width=640",
    name: "Bmind Smart Mirror",
    price: "$999.99",
  },
  {
    img: "https://www.zdnet.com/a/img/resize/7dc3202277ca32d68dd72b990e42b6acbc2979ee/2024/01/11/f35bf1a2-d2b4-48d8-83c4-94ac713a49b9/dsc01346.jpg?auto=webp&fit=crop&height=360&width=640",
    name: "Ballie",
    price: "$1,599.99",
  },
];

const products = [
  {
    img: "https://thegadgetflow.com/wp-content/uploads/2024/02/Xiaomi-Cyber-Dog-2-Robot-Dog-01-768x432.jpg",
    name: "Xiaomi Cyber Dog",
    price: "$1,599.99",
  },
  {
    img: "https://thegadgetflow.com/wp-content/uploads/2023/02/EBO-X-Family-Robot-Companion-Protector-Playmate-01-768x432.jpg",
    name: "EBO X Family Robot Companion",
    price: "$999.99",
  },
  {
    img: "https://thegadgetflow.com/wp-content/uploads/2023/08/iRobot-Roomba-Combo-i5-AI-Robot-Vacuum-and-Mop-01-768x432.jpeg",
    name: "iRobot Roomba Combo i5 AI Robot Vacuum and Mop",
    price: "$443.31",
  },
  {
    img: "https://thegadgetflow.com/wp-content/uploads/2024/01/Rux-Robot-AI-Fun-and-Entertaining-Desktop-Robot-01-768x432.jpg",
    name: "Rux Robot AI Fun and Entertaining",
    price: "$399.99",
  },
  {
    img: "https://thegadgetflow.com/wp-content/uploads/2022/09/Amazon-Astro-2nd-Generation-Smart-Home-Office-Robot-01-768x432.jpeg",
    name: "Amazon Astro 2nd Generation Smart Home Office Robot",
    price: "$1,599.99",
  },
  {
    img: "https://www.zdnet.com/a/img/resize/6f9484ab38f23233c10648adb637b400d2d04108/2024/01/08/79a6db02-e743-44d2-8ecd-a2ad5f9f43ce/dsc00931.jpg?auto=webp&fit=crop&height=360&width=640",
    name: "Motion Pillow",
    price: "$699.99",
  },
  {
    img: "https://www.zdnet.com/a/img/resize/c1219212332645c25a7e7d5a743ae807d142c6e2/2024/01/11/e5fea2a2-f6ad-4c2e-be54-171f77723dbe/dsc01472.jpg?auto=webp&fit=crop&height=360&width=640",
    name: "Bmind Smart Mirror",
    price: "$999.99",
  },
  {
    img: "https://www.zdnet.com/a/img/resize/7dc3202277ca32d68dd72b990e42b6acbc2979ee/2024/01/11/f35bf1a2-d2b4-48d8-83c4-94ac713a49b9/dsc01346.jpg?auto=webp&fit=crop&height=360&width=640",
    name: "Ballie",
    price: "$1,599.99",
  }
];

const popularCardContainer = document.getElementById("popularCardContainer");
const scrollContainer = document.getElementById("scroll-container");
const leftBtn = document.querySelector(".scroll-btn.left");
const rightBtn = document.querySelector(".scroll-btn.right");

function popularCardDisplay() {
  popularProducts.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("custom-card");

    const img = document.createElement("img");
    img.src = item.img;
    img.classList.add("custom-card-img");

    const divBody = document.createElement("div");
    divBody.classList.add("custom-card-body");

    const title = document.createElement("h5");
    title.textContent = item.name;
    title.classList.add("custom-card-title");

    const price = document.createElement("p");
    price.textContent = item.price;
    price.classList.add("custom-card-price");

    divBody.appendChild(title);
    divBody.appendChild(price);
    card.appendChild(img);
    card.appendChild(divBody);
    popularCardContainer.appendChild(card);
  });
}

popularCardDisplay();

function displayScrollProducts() {
  products.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("custom-card");

    const img = document.createElement("img");
    img.src = item.img;
    img.classList.add("custom-card-img");

    const divBody = document.createElement("div");
    divBody.classList.add("custom-card-body");

    const title = document.createElement("h5");
    title.textContent = item.name;
    title.classList.add("custom-card-title");

    const price = document.createElement("p");
    price.textContent = item.price;
    price.classList.add("custom-card-price");

    divBody.appendChild(title);
    divBody.appendChild(price);
    card.appendChild(img);
    card.appendChild(divBody);

    scrollContainer.appendChild(card);
  });
}

displayScrollProducts();

// Scroll buttons
leftBtn.addEventListener("click", () => {
  scrollContainer.scrollBy({ left: -300, behavior: "smooth" });
});

rightBtn.addEventListener("click", () => {
  scrollContainer.scrollBy({ left: 300, behavior: "smooth" });
});