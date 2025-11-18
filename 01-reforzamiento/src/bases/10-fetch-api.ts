import type { GiphyRanomResponse } from "./data/giphy.response";

const API_KEY = '0nkT8xdzw3P8Ivy9aS1rHMcrtgUJkJ4M';


const myRequest = fetch(
    `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=&rating=g`
)


const createImageInsideDOM = (url:string) => {
    const imgElement = document.createElement('img');
    imgElement.src = url;

    document.body.append(imgElement);
}

myRequest
    .then((response) => 
        response.json()
    )
    .then(({data}: GiphyRanomResponse) => {
        const imageUrl = data.images.original.url;
        /* const imageUrl = data.data.images.original.url; */
        createImageInsideDOM(imageUrl);
    })
    .catch((err) => {
        console.log(err)
    })