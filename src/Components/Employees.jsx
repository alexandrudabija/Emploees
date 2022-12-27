import "./styleEmployes.scss";
import {React,useContext,} from "react";
import {Employees} from "./DataEmployees";
import {motion} from "framer-motion";
import {HiOutlineChevronLeft ,HiOutlineChevronRight} from "react-icons/hi";
import u1 from "./u1.jpg";
import u2 from "./u2.jpg";
import u3 from "./u3.jpg";
import u4 from "./u4.jpg";
import u5 from "./u5.jpg";





const a=() =>{ alert("Email sent !")  }



let names =["Alexandru", "George","Florin" ,"Eduard","Ovidiu"]
let lastNames = ["Dabija","Covesi" ,"Toporas","Moldoveanu","Adreusi"]
let domains = ["@gmail.com","@mail.ru","@hotmail.com","@google.inc.co.uk","@bk.ru"]
let location = ["Chisinau","Oradea","Bucuresti","Targul-Mures","Suceava","Vaslui"]
let experience = ["Dont Have","1 year","2 years" ,"3 years" ,"4 years" ,"5 years","10 years"]
let img = [u1 ,u2,u3,u4,u5]
let Workfunction=["Engineer","Construction Engineer","C ++ developer (Junior)" ,"Java developer(Midle)" ,"PHP developer (senior)" ,"Bricklayer"]




    

function generateEmployees()
{
    let Employees = {

//flor pentru arotungire !
    id:Date.now(),
    name: names[Math.floor(Math.random()*names.length)],
    lastNames: lastNames[Math.floor(Math.random()*lastNames.length)],
    email : names[Math.floor(Math.random()*names.length)]+lastNames[Math.floor(Math.random()*lastNames.length)]+domains[Math.floor(Math.random()*domains.length)],
    age: Math.floor(Math.random() * (60-18) + 18 ),
    img : img[Math.floor(Math.random() * img.length)],
    location :location[Math.floor(Math.random()*location.length)],
    experience :experience[Math.floor(Math.random()*experience.length)],
    Workfunction :Workfunction[Math.floor(Math.random()*Workfunction.length)],
   clickEvent  : a

    
}

 return Employees;



}


      



export default function  Employes()
{  
   


  
    // (JSON.parse(localStorage.getItem("employes")))||
  
// in DataEmployes save a arrays
  const [employees,Setemployees]= useContext(Employees)  



const slideLeft = () => {

var slider = document.getElementById("sliders")
slider.scrollLeft=slider.scrollLeft-500;
}

const slideRight = () => {

    var slider = document.getElementById("sliders");
    slider.scrollLeft=slider.scrollLeft+500;
    }
//doar scrollLeft ,pentru ca dreapta  nu are !







return (
 
<motion.div className="firstMain"  animate={{y:+5}}   >

<div className="Buttons">


<button  className="btn btn-outline-primary"  onClick= {

          ()=>{ 
          
            Setemployees([...employees, generateEmployees()]) 
     
        localStorage.setItem("employees",JSON.stringify(employees))


          }             
          
          } >Create Employes</button>


<button  onClick={()=>{Setemployees([]);
localStorage.setItem("employees",JSON.stringify([]))
}


}  className="btn btn-outline-primary" >Clear Employes</button>



</div>






<div id="body">






    
    <div id="main-slider-container"> 




<HiOutlineChevronLeft  size={40} className="slider-icon left"  onClick={slideLeft}/>


<div id="sliders"  style={{padding:"2px"}}>
{

employees.length != 0 ? (employees.map((employee,index)  =>
{
    

return (

    
    

 <div  style={{padding:"16px"}}   key={employee.id} id="slider-card"> 

{/* <h6>index {index}</h6> */}
<h6>Name: {employee.name}</h6>
<h6>Lastname: {employee.lastNames}</h6>
<h6>Email : {employee.email}</h6>
<h6>Age : {employee.age}</h6>
<h6>Location : {employee.location}</h6>
<h6>Workfunction : {employee.Workfunction}</h6>
<h6>experience : {employee.experience}</h6>

<img  animate={{y:+15}}   src={employee.img} style={{padding:"10px",

  borderRadius :"20px"}}  width={380} height={300}  />  

<button  onClick={ () =>{ employee.clickEvent()}} animate={{y:+5}}className="btn btn-outline-danger m-3"      >Contact Him</button>

</div>

           
        
        ) //} 
      } )
    
        
        ) : (<h1>No have Employees</h1>)
       


}

</div>

<HiOutlineChevronRight  size={40}    className="slider-icon right" onClick={slideRight}/>
</div>


    </div>





</motion.div>

)



}