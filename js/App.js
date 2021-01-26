const slider = document.getElementById("slider");
const price = document.getElementById("price");
const toggle = document.getElementById("toggle");
const pageViews = document.getElementById("pageviews");

const sliderFill = document.documentElement;

slider.addEventListener("input", () => {
  if (slider.value <= 10) {
    pageViews.innerText = `${slider.value * 10}K pageviews`;

    price.innerHTML = `$${
      toggle.checked
        ? (parseInt(slider.value) + 7) * 12 * 0.75 + ".00"
        : parseInt(slider.value) + 7 + ".00"
    }<span class="period" id="period">${
      toggle.checked ? "/ year" : "/ month"
    }</span`;
  } else if (slider.value < 19) {
    pageViews.innerText = `${
      (parseInt(slider.value.split("")[1]) + 1) * 100
    }K pageviews`;

    price.innerHTML = `$${
      toggle.checked
        ? Math.floor(slider.value * 1.9) * 12 * 0.75 + ".00"
        : Math.floor(slider.value * 1.9) + ".00"
    }<span class="period" id="period">${
      toggle.checked ? "/ year" : "/ month"
    }</span`;
  } else {
    pageViews.innerText = "1M pageviews";

    price.innerHTML = `$${
      toggle.checked ? "324.00" : "36.00"
    }<span class="period" id="period">${
      toggle.checked ? "/ year" : "/ month"
    }</span`;
  }

  sliderFill.style.setProperty(
    "--fillwidth",
    Math.floor((slider.value / 19) * 100) + "%"
  );
});

toggle.addEventListener("click", () => {
  if (slider.value <= 10) {
    price.innerHTML = `$${
      toggle.checked
        ? (parseInt(slider.value) + 7) * 12 * 0.75 + ".00"
        : parseInt(slider.value) + 7 + ".00"
    }<span class="period" id="period">${
      toggle.checked ? "/ year" : "/ month"
    }</span`;
  } else if (slider.value < 19) {
    price.innerHTML = `$${
      toggle.checked
        ? Math.floor(slider.value * 1.9) * 12 * 0.75 + ".00"
        : Math.floor(slider.value * 1.9) + ".00"
    }<span class="period" id="period">${
      toggle.checked ? "/ year" : "/ month"
    }</span`;
  } else {
    price.innerHTML = `$${
      toggle.checked ? "324.00" : "36.00"
    }<span class="period" id="period">${
      toggle.checked ? "/ year" : "/ month"
    }</span`;
  }
});
