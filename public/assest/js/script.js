// Active Class JS
function toggleActive(Id, db) {
  var element = document.querySelector(Id);
  element.classList.toggle(db);
}
function addActive(Id, db) {
  var element = document.querySelector(Id);
  element.classList.add(db);
}
function removeActive(Id, db) {
  var element = document.querySelector(Id);
  element.classList.remove(db);
}

