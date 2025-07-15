class MobileNavbar {

    constructor(mobileMenu, navList, navLinks){

        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }

    animateLinks(){
        this.navLinks.forEach((link, index) => {
            link.style.animation
            ? (link.style.animation = "")
            : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`);
            
        });
    }

    handleClick() {
        console.log(this);
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks();
    }


    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick);
    }

    init() {
        if (this.mobileMenu) {
         this.addClickEvent();
        }
        return this;
    }
}

const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
);
mobileNavbar.init();


const texto = document.getElementById("textoCompleto");
const btnMais = document.getElementById("btnExpandir");
const btnMenos = document.getElementById("btnReduzir");

btnMais.addEventListener("click", () => {
  texto.classList.remove("texto-reduzido");
  btnMais.style.display = "none";
  btnMenos.style.display = "inline-block";
});

btnMenos.addEventListener("click", () => {
  texto.classList.add("texto-reduzido");
  btnMais.style.display = "inline-block";
  btnMenos.style.display = "none";
});

const textoAreas = document.getElementById("textoAreas");
const btnMaisAreas = document.getElementById("btnExpandirAreas");
const btnMenosAreas = document.getElementById("btnReduzirAreas");

btnMaisAreas.addEventListener("click", () => {
  textoAreas.classList.remove("texto-reduzido");
  btnMaisAreas.style.display = "none";
  btnMenosAreas.style.display = "inline-block";
});

btnMenosAreas.addEventListener("click", () => {
  textoAreas.classList.add("texto-reduzido");
  btnMaisAreas.style.display = "inline-block";
  btnMenosAreas.style.display = "none";
});
