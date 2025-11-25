import axios from "axios";
import type { GiphyResponse } from "../intefaces/giphy.response";
import type { Gif } from "../intefaces/gif.interface";

export const getGifsByQuery = async(query: string): Promise<Gif[]> => {

    const response = await axios.get<GiphyResponse>('https://api.giphy.com/v1/gifs/search', {
        params:{
            q:query,
            limit: 10,
            lang: 'es',
            api_key: '7SD6abwdH3FcmB6722Nsb3oih1TfkOLp'
        }
    });

    return response.data.data.map((gif) => ({
        id: gif.id,
        title: gif.title,
        url: gif.images.original.url,
        width: Number (gif.images.original.width),
        height: Number (gif.images.original.height),
    }))

}