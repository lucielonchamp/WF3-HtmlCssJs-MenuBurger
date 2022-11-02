// Déclaration des variables pour récupérer les sélecteurs
var iconBurger = document.querySelector(".icon");
var toggleMenu = document.querySelector(".toggle-menu");
var nav = document.querySelector("nav");
var list = document.querySelector(".list");
var boxIconLogo = document.querySelector(".box-icon-logo");

// Permutation du menu
var isToggled = false;

// Fonction qui permet de gérer la taille de la fenêtre
function reportWindowSize() {
  // condition si la fenetre est petite
  if (window.innerWidth < 721) {
    // apparition de l'icon
    iconBurger.style.display = "flex";
    // déplacement de la liste dans le menu
    toggleMenu.insertAdjacentElement("afterbegin", list);
    nav.style.justifyContent = "start";
    // condition si la fenetre est grande
  } else {
    // lorsque ma fenetre devient grande le menu displarait
    Menu();
    // displarition de l'icon
    iconBurger.style.display = "none";
    // déplacement de la liste dans le menu initial
    boxIconLogo.insertAdjacentElement("afterend", list);
    nav.style.justifyContent = "space-around";
  }
}
// gestion de la fonction aussi lorque la fénêtre n'est pas redimensionnée
reportWindowSize();
// event du redimentionnement
window.addEventListener("resize", reportWindowSize);

// permutation de l'apparition et de la disparition du menu
function Menu(toggled) {
  if (!toggled) {
    toggleMenu.style.transform = "translateX(-700px)";
  } else {
    toggleMenu.style.transform = "translateX(0)";
  }
  toggleMenu.style.transition = "0.3s";
}

// event conclick de l'icon
iconBurger.onclick = function () {
  if (!isToggled) {
    isToggled = true;
  } else {
    isToggled = false;
  }
  Menu(isToggled);
};

// function Menu() {
//   isToggled = !isToggled;
//   if (!isToggled) {
//     toggleMenu.style.transform = "translateX(-700px)";
//   } else {
//     toggleMenu.style.transform = "translateX(0)";
//   }
//   toggleMenu.style.transition = "0.3s";
// }

// iconBurger.onclick = Menu();
