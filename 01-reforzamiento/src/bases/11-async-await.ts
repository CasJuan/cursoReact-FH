import type { GiphyRanomResponse } from "./data/giphy.response";

const API_KEY = '0nkT8xdzw3P8Ivy9aS1rHMcrtgUJkJ4M';

const createImageInsideDOM = (url:string) => {
    const imgElement = document.createElement('img');
    imgElement.src = url;

    document.body.append(imgElement);
}

const getRandomGifUrl = async():Promise<string> => {
     
    const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=&rating=g`);

    const {data}: GiphyRanomResponse = await response.json();

    return data.images.original.url;
}

getRandomGifUrl().then(createImageInsideDOM);