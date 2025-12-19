import { CustomJumboton } from "@/components/custom/CustomJumboton"
import { HeroStats } from "@/heroes/components/HeroStats"
import { SearchControls } from "./ui/SearchControls"

const SearchPage = () => {
  return (
    <>
      <CustomJumboton
        title="Universo de SuperHeroes"
        description="Descubre, explora y administra super heroes y villanos"
      />

      <HeroStats/>

      {/* Filter and search */}
      <SearchControls/>

    </>
  )
}

export default SearchPage