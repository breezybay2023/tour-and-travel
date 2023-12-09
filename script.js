'use strict';

/**
 * navbar toggle
 */

const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const navElemArr = [navOpenBtn, navCloseBtn, overlay];

const navToggleEvent = function (elem) {
  for (let i = 0; i < elem.length; i++) {
    elem[i].addEventListener("click", function () {
      navbar.classList.toggle("active");
      overlay.classList.toggle("active");
    });
  }
}

navToggleEvent(navElemArr);
navToggleEvent(navLinks);



/**
 * header sticky & go to top
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  if (window.scrollY >= 200) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }

});

/**
 * Plan my trip
 */

document.getElementById("planTripButton").addEventListener("click", function () {

  var name = document.getElementById("name").value;
  var number = document.getElementById("number").value;
  var email = document.getElementById("email").value;
  var person = document.getElementById("person").value;
  var date = document.getElementById("date").value;
  var budget = document.getElementById("budget").value;

  if (name && number && email && person && date && budget) {
    // All fields have data, you can submit the form here
    document.getElementById("tripForm").submit();
    // Display a confirmation message
    alert("Thank you! We will contact you soon.");

    document.getElementById("tripForm").reset();

  } else {
    // Display an error message or alert the user to fill in all fields
    alert("Please fill in all required fields.");
  }
});


/**
 * destination
 */

document.getElementById('more-destination').addEventListener('click', function () {
  // Replace 'your-url-here' with the actual URL of the page you want to open.
  var newWindow = window.open('Destination.html', '_blank');
  newWindow.focus(); // Optional: Bring the new window to the front.
});


// read more
function openPopup(title, info) {
  document.getElementById('popup-title').textContent = title;
  document.getElementById('popup-info').textContent = info;
  document.getElementById('popup-container').style.display = 'flex';
}

function closePopup() {
  document.getElementById('popup-container').style.display = 'none';
}


/**
 * activity
 */

function openNewPage() {
  // Define the URL of the new page
  var newPageUrl = "Activity.html";

  // Open the new page in the current browser window/tab
  window.open(newPageUrl, "_blank");
}

// Back button in Destination
function goBack() {
    window.location.href = "index.html#destination";
    window.close();
}

// Back button in Activity

function goBacka() {
  window.location.href = "index.html#activities";
  
  window.close();
}