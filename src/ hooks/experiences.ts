import { useQuery } from "@tanstack/react-query"
import api from "../axios"
import {Experience} from "../types"




const fetchExperiences = async ():Promise<Experience[]> => {
    
    const { data } = await api.get<Experience[]>("/experiences")
    return data
}


const useExperience =() => {

    return useQuery({
        queryKey: ["Experiences"],
        queryFn:fetchExperiences
    })
}
    
export  {useExperience}






export default useExperience