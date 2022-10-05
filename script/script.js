let nombre, apellido, usuario, email, direccion, ciudad 

let formulario = document.getElementById('formulario')

formulario.addEventListener('submit', (e) => {
    e.preventDefault()
    LeerData()
})

function LeerData() {
    nombre = document.getElementById('firstName').value
    apellido = document.getElementById('lastName').value
    usuario = document.getElementById('username').value
    email = document.getElementById('email').value
    direccion = document.getElementById('address').value
    ciudad = document.getElementById('country').value

 GuardarLocalStorage(nombre, apellido, usuario, email, direccion, ciudad) 

}

function GuardarLocalStorage(nombre, apellido, usuario, email, direccion, ciudad){
    localStorage.setItem('nombre', nombre)
    localStorage.setItem('apellido', apellido)
    localStorage.setItem('usuario', usuario)
    localStorage.setItem('email', email)
    localStorage.setItem('direccion', direccion)
    localStorage.setItem('pais', ciudad)

    ExtraerData()
}

function ExtraerData(){
    let nom = localStorage.getItem('Nombre')
    alert('Bienvenido', nom)
}