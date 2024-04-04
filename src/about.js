function createAbout() {
    const about = document.createElement("div");
    const header = document.createElement("h1");
    const paragraph = document.createElement("p");

    about.classList.add("about-page");
    header.textContent = "About";
    
    paragraph.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ad fugiat, perferendis eveniet reprehenderit voluptates quos, temporibus excepturi voluptatem incidunt, blanditiis fuga asperiores. Enim, optio officia? Quas eos a sunt nesciunt repudiandae rem veritatis facere molestias doloremque perferendis, ducimus quo eius minus eum veniam tempora consequatur similique quos laudantium esse deleniti ea iure! Ipsa qui ducimus vitae sit veniam temporibus officia rem perferendis dolores, ad minima architecto animi quod sunt at aperiam labore optio magni id iste minus eum pariatur a explicabo. Corrupti iure tempore ad perferendis quibusdam. Eaque recusandae doloribus quibusdam sequi vitae ullam aliquid laborum doloremque tempora rerum."
    about.appendChild(header);
    about.appendChild(paragraph);

    return about;
}

function loadMenu() {
      const content = document.querySelector("#content");
      content.innerHTML = "";
      content.appendChild(createAbout());
}

export default loadMenu;