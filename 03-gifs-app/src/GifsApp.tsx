import { useState } from "react"
import GifsList from "./gifs/components/GifsList"
import { PreviousSearches } from "./gifs/components/PreviousSearches"
import { CustomHeader } from "./shared/components/CustomHeader"
import { SearchBar } from "./shared/components/SearchBar"
import { getGifsByQuery } from "./gifs/actions/get-gif-by-query.action"
import type { Gif } from "./gifs/intefaces/gif.interface"

export const GifsApp = () => {

    const [previousTerms, setPreviousTerms] = useState<string>([]);

    const [gifs, setGifs] = useState<Gif[]>([]);

    const handleTermClicked = (term: string) => {
        console.log(term)
    }

    const handleSearch = async(query: string = '') => {
        query = query.trim().toLowerCase();
        
        if(query.length === 0) return;
        
        if(previousTerms.includes(query)) return;

        setPreviousTerms([query, ...previousTerms].slice(0,8));

        const gifs = await getGifsByQuery(query);
        
        setGifs(gifs);
    }


  return (
    <>
        {/* {Header} */}
        <CustomHeader 
            title="Buscador de Gifs"
            description="Descubre y comparte el gif perfecto"
        />

        <SearchBar 
            placeholder = "Busca lo que quieras"
            onQuery = {handleSearch}
        />

        <PreviousSearches 
        searches={previousTerms} 
        onLabelClicked={handleTermClicked}/>

        <GifsList gifs={gifs}/>
    </>
  )
}
