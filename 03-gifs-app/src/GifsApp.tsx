import { useState } from "react"
import GifsList from "./gifs/Components/GifsList"
import { PreviousSearches } from "./gifs/Components/PreviousSearches"
import { mockGifs } from "./mock-data/gifs.mock"
import { CustomHeader } from "./shared/components/CustomHeader"
import { SearchBar } from "./shared/components/SearchBar"

export const GifsApp = () => {

    const [previousTerms, setPreviousTerms] = useState(['dragon ball z']);

    const handleTermClicked = (term: string) => {
        console.log(term)
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
        />

        <PreviousSearches 
        searches={previousTerms} 
        onLabelClicked={handleTermClicked}/>

        <GifsList gifs={mockGifs}/>
    </>
  )
}
