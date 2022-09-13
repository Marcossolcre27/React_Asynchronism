import React, {useContext, useState} from "react";
import { useEffect } from "react";
import {ClientsContext} from '../context/ClientsContext';
import { FormContext } from "../context/FormContext";
import { Row } from "./Row";
import {useForm} from 'react-hook-form';
import { getData } from "../services/getData";
const url = 'http://localhost:3000/clientes';



export const Table = () => {
    const {clients} = useContext(ClientsContext);
    
  return (  
      <table className="table-container">
        <thead>
          <tr id="thead">
            <td id="idtd">ID</td>
            <td id="nametd">Nombre</td>
          </tr>
        </thead>
        <tbody id="resultados"> 
          
          { 
              clients.map((client)=>{
                  return(
                      <Row key={client.id} id={client.id} name={client.name}/>
                  )
              })
          }
        </tbody>
      </table>
  );
};


