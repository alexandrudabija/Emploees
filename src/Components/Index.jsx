import "./styleMain.scss";
import {React,useState,useContext,useRef} from "react";

import {data} from "./Data";
import { Employees } from "./DataEmployees";
import u1 from "./u1.jpg";
import u2 from "./u2.jpg";
import u3 from "./u3.jpg";
import u4 from "./u4.jpg";
import u5 from "./u5.jpg";
import j1 from "./jobPhotos/j1.jpg";
import j2 from "./jobPhotos/j2.jpg";
import j3 from "./jobPhotos/j3.jpg";
import j4 from "./jobPhotos/j4.jpg";
import j5 from "./jobPhotos/j5.jpg";
import j6 from "./jobPhotos/j6.jpg";
import j7 from "./jobPhotos/j7.jpg";

let img = [u1 ,u2,u3,u4,u5]
let img2 = [j1,j2,j3,j4,j5,j6,j7]

//for show and hide 



const a=() =>{ alert("Email sent !")  }
export default function Main()

{

const [show, setShow]=useState(true)
const [show1, setShow1]=useState(false)




const [employees,SetEmployees] = useContext(Employees)

const [name,SetName]=useState()
const [lastName,SetlastName]=useState()
const [email,Setemail]=useState()
const [age,Setage]=useState()
const [location,Setlocation]=useState()
const [experience,Setexperience]=useState()
const [Workfunction,SetWorkfunction]=useState()

let nameinput = useRef()
let lastinput = useRef()
let emailinput = useRef()
let ageinput = useRef()
let locationinput = useRef()
let experienceinput = useRef()
let Workfunctioninput = useRef()

let vac = useRef()

const [errorMessage0, SetErrorMessage0]=useState("");
    
const [successMessage0, SetSuccessMessage0]=useState("");




function addEmployees() {

    if(nameinput.current.value.length >3 && lastinput.current.value.length  >3 && emailinput.current.value.length>7 
        && ageinput.current.value.length > 1 &&locationinput.current.value.length > 3 
         && experienceinput.current.value.length>6  && Workfunctioninput.current.value.length>6 )
    {

{nameinput.current.style.border="2px solid green"
lastinput.current.style.border="2px solid green"
emailinput.current.style.border="2px solid green"
ageinput.current.style.border="2px solid green"
locationinput.current.style.border="2px solid green"
experienceinput.current.style.border="2px solid green"
Workfunctioninput.current.style.border="2px solid green"}

let Employees = {


   
        id:Date.now(),
        name: name,
        lastName: lastName,
        email :  email,
        age:  age,
        img :   img[Math.floor(Math.random() * img.length)],
        location : location,
        experience :experience,
        Workfunction : Workfunction,
        clickEvent  : a
    
        

    
    
    }
SetSuccessMessage0("Successfully add Curriculum ")
SetErrorMessage0("")
return Employees  ;

}

else 
{
    SetSuccessMessage0("")
    SetErrorMessage0("Something went wrong")
    {nameinput.current.style.border="2px solid red"
    lastinput.current.style.border="2px solid red"
    emailinput.current.style.border="2px solid red"
    ageinput.current.style.border="2px solid red"
    locationinput.current.style.border="2px solid red"
    experienceinput.current.style.border="2px solid red"
    Workfunctioninput.current.style.border="2px solid red"}

}


}



//ca sa nu trimitem un null in  tabloul de employes   si sa na nu poata citi obiectul  
function verify()
{

    if(nameinput.current.value.length >3 && lastinput.current.value.length  >3 && emailinput.current.value.length>7 
        && ageinput.current.value.length > 1 &&locationinput.current.value.length > 3 
         && experienceinput.current.value.length>3  && Workfunctioninput.current.value.length>3 )
    {
   SetEmployees([...employees,addEmployees()]); localStorage.setItem("employees",JSON.stringify(employees)); 
}


}




    //the object
        const [vacancie,setVacancie]=  useState({
    
    id:"",
    Title:"",
    Position : "",
    Studies : "",
    Salary: "",
    WorkSchedule: "",
    Location: "",
    Phone: "",
    Email: "",
    experience : "",
    Wearelookingfor: "",
    img: img2[Math.floor(Math.random() * img2.length)],
    clickEvent  : a
    
    
        })



    //the array
        const [vacancies, setVacancies]=  useContext(data);
    
        const [errorMessage, SetErrorMessage]=useState("");
    
    const [successMessage, SetSuccessMessage]=useState("");
    
    
        function addJob ()
        {
            if(vacancie.Title.length>4 && vacancie.Position.length>3 && vacancie.Studies.length>5  &&
                vacancie.Salary.length>3 && vacancie.WorkSchedule.length >3 && vacancie.Location.length>3  &&vacancie.Phone.length>8 &&
                vacancie.Email.length>7 &&  vacancie.Wearelookingfor.length>30  )
                
           {
            setVacancie({...vacancie, id: Date.now()});
            
                setVacancies([...vacancies,vacancie]);
              
                localStorage.setItem("vacancies",JSON.stringify(vacancies))
              
                vac.style.border="2px solid green";
                SetSuccessMessage(" Vacancie created successfuly ");
                SetErrorMessage("");
    
               }
               // document.getElementById("form").reset();   fa vii resetat formularul cu tot ce are inauntru
    
                else {
                    SetErrorMessage("Something went wrong")
                    SetSuccessMessage("")
                    vac.current.style.border="2px solid red";
    
                }
    
    
    
        }
       
     
    
    return (
    
        <div className="container">

    <div style={{ display :"flex"  ,justifyContent :"center"  ,margin:"30px"   }}>   
       
     <button      onClick={()=>{setShow(true)   ;    setShow1(false) ;       }}     style={{marginRight:"30px"}} className="btn btn-outline-primary">Insert Vacation</button>
    <button    onClick={()=>{setShow(false)   ;    setShow1(true) ;    }}  className="btn btn-outline-success" >Insert Employees</button>
    </div>
    {/* nameinput.current.focus(); */}
    {show ?<div  className="container">


    <form  id="form1"  ref={vac} className="form-control" onSubmit={(e)=>{e.preventDefault();  addJob();   }      }  >
    <h1>Find Staff</h1>
    <label style={{  width: "400px"}} htmlFor="Title">Title</label>
    <input placeholder=""   maxLength = "20"  name="Title" className="form-control" type="text" style={{  width: "400px"}} onChange={(e)=>{ setVacancie({...vacancie,Title: e.target.value})}} />
    <label  htmlFor="Position" style={{  width: "400px"}}>Position</label>
    <input   maxLength = "20" name="Position" className="form-control" type="text"  style={{  width: "400px"}}  onChange={(e)=>{ setVacancie({...vacancie,Position: e.target.value})}}/>
    <label  htmlFor="Studies" style={{  width: "400px"}}>Studies</label>
    <input  ref={vac} maxLength = "20"  name="Studies" className="form-control"type="text"  style={{  width: "400px"}}  onChange={(e)=>{ setVacancie({...vacancie,Studies: e.target.value})}}/>
    <label htmlFor="Salary" style={{  width: "400px"}} >Salary</label>
    <input  ref={vac} maxLength = "20"style={{  width: "400px"}} name="Salary" className="form-control" type="text"   onChange={(e)=>{ setVacancie({...vacancie,Salary: e.target.value})}} />
    <label  style={{  width: "400px"}} htmlFor="WorkSchedule">WorkSchedule</label>
    <input ref={vac}  maxLength = "20"name="WorkSchedule" className="form-control" type="text" style={{  width: "400px"}}  onChange={(e)=>{ setVacancie({...vacancie,WorkSchedule: e.target.value})}}/>
    <label style={{  width: "400px"}} htmlFor="Location">Location</label>
    <input ref={vac}  maxLength = "20" name="Location"  className="form-control" type="text" style={{  width: "400px"}}  onChange={(e)=>{ setVacancie({...vacancie,Location: e.target.value})}}/>
    <label style={{  width: "400px"}} htmlFor="Phone">Phone</label>
    <input ref={vac} maxLength = "20" name="Phone" className="form-control" type="text"  style={{  width: "400px"}} onChange={(e)=>{ setVacancie({...vacancie,Phone: e.target.value})}}/>
    <label style={{  width: "400px"}} htmlFor="Email">Email</label>
    <input ref={vac} maxLength = "20" name="Email" className="form-control"type="text"  style={{  width: "400px"}} onChange={(e)=>{ setVacancie({...vacancie,Email: e.target.value})}} />
   
    <label style={{  width: "400px"}} htmlFor="experience">Experience</label>
    <input ref={vac} maxLength = "20" name="experience" className="form-control"type="text"  style={{  width: "400px"}} onChange={(e)=>{ setVacancie({...vacancie,experience: e.target.value})}} />
   
    <label style={{  width: "400px"}} htmlFor="Wearelookingfor">Wearelookingfor</label>
    <textarea ref={vac}  maxLength = "200"  style={{  width: "400px"  }}  className="form-control" name="Wearelookingfor"  cols="20" rows="50"  onChange={(e)=>{ setVacancie({...vacancie,Wearelookingfor: e.target.value})}} ></textarea>

    <button  className="btn btn-danger m-4">Create Vacantion</button>
    
        <h1 style={{color: "green" ,display :"flex"  ,justifyContent :"center"  ,alignItems:"center"}} >{successMessage}</h1>
    <h1 style={{color: "red"  ,display :"flex"  ,justifyContent :"center"  ,alignItems:"center"}} >{errorMessage}</h1>

    
   
    </form>


    </div> : null
        }
    

    
{ show1 ?   <div className="container">

<form  id="form" className="form-control " onSubmit={(e)=>{   e.preventDefault();  addEmployees();   verify();

}      }  >
<h1>Find Job</h1>
<label style={{  width: "400px"}} htmlFor="name">Name</label>
<input maxLength = "15"  name="name" className="form-control" type="text" style={{  width:"400px"}} onChange={(e)=>{ SetName( e.target.value)}} ref={nameinput} defaultValue={null} />
<label htmlFor="lastName" style={{  width: "400px"}}>LastName</label>
<input maxLength = "15" name="lastName" className="form-control" type="text"  style={{  width:"400px"}}  onChange={(e)=>{ SetlastName( e.target.value)} }  ref={lastinput}/>
<label htmlFor="email" style={{  width: "400px"}}>email</label>
<input maxLength = "20" name="email" className="form-control"type="text"  style={{  width:"400px"}}  onChange={(e)=>{ Setemail( e.target.value)}} ref={emailinput}/>
<label htmlFor="age" style={{  width: "400px"}} >Age</label>
<input maxLength = "12"  style={{  width: "400px"}} name="age" className="form-control" type="text"   onChange={(e)=>{ Setage( e.target.value)}} ref={ageinput}/>
<label  style={{  width: "400px"}} htmlFor="location">WorkSchedule</label>
<input maxLength = "15" name="location" className="form-control" type="text" style={{ width:"400px"}}  onChange={(e)=>{ Setlocation( e.target.value)}} ref={locationinput}/>
<label style={{  width: "400px"}} htmlFor="experience">Experience</label>
<input maxLength = "15"  name="experience"  className="form-control" type="text" style={{ width:"400px"}}  onChange={(e)=>{ Setexperience( e.target.value)}} ref={experienceinput}/>
<label style={{  width: "400px"}} htmlFor="Workfunction">Workfunction</label>
<input maxLength = "20" name="Workfunction" className="form-control" type="text"  style={{ width:"400px"}} onChange={(e)=>{ SetWorkfunction( e.target.value)}} ref={Workfunctioninput}/>

    <button  className="btn btn-danger m-4">Create Curriculum</button>


<h1 style={{color: "red" ,display :"flex"  ,justifyContent :"center"  ,alignItems:"center" }} >{errorMessage0}</h1>
    <h1 style={{color: "green" ,display :"flex"  ,justifyContent :"center"  ,alignItems:"center"}} >{successMessage0}</h1>
    
</form>





</div>   : <div style={{height:"100px"}}></div> }
    
    </div> ) }