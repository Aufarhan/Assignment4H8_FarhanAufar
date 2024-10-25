const name = document.getElementById("name");
const umur = document.getElementById("age");
const availability = document.getElementById("availability");
const loc = document.getElementById("loc");
const exp = document.getElementById("exp");
const email = document.getElementById("email");

function storeData() {
  const dataUser = {
    name: "Farhan Aufar",
    age: "21",
    role: "Web Developer",
    availability: "Full time",
    location: "Jakarta Selatan",
    yoe: "1",
    email: "farhanaufarr@gmail.com",
  };

  localStorage.setItem("biodataUser", JSON.stringify(dataUser));
}

function getUserData() {
  try {
    const data = localStorage.getItem("biodataUser");
    if (data) {
      return JSON.parse(data);
    }
    return null;
  } catch (error) {
    console.error("Error when parsing user data", error);
  }
}

async function getData() {
  const userData = getUserData();
  if (userData) {
    name.textContent = userData.name;
    umur.textContent = userData.age;
    availability.textContent = userData.availability;
    loc.textContent = userData.location;
    exp.textContent = userData.yoe;
    email.textContent = userData.email;
  } else {
    console.warn("Data tidak ditemukan!");
  }
}
getData();

function tampilkanData() {
  const showData = getUserData();
  if (showData) {
    document.getElementById("nameInput").value = showData.name;
    document.getElementById("roleInput").value = showData.role;
    document.getElementById("availabilityInput").value = showData.availability;
    document.getElementById("ageInput").value = showData.age;
    document.getElementById("locationInput").value = showData.location;
    document.getElementById("yoeInput").value = showData.yoe;
    document.getElementById("emailInput").value = showData.email;
  }
}
tampilkanData();

function updateUserData() {
  const updatedData = {
    name: document.getElementById("nameInput").value,
    role: document.getElementById("roleInput").value,
    availability: document.getElementById("availabilityInput").value,
    age: document.getElementById("ageInput").value,
    location: document.getElementById("locationInput").value,
    yoe: document.getElementById("yoeInput").value,
    email: document.getElementById("emailInput").value,
  };

  localStorage.setItem("biodataUser", JSON.stringify(updatedData));
  alert("Data has been updated successfully!");
  window.location.href = "index.html";
}

document.getElementById("submit").addEventListener("click", function (event) {
  event.preventDefault();
  updateUserData();
});
