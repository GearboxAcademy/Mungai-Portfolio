function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
function openLink(url) {
                // Set the location.href to the desired URL
                location.href = "https://github.com/";

                // Open the link in a new tab using window.open()
                window.open("https://github.com/", '_blank');
              }