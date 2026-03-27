
//standard packages

//third party packages
import { useQuery } from "@tanstack/react-query";

//local packages 

import api from "../axios";

async function fetchProjects() {
        const {data} = await api.get("/projects")
       return data
}

function useProjects() {
    
    return useQuery({
        queryKey: ["projects"],
        queryFn:fetchProjects
    }
        
    )
}

export {useProjects}