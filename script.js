const DOG_API = "https://dog.ceo/api/breeds/image/random";
const container = document.querySelector(".container");
const generateDogPicButton = document.querySelector("button");
const img = document.createElement("img");

generateDogPicButton.addEventListener("click", () => {
    container.appendChild(img);
    img.src = "Loading_icon.gif";

    const promise = fetch(DOG_API);

    promise
        .then(response => {
            return response.json();
        })
        .then(processedResponse => {
            img.src = processedResponse.message;
            img.alt = "Cute doggo";
        });
});