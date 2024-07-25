document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".carousel-item");

  items.forEach((item, index) => {
    item.addEventListener("click", () => {
      items.forEach((el) => el.classList.remove("active"));
      item.classList.add("active");
      item.scrollIntoView({ behavior: "smooth", inline: "center" });
    });
  });
});
