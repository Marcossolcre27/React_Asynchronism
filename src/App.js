import React , { useState , useEffect, useRef} from 'react';
import { Table } from './components/Table';
import { ClientsContext } from './context/ClientsContext';
import { getData } from './services/getData';
import { addData } from './services/addData';
const url = 'http://localhost:3000/clientes';


function App() {


  const [clients, setClients] = useState([]);
  const [change, setChange] = useState('');
  const input = useRef(null);

  const handleClick = (e)=>{
    e.preventDefault();
    addData(url,{name:change})
    const clientsdata = async()=>{
      const data = await getData(url);
      
      setClients(data)
    }
    clientsdata();
  
  };
  const handleChanege = ()=>{
    setChange(input.current.value);
  };

  useEffect(()=>{
    const clientsdata = async()=>{
      const data = await getData(url);
      
      setClients(data)
    }
    clientsdata();
  }, [])

 
  return (
    <ClientsContext.Provider value={{clients, setClients}}>
      <div className="main-container">
        <h1 className="title">List with Asynchronsim</h1>
        <form id="form">
          <input
            type="text"
            placeholder="inserta un nombre"
            className="name"
            ref={input}
            onChange={handleChanege}
            required
          />
          <button className="btn" type="submit" onClick={handleClick}>
            Send
          </button>
        </form>
        <Table change={change}/>
      </div>
    </ClientsContext.Provider>
  );
}

export default App;
