function authenticate(username, password) {
    return new Promise((resolve, reject) => {
        const payload = {
            data: {},
            error: null
        }
        setTimeout(() => {
            if(username === 'admin' && password === 'P@ssw0rd') {
               payload.data.authentication_token = 'RANDOM_SECRET';
               payload.data.expire_time = 19999;                 
               payload.data.roles = 'ADMIN';
               resolve(payload.data);
            } else {
                reject('Unauthorized');
            }
        }, 5000)
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

authenticate('admin', 'P@ssw0rd').then(userData => {
    redirectUser(userData, 'admin/home').then(msg => {
        alert(msg);
    })
});