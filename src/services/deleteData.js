async function deleteData(url, clientId){
      

    const deleteOptions = {
        method: 'DELETE',
        headers: { 
            'Authorization': 'Bearer my-token',
            'My-Custom-Header': 'foobar'
        }
    };
   const response = await fetch(`${url}/${clientId}`, deleteOptions);

    return response;
};

export {deleteData};