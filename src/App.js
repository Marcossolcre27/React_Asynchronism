import React , { useState , useEffect, } from 'react';
import { Table } from './components/Table';
import { ClientsContext } from './context/ClientsContext';
import { getData } from './services/getData';
import {Form} from './components/Form'
const url = 'http://localhost:3000/clientes';


function App() {

  const [clients, setClients] = useState([]);
  const [nameEdit, setNameEdit] = useState('');

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
        <Form onSuccsess={onSuccsess}/>
        <Table/>
      </div>
    </ClientsContext.Provider>
  );
}

export default App;
