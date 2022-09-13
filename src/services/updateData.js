 async function updateData(url, clientId, newName){

    const putOptions = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newName)
    };
    const response = await fetch( `${url}/${clientId}`, putOptions );

    
    return response;
};

export {updateData};
