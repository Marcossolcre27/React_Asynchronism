 async function updateData(url, clientId, updatedData){

    const putOptions = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedData)
    };
    const response = await fetch( `${url}/${clientId}`, putOptions );

    
    return response;
};

export {updateData};
