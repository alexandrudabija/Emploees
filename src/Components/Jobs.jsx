import "./styleJobs.scss";
import {React,useState,useContext,useRef} from "react";
import {data} from "./Data";
import j1 from "./jobPhotos/j1.jpg";
import j2 from "./jobPhotos/j2.jpg";
import j3 from "./jobPhotos/j3.jpg";
import j4 from "./jobPhotos/j4.jpg";
import j5 from "./jobPhotos/j5.jpg";
import j6 from "./jobPhotos/j6.jpg";
import j7 from "./jobPhotos/j7.jpg";







const a=() =>{ alert("Email sent !")  }



let Title =[" We are looking for Manger", "  we are looking for Bricklayer"," we are looking for engineer developer" ," we are looking for operator"," we are looking for CEO"]
let Position = ["Operator","Manager" ,"Bricklayer","Engineer","CEO"]
let Studies = ["Engineer","Bricklayer","Cambridge University","not have ","Economy University"]
let Salary = ["7000","2000","3000","5000","6000","100000"]
let WorkSchedule = ["Dont Have","1 year","2 years" ,"3 years" ,"4 years" ,"5 years","10 years"]
let img = [j1,j2,j3,j4,j5,j6,j7]
let Location = ["Chisinau","Oradea","Bucuresti","Targul-Mures","Suceava","Vaslui"]
let Phone=["068567133","0782323232","07834343434" ,"023232432423" ,"0798765422" ,"07865482"]
let Email = ["@gmail.com","@mail.ru","@hotmail.com","@google.inc.co.uk","@bk.ru"]
let Wearelookingfor = [' Elaboration of the marketing strategy with the understanding of the consumption behavior and of the conjuncture in the market ',
'- Elaboration and ensuring the realization of the marketing plan within the department',
'- Promoting and increasing the image of companies',' - Establishing, developing and managing the marketing budget ',' Organizing and ensuring the performance of various analyzes in the field of marketing',]
let experience = ["3 year engineer","3 year Bricklayer","1 year CEO","not have ","operator 5 years"]




    

function generateVacancies()
{
    let Vacancies = {

//flor pentru arotungire !
    id:Date.now(),
    Title: Title[Math.floor(Math.random()*Title.length)],
    Salary: Salary[Math.floor(Math.random()*Salary.length)],
    Email : "company"+Email[Math.floor(Math.random()*Title.length)],
    Phone: Phone[ Math.floor(Math.random() * Phone.length )],
    img : img[Math.floor(Math.random() * img.length)],
    Location :Location[Math.floor(Math.random()*Location.length)],
    experience :experience[Math.floor(Math.random()*experience.length)],
    Wearelookingfor :Wearelookingfor[Math.floor(Math.random()*Wearelookingfor.length)],
    Studies: Studies[Math.floor(Math.random()*Studies.length)],
    WorkSchedule:WorkSchedule[Math.floor(Math.random()*WorkSchedule.length)] ,
    Position :Position[Math.floor(Math.random()*Position.length)],

   clickEvent  : a

    
  


}

 return Vacancies;





}






export default function Jobs()

{

    const [vacancies, setVacancies]=  useContext(data);
    let [search,searchinput] =useState([])



   
return (

    <div className="container ">




    <div >

 <button className="btn btn-outline-primary" onClick={()=>{

setVacancies([...vacancies,generateVacancies()])
localStorage.setItem("vacancies",JSON.stringify(vacancies))

 }}   style={{width: "200px"}}>Generate Vacancies </button>

       <button     style={{width: "200px"}}
        onClick= {
            
                     ()=>{  setVacancies([]) ;  localStorage.setItem("vacancies",JSON.stringify([])) } 
    
    
                 }  className="btn btn-outline-danger m-4 "  >Clear Vacancies 
        
        
        
        </button>

        <  input type="text" className="form-control p-5 " 
        placeholder=" For Filtering You can enter Salary, Location or Position "

        onChange={
            (e)=>{ searchinput(e.target.value);  }
                }
        
            />
 



    </div>

    { vacancies.length> 0 ?  (  vacancies.filter((val)=>
                {
                   if (search == "")

                    {return val;}





else if ( val.Location.toLowerCase().includes(search.toLowerCase()) ||
val.Salary.toLowerCase().includes(search.toLowerCase()) ||
val.Position.toLowerCase().includes(search.toLowerCase()))
        {



        return val ;


        }

        }



        ).map((item,index) => {


return (<div  style={{marginTop :"120px" , border :"double" ,borderColor:"gray" , display:"flex" ,flexDirection:"column" ,alignItems:"center" ,justifyContent:"center" }} key={index}>




    <h1 >{item.Title}</h1>
    <h3   style={{marginTop :"20px" }}> Position :   {item.Position} </h3>
    <h3 style={{marginTop :"20px" }}> Studies :  {item.Studies}</h3>
    <h3 style={{marginTop :"20px" }}> Salary : {item.Salary}</h3>
    <h3 style={{marginTop :"20px" }}> WorkSchedule : {item.WorkSchedule}</h3>
    <h3 style={{marginTop :"20px" }}> Location : {item.Location}</h3>
    <h3 style={{marginTop :"20px" }}> Phone : {item.Phone}</h3>
    <h3 style={{marginTop :"20px" }}> Email : {item.Email}</h3>
    <h3 style={{marginTop :"20px" }}> Experience : {item.experience}</h3>
    <p style={{marginTop :"20px" ,width:"370px", height:"140px" }} > <h3 style={{padding:"20px"}}> Wearelookingfor : </h3>  {item.Wearelookingfor}</p>
    <img src={item.img}  style={{padding:"2px",

borderRadius :"20px"}}  width={680} height={320}/>
    <button style={{marginTop :"20px" , marginBottom:"20px" }} onClick={()=>{item.clickEvent()}} className="btn btn-outline-danger"> Contact Us</button>




</div>)







}))       : (<h1 style={{display :"flex"  ,justifyContent :"center"  ,alignItems:"center" ,height:"500px"   
              }}>NO HAVE VACANCIES</h1>)

}
 




            

</div> ) }            