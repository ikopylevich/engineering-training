console.log("Engineering Training");

const modalButton = document.getElementById('modalButton');
const modalContainer = document.getElementById('modalContainer');
const closeModalButton = document.getElementsByClassName("close-modal-button");

modalButton.addEventListener("click", function () {
    console.log("clicked button!");
    modalContainer.classList.toggle("hidden");
});
closeModalButton[0].addEventListener("click", () => {
    modalContainer.classList.toggle("hidden");
});
console.log("modalButton ", modalButton);
console.log("closeModalButton : ", closeModalButton);