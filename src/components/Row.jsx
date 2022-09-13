import React, {useContext} from 'react';
import {ClientsContext} from '../context/ClientsContext';
import {FormContext} from '../context/FormContext';
import {deleteData} from '../services/deleteData';
import { getData } from "../services/getData";
const url = 'http://localhost:3000/clientes';


export const Row = ({ id, name })=>{
    const {setClients} = useContext(ClientsContext);
    const {setForm} = useContext(FormContext);


    const onDelete = async () => {
      deleteData(url, id)
      const data = await getData(url);
      setClients(data)
    };

    const onEdit =()=>{
        setForm({id,name})
    }
    
    return(
            <tr>
                <td>{id}</td>
                <td>{name}</td>
                <td><span onClick={onDelete} className="tash">delete</span></td>
                <td><span onClick={onEdit} className="edit">edit</span></td>
            </tr>
        
    );
};