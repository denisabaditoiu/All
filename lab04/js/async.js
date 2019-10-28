function authenticate(username, password) {
    return new Promise((resolve, reject) => {
        const payload = {
            data: {},
            error: null
        };
        setTimeout(() => {
            if(username === 'admin' &&  password === 'P@ssw0rd') {
                payload.data.authentication_token = 'SECRET_TOKEN';
                payload.data.expire_time = 19999;
                payload.data.roles = 'ADMIN';
                resolve(payload.data);
            } else {
                payload.error = 'Unauthorized';
                reject(payload.error);
            }
        }, 3000)
    })
}

function redirectUser(userData, path) {
    return new Promise((resolve, reject) => {
        if(!userData.roles) {
            reject('Unauthorized');
        } else {
            if(path.includes('admin')) {
                resolve('Welcome admin');
            } else {
                resolve('Welcome user');
            }
        }
    })
}


(async function() {
    const userData = await authenticate('admin', 'P@ssw0rd');
    const message = await redirectUser(userData, '/admin/home');
    alert(message);
}())