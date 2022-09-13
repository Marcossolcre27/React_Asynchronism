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
     
     
    useEffect(()=>{
      input.current.value = form?.name ?? ''
      inputId.current.value = form?.id ?? ''
    },[form])

    
    

    const handleClick = (e)=>{
            const inputValue = input.current.value;
            e.preventDefault();
            if(input.current.value === ''){
              console.log('Not found');
              return
            }
            if(form.id !== null){
              
              const formId = form?.id;
              console.log(inputValue)
                updateData(url,{id:formId},{name:inputValue})
            }else{
              addData(url,{name:inputValue})
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
      
    







