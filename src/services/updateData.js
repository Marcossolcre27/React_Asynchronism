    async function updateData(url, {id}, newName){

    const putOptions = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newName)
    };
    const response = await fetch( `${url}/${id}`, putOptions );

    
    return response;
};

export {updateData};
