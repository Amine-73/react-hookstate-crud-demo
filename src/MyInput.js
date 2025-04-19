import { useState } from "react";
export default function MyInput(){
    const [AllValueInput,SetAllValueInput]=useState({name:"",email:"",age:"",message:"",isStudent:false,Cauntrie:"",status:""});
    function checkmybox(event){
        SetAllValueInput({...AllValueInput,isStudent:event.target.checked});
    }
    return(
        <form onSubmit={(event)=>{
            event.preventDefault();
            console.log(AllValueInput);
        }} >
            <label>your name: </label>
            <input value={AllValueInput.name} onChange={(event)=>{
                SetAllValueInput({...AllValueInput,name:event.target.value})
            }}/>
            <hr/>
            <label>your email: </label>
            <input value={AllValueInput.email} onChange={(event)=>{
                SetAllValueInput({...AllValueInput,email:event.target.value});
            }}/> 
            <hr/>
            <label>Your age: </label>
            <input type="number" value={AllValueInput.age} onChange={(event)=>{
                SetAllValueInput({...AllValueInput,age:event.target.value});
            }} />
            <hr />
            <label>Are you Student </label>
            <input type="checkbox" checked={AllValueInput.isStudent} onChange={checkmybox}/>
            <hr />
            <label>Your Cauntrie: </label>
            <select value={AllValueInput.Cauntrie} onChange={(event)=>{
                SetAllValueInput({...AllValueInput,Cauntrie:event.target.value})
            }}>
                <option>Morocco</option>
                <option>Egypt</option>
                <option>Usa</option>
            </select>
            <hr />
            <div>
                <input value="Student" type="radio" checked={AllValueInput.status==="Student"} onChange={(event)=>{
                    SetAllValueInput({...AllValueInput,status:event.target.value})} }/>
                Student
                <input value="Teacher" type="radio" checked={AllValueInput.status==="Teacher"}  onChange={(event)=>{
                    SetAllValueInput({...AllValueInput,status:event.target.value})} }/>
                Teacher
            </div>
            <hr />
            <label>Message: </label>
            <textarea onChange={(event)=>{
                SetAllValueInput({...AllValueInput,message:event.target.value})
            }}>
                {AllValueInput.message}
            </textarea>

            <hr />
            <button>Submit</button>
        </form>
    )
}