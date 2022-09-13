import React, {useContext} from "react";
import {ClientsContext} from '../context/ClientsContext';
import { Row } from "./Row";



export const Table = ({children}) => {
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


