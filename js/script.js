document.addEventListener("DOMContentLoaded", function() {
  const menu = document.querySelector("#menu");
  const burgerIcon = document.createElement("div");
  burgerIcon.classList.add("burger-icon");
  for (let i = 0; i < 3; i++) {
      const line = document.createElement("div");
      line.classList.add("burger-line");
      burgerIcon.appendChild(line);
  }
  menu.parentElement.insertBefore(burgerIcon, menu);

  burgerIcon.addEventListener("click", function() {
      menu.classList.toggle("active");
  });

  const closeIcon = document.createElement("div");
  closeIcon.classList.add("close-icon");
  for (let i = 0; i < 2; i++) {
      const line = document.createElement("div");
      line.classList.add("close-line");
      closeIcon.appendChild(line);
  }
  menu.appendChild(closeIcon);

  closeIcon.addEventListener("click", function() {
      menu.classList.remove("active");
  });
});
