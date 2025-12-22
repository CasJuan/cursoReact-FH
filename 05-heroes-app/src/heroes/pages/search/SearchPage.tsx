import { CustomJumboton } from "@/components/custom/CustomJumboton"
import { HeroStats } from "@/heroes/components/HeroStats"
import { SearchControls } from "./ui/SearchControls"
import { CustomBreadcrums } from "@/components/custom/CustomBreadcrums"

const SearchPage = () => {
  return (
    <>
      <CustomJumboton
        title="Universo de SuperHeroes"
        description="Descubre, explora y administra super heroes y villanos"
      />

      <CustomBreadcrums currentPage="Buscador de hèroes"
        breadcrumbs={
          [{label: 'Home', to:'/'},
            {label: 'Home1', to:'/'},
            {label: 'Home2', to:'/'},
          ]
        }
      
      />

      <HeroStats/>

      {/* Filter and search */}
      <SearchControls/>

    </>
  )
}

export default SearchPage