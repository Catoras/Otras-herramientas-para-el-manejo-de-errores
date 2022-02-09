net.createServer(socket => {
    socket
        .on('data', data => {})
        .on('end', result =>{})
        .on('error', console.error)//handle multiple errors
})