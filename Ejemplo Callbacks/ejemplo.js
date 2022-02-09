function getUserWithCallback(id, callback) {
    getUser(id, function (user) {
        if (!user)
            return callback(new ApiError('No User Found.'))
        callback(null, user)
    })
}

getUserWithCallback(1, function(err, user) {
    if (err)
        //handle error
    const user = user
})