import GifsList from "./gifs/components/GifsList"

import { PreviousSearches } from "./gifs/components/PreviousSearches"
import { CustomHeader } from "./shared/components/CustomHeader"
import { SearchBar } from "./shared/components/SearchBar"
import { useGifs } from "./gifs/hooks/useGifs"

export const GifsApp = () => {

  const { handleSearch, previousTerms, handleTermClicked, gifs } = useGifs()
  
  return (
    <>
      {/* {Header} */}
      <CustomHeader
        title="Buscador de Gifs"
        description="Descubre y comparte el gif perfecto"
      />

      <SearchBar
        placeholder="Busca lo que quieras"
        onQuery={handleSearch}
      />

      <PreviousSearches
        searches={previousTerms}
        onLabelClicked={handleTermClicked} />

      <GifsList gifs={gifs} />
    </>
  )
}
