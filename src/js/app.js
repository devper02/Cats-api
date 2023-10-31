const api =
  "https://api.thecatapi.com/v1/images/search?api_key=live_hMylSLd6mH1UycJ02QrnehSWGArFzHBvKvtlLSD3Uc3CgbyMte7ParlBpKmeqfoy";
const btn = document.querySelector(".btn");
const img = document.querySelector(".img");

async function fetchHandler() {
  try {
    const response = await fetch(api);
    const data = await response.json();
    img.src = data[0].url;
  } catch (error) {
    console.log(error);
  }
}

btn.addEventListener("click", () => {
  fetchHandler();
});
