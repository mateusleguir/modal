const modalForm = document.querySelector("#modal-form");
const openForm = document.querySelector(".open-form");
const closeForm = document.querySelector(".close-form");

openForm.onclick = function () {
  modalForm.showModal();
};

closeForm.onclick = function () {
  modalForm.close();
};
