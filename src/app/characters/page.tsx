import axios from "axios"
import { baseUrl } from "@/constants"
import { CharactersInterface } from "../model"
import Dashboard from "../dashboard/page"

export const getCharacters = async () =>{
    try{
        const response = await axios(`${baseUrl}/characters`)
       
        return response.data
    }
    catch(error){
        throw error
    }

}
export default async function Characters(){
    const charactersList:CharactersInterface[] = await getCharacters()
    return <div>
         <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:gap-4">
            {charactersList.map((character) =>{
                console.log(character)
                return (
                    <Dashboard key={character.id} character={character}/>
                )
            })}
         </div>
    </div>
}