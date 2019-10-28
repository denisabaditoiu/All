 function authenticate(user, password, callback) {
     setTimeout(() => {
        const payload = {
            data: {},
            error: null
        };
        if(user === 'admin' && password === 'P@ssw0rd') {
            payload.data.authentication_token = 'SOME_SECRET_TOKEN',
            payload.data.expire_time = 1999;
            payload.data.roles = 'ADMIN'
            callback(payload.error, payload.data);
        } else {
            payload.error = "Invalid credentials";
            callback(payload.error, payload.data);
        }
     }, 2000);
     
 }

 function redirectUser(userData, path, callback) {
    const payload = {
        data: null,
        error: null
    };
    if(!userData.roles) {
        payload.error = 'Not authorized';
    } else {
        if(path.includes('admin') && userData.roles === 'ADMIN') {
            payload.data = 'Hello admin';
        } else {
            payload.data = `Welcome user`;
        }
    }
    callback(payload.error, payload.data);
 }

 authenticate('admin', 'P@ssw0rd', (err, data) => {
    if(err) throw err;
    const userData = {...data};
    redirectUser(userData, '/admin/home', (err, data) => {
        if(err) throw err;
        alert(data);
    });
 })