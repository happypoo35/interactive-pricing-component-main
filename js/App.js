const slider = document.getElementById("slider");
const price = document.getElementById("price");
const toggle = document.getElementById("toggle");
const pageviews = document.getElementById("pageviews");

const sliderFill = document.documentElement;

slider.addEventListener("input", () => {
  price.innerHTML = `$${
    toggle.checked
      ? Math.floor(slider.value * 7.5) + ".00"
      : slider.value + ".00"
  }<span class="period" id="period">${
    toggle.checked ? "/ year" : "/ month"
  }</span>`;

  pageviews.innerText = `${Math.floor(slider.value * 6.25)}k Pageviews`;

  sliderFill.style.setProperty(
    "--fillwidth",
    Math.floor((slider.value / 32) * 100) + "%"
  );
});

toggle.addEventListener("click", () => {
  price.innerHTML = `$${
    toggle.checked
      ? Math.floor(slider.value * 7.5) + ".00"
      : slider.value + ".00"
  }<span class="period" id="period">${
    toggle.checked ? "/ year" : "/ month"
  }</span>`;
});
