import React, {useContext} from 'react';
import {ClientsContext} from '../context/ClientsContext';
import {deleteData} from '../services/deleteData';
import { getData } from "../services/getData";
import { updateData } from "../services/updateData";
const url = 'http://localhost:3000/clientes';


export const Row = ({ id, name, nameEdit })=>{
    const {setClients} = useContext(ClientsContext);
    

    const onDelete = async () => {
      deleteData(url, id)
      const data = await getData(url);
      setClients(data)
    };

    const onEdit = async () => {
       updateData(url, id, {name: nameEdit})
       const data = await getData(url);
       setClients(data)
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