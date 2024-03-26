const generateMemeBtn = document.querySelector(".container .meme-btn");
const memeImage = document.querySelector(".container img");
const memeTitle = document.querySelector(".container .meme-title");
const memeCreator = document.querySelector(".container .meme-creator");

const updateDetails=(url,title,author)=>{
    memeImage.setAttribute("src",url);
    memeTitle.innerHTML = title;
    memeCreator.innerHTML = `Meme by: ${author}`;
}
const generateMeme =()=>{
    fetch("https://meme-api.com/gimme/wholesomememes")
    .then((response) =>response.json())
    .then(data=>{
        updateDetails(data.url,data.title,data.author)

    })
}
generateMemeBtn.addEventListener("click",generateMeme);
generateMeme();