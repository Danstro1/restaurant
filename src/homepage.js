function createHomepage() {
  const homepage = document.createElement("div");
  const header = document.createElement("h1");
  const about = document.createElement("div");
  const image = document.createElement("img");

  homepage.classList.add("homepage");
  header.textContent = "HomePage";
  about.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, optio fugiat doloribus asperiores quo explicabo quasi quam minima consectetur nulla dolorum placeat quod fuga obcaecati soluta ad hic dignissimos impedit. Neque praesentium sit fuga quaerat cum inventore tenetur ducimus, ex similique at repellat harum quasi consequuntur voluptatibus laudantium, nisi architecto.";
  image.src = "https://www.espace-concours.fr/uploads/2023/07/chef-cuisinier-domicile-scaled.jpg";

  homepage.appendChild(header);
  homepage.appendChild(about);
  homepage.appendChild(image);

  return homepage;
}

function loadHomepage() {
    const content = document.querySelector("#content");
    content.innerHTML = "";
    content.appendChild(createHomepage());
}

export default loadHomepage;
