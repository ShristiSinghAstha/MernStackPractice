const api=fetch('https://example.org/post').then((res)=>{
    return res.json()}).then((data)=>{
        console.log(data)
    }).catch(error=>{
        console.log(error)
    })
    console.log(api);
