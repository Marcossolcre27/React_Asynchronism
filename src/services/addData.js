async function addData(url, newClient){
    const myClient = { method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newClient)
    };

    const response = await fetch(url, myClient);
   

    return response;
}

export {addData}