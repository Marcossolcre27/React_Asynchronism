import React, {useContext} from "react";
import {ClientsContext} from '../context/ClientsContext';
import {deleteData} from '../services/deleteData';
import { getData } from "../services/getData";
import { updateData } from "../services/updateData";
const url = 'http://localhost:3000/clientes';






const Row = ({ id, name, change })=>{
    const {setClients} = useContext(ClientsContext);
    

    const onDelete = ()=>{
      deleteData(url, id)
      const clientsdata = async()=>{
        const data = await getData(url);
        
        setClients(data)
      }
      clientsdata();
    };

    const onEdit = ()=>{
       updateData(url, id, {name: change})
      
      const clientsdata = async()=>{
        const data = await getData(url);
        
        setClients(data)
      }
      clientsdata();
    };
    
    return(
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td><span onClick={onDelete} className="tash">delete</span></td>
            <td><span onClick={onEdit} className="edit">edit</span></td>
        </tr>
    );
};

export const Table = ({change}) => {
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
                    <Row change={change} key={client.id} id={client.id} name={client.name}/>
                )
            })
        }
      </tbody>
    </table>
  );
};


