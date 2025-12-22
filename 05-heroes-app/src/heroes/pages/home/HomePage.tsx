import {
  Heart
} from "lucide-react"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CustomJumboton } from "@/components/custom/CustomJumboton"
import { HeroStats } from "@/heroes/components/HeroStats"
import { HeroGrid } from "@/heroes/components/HeroGrid"
import { useState } from "react"
import { CustomPagination } from "@/components/custom/CustomPagination"
import { CustomBreadcrums } from "@/components/custom/CustomBreadcrums"



export const HomePage = () => {

  const [activeTab, setActiveTab] = useState <
    'all' |
  'favorites' |
  'heroes' |
  'villains' 
    > ('all');

  return (
    <>
      <>
        {/* Header */}
        <CustomJumboton
          title="Universo de SuperHeroes"
          description="Descubre, explora y administra super heroes y villanos"
        />

        <CustomBreadcrums currentPage="Super Hèroes"/>

        {/* Stats Dashboard */}
        <HeroStats />

        {/* Controls */}


        {/* Advanced Filters */}


        {/* Tabs */}
        <Tabs value={activeTab} className="mb-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger onClick={() => setActiveTab('all')} value="all">All Characters (16)</TabsTrigger>
            <TabsTrigger onClick={() => setActiveTab('favorites')} value="favorites" className="flex items-center gap-2">
              <Heart className="h-4 w-4" />
              Favorites (3)
            </TabsTrigger>
            <TabsTrigger onClick={() => setActiveTab('heroes')} value="heroes">Heroes (12)</TabsTrigger>
            <TabsTrigger onClick={() => setActiveTab('villains')} value="villains">Villains (2)</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all">
            <HeroGrid />
          </TabsContent>
          
          <TabsContent value="favorites">
            <HeroGrid />
          </TabsContent>
          
          <TabsContent value="heroes">
            <HeroGrid />
          </TabsContent>
          
          <TabsContent value="villains">
            <HeroGrid />
          </TabsContent>
        
        </Tabs>

        {/* Character Grid */}
        

        {/* Pagination */}
        <CustomPagination totalPages={8}/>
        
      </>
    </>
  )
}
