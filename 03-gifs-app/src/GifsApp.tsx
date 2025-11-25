import GifsList from "./gifs/Components/GifsList"
import { PreviousSearches } from "./gifs/Components/PreviousSearches"
import { mockGifs } from "./mock-data/gifs.mock"
import { CustomHeader } from "./shared/components/CustomHeader"
import { SearchBar } from "./shared/components/SearchBar"

export const GifsApp = () => {
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

        <PreviousSearches searches={['Goku', 'Dragon Ball Z']}/>

        <GifsList gifs={mockGifs}/>
    </>
  )
}
