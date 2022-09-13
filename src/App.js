import React , { useState , useEffect, } from 'react';
import { Table } from './components/Table';
import { ClientsContext } from './context/ClientsContext';
import { FormContext } from './context/FormContext';
import { getData } from './services/getData';
import {Form} from './components/Form'
const url = 'http://localhost:3000/clientes';


function App() {

    const [clients, setClients] = useState([]);
    const [form, setForm] = useState();
 

   const clientsdata = async()=>{
      const data = await getData(url);
      
      setClients(data)
    }
  
  


    useEffect(()=>{
      clientsdata();
    }, [])

    const onSuccsess = ()=>{
      clientsdata();
    }

  return (
    <ClientsContext.Provider value={{clients, setClients}}>
      <div className="main-container">
        <h1 className="title">List with Asynchronsim</h1>
        <FormContext.Provider value={{form, setForm}}>
          <Form onSuccsess={onSuccsess} />
          <Table/>
        </FormContext.Provider>
      </div>
    </ClientsContext.Provider>
  );
}

export default App;
