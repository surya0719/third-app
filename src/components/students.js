import { Button, Card, CardActions, CardContent, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import{data} from "../Data/data"

export function StudentDetail(){

    const [studentsdata,setstudents]=useState(data)
    const[id,setid]=useState("")
    const[name,setname]=useState("")
    const[batch,setbatch]=useState("")
    const[gender,setgender]=useState("")
    const[experience,setexperience]=useState("")
    const[showadd,setshowadd]=useState(true);
    const[showupdate,setshowupdate]=useState(false);
    const[editid,seteditid]=useState("")


 const addnewStudent=()=>{
     const newStudent={
        id,
        name,
        batch,
        gender,
        yearsofexperience : experience
     }
     setstudents([...studentsdata,newStudent])
     setid("")
     setname("")
     setbatch("")
     setgender("")
     setexperience("")
 }; 
 //delete a data
   const deleteStudent=(studeID)=>{
   const removedStudent=studentsdata.filter((stud)=>stud.id!==studeID);
   setstudents(removedStudent)
 } 

 const editandSelectStudent=(idx)=>{
  setshowadd(false);
  setshowupdate(true);
  seteditid(idx);
  const selectData=studentsdata.find(stud=>stud.id===idx);
  setid(selectData.id);
  setname(selectData.name);
  setbatch(selectData.batch);
  setgender(selectData.gender);
  setexperience(selectData.yearsofexperience);
  

 }
 //update function
 const updateStudentData=(idx)=>{
  ///select the student
  const editstudentindex=studentsdata.findIndex((stud)=>stud.id===editid)
  const updatestudobj={
    id,
    name,
    batch,
    gender,
    yearsofexperience:experience
  }
studentsdata[editstudentindex]=updatestudobj;
setstudents([...studentsdata])
     setid("")
     setname("")
     setbatch("")
     setgender("")
     setexperience("")
     setshowadd(true);
  setshowupdate(false);

 }


    return(
        <div className="containers">
            <div className="input-section">
            <TextField 
            fullWidth label="Id"
            onChange={(event)=>setid(event.target.value)}
            value={id}
             id="fullWidth" />

            <TextField 
            fullWidth label="Name"
            onChange={(event)=>setname(event.target.value)}
            value={name}
             id="fullWidth" />

            <TextField 
            fullWidth label="Batch" 
            onChange={(event)=>setbatch(event.target.value)}
            value={batch}
            id="fullWidth" />

            <TextField 
            fullWidth label="Gender" 
            onChange={(event)=>setgender(event.target.value)}
            value={gender}
            id="fullWidth" />

            <TextField
             fullWidth label="Experience"
             onChange={(event)=>setexperience(event.target.value)}
            value={experience}
              id="fullWidth"/>

           {showadd ? <Button variant="outlined" onClick={addnewStudent}>Add Data</Button> :""}
           {showupdate ? <Button variant="outlined" onClick={updateStudentData}>update</Button> :""}
            
                
            </div>
            <div className="card-containers">

            {studentsdata.map((stud,id)=>(

               <Card sx={{ maxWidth: 345 }} key={stud.id} className="card">
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          Name : {stud.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Batch : {stud.batch}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Gender : {stud.gender}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Experience : {stud.yearsofexperience}
                        </Typography>
                    </CardContent>
                    <CardActions>
                    <Button onClick={()=>editandSelectStudent(stud.id)}  variant="outlined">edit</Button>
                    <Button onClick={()=>deleteStudent(stud.id)}  variant="outlined" color="error">delete</Button>
                    </CardActions>
               </Card>

            ))}
            </div> 
       
        </div>
    
    )
}

