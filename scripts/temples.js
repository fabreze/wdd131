const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");
const album = document.querySelector(".album");

const oldNav = document.querySelector("#old");
const newNav = document.querySelector("#new");
const largeNav = document.querySelector("#large");
const smallNav = document.querySelector("#small");
const homeNav = document.querySelector("#home");

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Asunción Paraguay",
    location: "Asunción, Paraguay",
    dedicated: "2002, September, 17",
    area: 25000,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/brasilia-brazil-temple/brasilia-brazil-temple-39184-main.jpg"
  },
  {
    templeName: "Brasilia Brazil",
    location: "Brasilia, Brazil",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Bogotá Colombia",
    location: "Bogotá, Colombia",
    dedicated: "1999, April, 24-26",
    area: 53500,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/bogota-colombia-temple/bogota-colombia-temple-7733-main.jpg"
  }
];

generateTemples(temples);

function getSmallTemples(temples) {
  let smallTemples = [];
  temples.forEach(temple => {
    if (temple['area'] <= 10000) {
      smallTemples.push(temple)
    }
  })
  return smallTemples;
}

function getLargeTemples(temples) {
  let largeTemples = [];
  temples.forEach(temple => {
    if (temple['area'] >= 90000) {
      largeTemples.push(temple)
    }
  })
  return largeTemples;
}

function getOldTemples(temples) {
  let oldTemples = [];
  temples.forEach(temple => {
    let year = getDateInt(temple['dedicated']);
    if (year <= 1900) {
      oldTemples.push(temple)
    }
  })
  return oldTemples;
}

function getNewTemples(temples) {
  let newTemples = [];
  temples.forEach(temple => {
    let year = getDateInt(temple['dedicated']);
    if (year >= 2000) {
      newTemples.push(temple)
    }
  })
  return newTemples;
}

function getDateInt(stringDate) {
  let year = stringDate.substring(0, 4);
  return parseInt(year);
}

function generateTemples(temples) {
  temples.forEach(temple => {
    const div = document.createElement("div")
    div.className = "picture"

    const title = document.createElement("h2");
    title.textContent = temple['templeName'];

    const location = document.createElement("p");
    location.textContent = `Location: ${temple['location']}`;

    const dedicationDate = document.createElement("p");
    dedicationDate.textContent = `Dedication Date: ${temple['dedicated']}`;

    const area = document.createElement("p");
    area.textContent = `Area: ${temple['area']}`;

    const image = document.createElement("img")
    image.src = temple['imageUrl'];
    image.loading = "lazy";
    image.alt = `A picute of the ${temple['location']} Temple`;

    div.appendChild(title);
    div.appendChild(location);
    div.appendChild(dedicationDate);
    div.appendChild(area);
    div.appendChild(image);
    album.appendChild(div);
  });
}

hamButton.addEventListener("click", () => {
  navigation.classList.toggle("open");
  hamButton.classList.toggle("open");
});

homeNav.addEventListener("click", () => {
  album.innerHTML = "";
  generateTemples(temples);
});

newNav.addEventListener("click", () => {
  album.innerHTML = "";
  generateTemples(getNewTemples(temples));
});

oldNav.addEventListener("click", () => {
  album.innerHTML = "";
  generateTemples(getOldTemples(temples));
});

largeNav.addEventListener("click", () => {
  album.innerHTML = "";
  generateTemples(getLargeTemples(temples));
});

smallNav.addEventListener("click", () => {
  album.innerHTML = "";
  generateTemples(getSmallTemples(temples));
});