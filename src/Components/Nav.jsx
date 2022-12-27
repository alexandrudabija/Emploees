import "./styleNav.scss";
import { Link } from "react-router-dom";
import {  GoHome} from "react-icons/go";
import { IoPeopleOutline } from "react-icons/io5";
import { VscOpenPreview } from "react-icons/vsc";
import {  useState, useRef} from "react";




  
export default function Nav()
{ 
  const list = document.querySelectorAll('.list')
list.forEach((item) => {  item.addEventListener('click',activelink)})
  






let [values, SetValues] =useState()
let location = useRef()
let [a, setA]=useState(false)
let [mes,Setmess]=useState("Enter City")


// useEffect (()=>{

//     getweather();

//       })
      












async function getweather(loc)
{
 
 if( localStorage.getItem(values))
 {

 SetValues(JSON.parse(localStorage.getItem("response")))

 }

 else 
 {
 
 const api = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=1e38b1f330b8744499ab579723b7cede`)
 const response = await api.json();



 if (!api.ok)
 {
 

Setmess("error Enter ") 
setA(false)
 }

else
{ 
   
 localStorage.setItem("response",JSON.stringify(response))
 
 SetValues(response)
setA(true)
}




 
 }
 
 
 
    } 
 





   
     function activelink()
        {
        
    
        list.forEach((item) => 
        
    
        item.classList.remove('active'));
        
    
    
        this.classList.add('active');
        
    
        
        }
    
    
    
        // getweather("Chisinau")
 




 
      
   
return (
<div className="nav">


   
<div className="navigation">

   <ul> 




    <li className="active list"  >

        <Link to="./"  > 
        <GoHome className="icons"  />

        <span className="text">  Main</span>

       </Link>



       
    </li>






        
        <li  className="list"  >    

            <Link to="/Employees" >
                <IoPeopleOutline className="icons"   />
                <span className="text">  Find Employees</span>
                
            
            </Link>
    </li>




 
    <li   className="list" >

            <Link to="/Jobs" > 

        <VscOpenPreview className="icons"  />

            <span className="text">  Find Jobs</span>
            
            


                </Link>

        </li>


 <div className="indicator">   </div>

    </ul>
        <div id="weather" 
        
        className="bg-light" >
            
    <h6 className="mt-2">Insert Your Location to see weather</h6>




        <div>

<input className="form-control" type="text" onKeyDown={(e)=>{  if (e.key === 'Enter') { location=e.target.value; getweather(location);}}  }   /> 

      {/* <button onClick={()=>{}}>select</button> */}
      </div>






{  a  ?   <div  className="d-flex m-3">
    <h6 className="m-2">
 {parseInt(values.main.temp - 273.15)} Celsius </h6>
  <h6 className="m-2"> {  values.name  } </h6>   
  <h6 className="m-2"> {  values.weather[0].main   } </h6>                           
   <h6 className="m-2">{ values.sys.country    } </h6>   
    
    </div>  :  <h5 className="mt-2">{mes}</h5>
     }
  


                         

    </div>
    </div>









</div>

)



}