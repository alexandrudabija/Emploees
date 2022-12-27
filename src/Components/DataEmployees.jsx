import {React, createContext,useState} from "react";


export const Employees = createContext();

export default  function DataEmployees({children})
{
    const [employees,Setemployees]=useState((JSON.parse(localStorage.getItem("employees")))||[]);



return (

<Employees.Provider value={[employees,Setemployees]}>

{children}

</Employees.Provider>

)

}


