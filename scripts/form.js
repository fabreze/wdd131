const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];
const reviewsCompleted = localStorage.setItem("reviewsCompleted", "0");
const submitButton =  document.querySelector("#submit-review");
const productSelect = document.querySelector("#products");


submitButton.addEventListener("click", function() {
  let reviewsCompleted = parseInt(localStorage.getItem("reviewsCompleted"));
  reviewsCompleted++;
  localStorage.setItem("reviewsCompleted", reviewsCompleted.toString());
});

products.forEach(product => {
  const option = document.createElement("option");
  option.value = product.id;
  option.textContent = product.name;
  productSelect.appendChild(option);
});
