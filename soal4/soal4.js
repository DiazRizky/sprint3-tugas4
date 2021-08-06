function login (email, password) {
    const user = 'diazrizkydiazrizky@gmail.com'
    const pass = 'semangatt1234'
    function goHome () {
        console.log ('Selamat Datang Diaz');
    }
    function backLogin () {
        console.log('Login Gagal');
    }
    if (email == user && password == pass) {
        return goHome ()
    } else if (email != user || password != pass) {
        return backLogin ()
    } else if (email != user && password != pass) {
        return backLogin ()
    } else {
        console.log('Anda tidak terdaftar');
    }
}
 let email2 = prompt ('Masukkan Email :')
 let password2 = prompt ('Masukkan Password :')

 login (email2, password2)