 async function getData(url){

    try{
        const response = await fetch(url);
        const data = await response.json();
       
        
        return data;
    } 
    catch(e) {
        throw Error(e)  
    }
};

export {getData}