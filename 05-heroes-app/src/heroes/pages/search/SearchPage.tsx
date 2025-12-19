import { CustomJumboton } from "@/components/custom/CustomJumboton"
import { HeroStats } from "@/heroes/components/HeroStats"

const SearchPage = () => {
  return (
    <>
      <CustomJumboton
        title="Universo de SuperHeroes"
        description="Descubre, explora y administra super heroes y villanos"
      />

      <HeroStats/>

    </>
  )
}

export default SearchPage