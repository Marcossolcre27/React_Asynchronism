import React, {useRef } from "react";
import { useContext,useEffect } from "react";
import { FormContext } from "../context/FormContext";
import { addData } from '../services/addData';
import {updateData} from '../services/updateData'




const url = 'http://localhost:3000/clientes';


export const Form = ({onSuccsess}) => {
    const input = useRef(null);
    const inputId = useRef(null);
    const {form} = useContext(FormContext);
     const formName = form?.name;
    
    useEffect(()=>{
      input.current.value = form?.name ?? ''
      inputId.current.value = form?.id ?? ''
    },[form])

    
    

    const handleClick = (e)=>{
            e.preventDefault();
            if(input.current.value === ''){
              console.log('Not found');
              return
            }
            if(form.id !== null){
              console.log(formName)
                updateData(url,form.id,form.name)
            }else{
              addData(url,{name:input.current.value})
            }
            if(onSuccsess)
                onSuccsess();
        };


    
        return(
          
            <form id="form">
                <input
                type="text"
                placeholder="inserta un nombre"
                className="name"
                ref={input}
                required
                />
                <input
                  type="text"
                  placeholder="id"
                  className="name"
                  ref={inputId}
                  required
                />
                <button className="btn" type="submit" onClick={handleClick}> 
                Send
                </button>
            </form>
            
        ) 
            
      };
      
    







