import { React,useState, createContext } from "react";


export const data = createContext();




export default function  Data({children})
{ 

    const [vacancies,setVacancies] = useState((JSON.parse(localStorage.getItem("vacancies")))||[])






return(

    <data.Provider value={[vacancies,setVacancies]}  >

{children}

    </data.Provider>
 
)





}