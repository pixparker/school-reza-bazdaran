// window.onscroll = navbarShow;
window.onscroll = handleScroll;



function handleScroll() {
  var section = document.querySelector('#learning');
  if (window.scrollY > section.offsetTop) {
    document.querySelector('#gotop-btn').classList.add('d-block');
    document.querySelector('#gotop-btn').classList.remove('d-none');
  }
  else {
    document.querySelector('#gotop-btn').classList.add('d-none');
    document.querySelector('#gotop-btn').classList.remove('d-block');
  }
}










const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map((tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl));

const myModal = document.getElementById("myModal");
const myInput = document.getElementById("myInput");

myModal.addEventListener("shown.bs.modal", () => {
  myInput.focus();
});



function closeBar() {
  var closeBar = document.querySelector('.top-bar');
  closeBar.classList.add('d-none');
}







function closeAdd() {
  var add = document.querySelector('.new-youtube');
  add.classList.add('d-none');
}