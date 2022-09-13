import React, {useRef } from "react";
import { useState } from "react";
import { addData } from '../services/addData';


const url = 'http://localhost:3000/clientes';


export const Form = ({onSuccsess}) => {
    const input = useRef(null);
    const [nameEdit, setNameEdit] = useState('');
    

    const handleClick = (e)=>{
            e.preventDefault();
            if(input.current.value === ''){
              console.log('Not found');
              return
            }
            addData(url,{name:input.current.value})
            if(onSuccsess)
                onSuccsess();
        };

        const handleName = (e)=>{
          setNameEdit(
           input.current.value
          )
        };

    
        return(
            <form id="form">
                <input
                type="text"
                placeholder="inserta un nombre"
                className="name"
                ref={input}
                onChange={handleName}
                required
                />
                <button className="btn" type="submit" onClick={handleClick}> 
                Send
                </button>
            </form>
        ) 
            
      };
      
    







