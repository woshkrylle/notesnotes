const Card = function (front, back, date) {
  this.front = front;
  this.back = back;
  this.date = date;
};

let cards = [];
let cardCtr = 0;
let errorFront = "Please fill out the front.";
let errorBack = "Please fill out the back.";
let errorBoth = "Must fill out all fields!";

document.addEventListener("DOMContentLoaded", function () {
  let today = new Date();
  document.querySelector(".dateAdded").value = today;
  document.querySelector("#add-card-btn").addEventListener("click", function (e) {
    e.preventDefault();

    let front = document.querySelector("#front-card-field").value;
    let back = document.querySelector("#back-card-field").value;
    let date = today;

    if (validateFields(front, back)) {
      if (cardCtr === 0) {
        clearCards();
      }
      cardCtr = cardCtr + 1;
      let card = new Card(front, back, date);
      cards.push(card);

      refreshDisplay(cards);
      resetCreateCard();
    }
  });

  function validateFields(front, back) {
    if (front === "" && back === "") {
      showError(errorBoth);
      return false;
    }
    if (front === "") {
      showError(errorFront);
      return false;
    }
    if (back === "") {
      showError(errorBack);
      return false;
    }
    return true;
  }

  function clearCards() {
    document.querySelector("#cardlist-div").innerText = "";
  }

  function displayCard(newCard) {
    const cardHTML =
      "<div class='flashcard' style='background-color: rgb(186, 254, 209);'>" +
      "<div class='flashcard-text'>" +
      "<p class='card-text front'>" +
      newCard.front +
      "</p>" +
      "<p class='card-text back' hidden>" +
      newCard.back +
      "</p>" +
      "</div>" +
      "<div class='card-bottom-row'>" +
      "<span class='card-date-label'> Added on <span class='date-added'>" +
      newCard.date +
      "</span> </span>" +
      "<span class='card-side-label'> Front </span>" +
      "<span class='card-side-label' hidden> Back </span>" +
      "</div>" +
      "</div>";
    
    document.querySelector("#cardlist-div").insertAdjacentHTML("beforeend", cardHTML);
  }

  function displayEmptyCards() {
    document.querySelector("#cardlist-div").innerHTML = "<p>No cards added yet.</p>";
  }

  function displayCards(newCards) {
    clearCards();
    newCards.forEach(card => {
      displayCard(card);
    });
  }

  function refreshDisplay(cards) {
    if (cards.length === 0) {
      displayEmptyCards();
    } else {
      displayCards(cards);
    }
  }

  function resetCreateCard() {
    document.querySelector("#front-card-field").value = "";
    document.querySelector("#back-card-field").value = "";
  }

  function showError(errorText) {
    document.querySelector("#form-error-msg").textContent = errorText;
  }
});