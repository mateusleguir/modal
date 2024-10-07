const modal = document.querySelector("#modal");
const openModal = document.querySelector(".open-modal");
const closeModal = document.querySelector(".close-modal");

openModal.onclick = function () {
  modal.showModal();
};

closeModal.onclick = function () {
  modal.close();
};
