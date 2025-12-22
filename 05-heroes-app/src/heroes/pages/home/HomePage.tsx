import {
  Heart,
  ChevronLeft,
  ChevronRight,
  MoreHorizontal,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CustomJumboton } from "@/components/custom/CustomJumboton"
import { HeroStats } from "@/heroes/components/HeroStats"
import { HeroGrid } from "@/heroes/components/HeroGrid"
import { useState } from "react"



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
        <div className="flex items-center justify-center space-x-2">
          <Button variant="outline" size="sm" disabled>
            <ChevronLeft className="h-4 w-4" />
            Previous
          </Button>

          <Button variant="default" size="sm">
            1
          </Button>
          <Button variant="outline" size="sm">
            2
          </Button>
          <Button variant="outline" size="sm">
            3
          </Button>
          <Button variant="ghost" size="sm" disabled>
            <MoreHorizontal className="h-4 w-4" />
          </Button>

          <Button variant="outline" size="sm">
            Next
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </>
    </>
  )
}
