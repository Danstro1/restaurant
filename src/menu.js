function createMenu() {
    const menu = document.createElement("div");
    const header = document.createElement("h1");
  
    menu.classList.add("menu-page");

    header.textContent = "Menu";

    menu.appendChild(header);
    menu.appendChild(createMeal("Steak", "https://www.seriouseats.com/thmb/-KA2hwMofR2okTRndfsKtapFG4Q=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2015__05__Anova-Steak-Guide-Sous-Vide-Photos15-beauty-159b7038c56a4e7685b57f478ca3e4c8.jpg"));
    menu.appendChild(createMeal("Pizza", "https://www.galbani.fr/wp-content/uploads/2017/07/Image7.jpg"))
    return menu;
  }
  
  function createMeal(text, url){
    const meal = document.createElement("div");
    
    const par = document.createElement("p");
    par.textContent = text;

    const image = document.createElement("img");
    image.src = url;

    meal.appendChild(par);
    meal.appendChild(image);

    return meal
  }

  function loadMenu() {
      const content = document.querySelector("#content");
      content.innerHTML = "";
      content.appendChild(createMenu());
  }
  
  export default loadMenu;
  