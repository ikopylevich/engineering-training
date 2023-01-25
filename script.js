console.log("Engineering Training");

const modalButton = document.getElementById('modalButton');
const modalContainer = document.getElementById('modalContainer');

modalButton.addEventListener("click", function () {
    console.log("clicked button!");
    modalContainer.classList.toggle("hidden");
});

console.log("modalButton ", modalButton);