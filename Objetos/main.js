let usuario = {
    nombre:'Juan',
    apellido:'Perez',
    dni:3367373121,
    correo:{
        gmail:'itscipolletti@gmail.com',
        outlook:'itscipolletti@outlook.com.ar'
    },
    localidad:'Cipolletti'
}

//forma 1
//const gmail = usuario.correo.gmail
//const outlook = usuario.correo.outlook

//forma 2
//Destructig Object
const { gmail, outlook } = usuario.correo

console.log(`
    Apellido: ${usuario.apellido}
    Nombre: ${usuario.nombre}
    Gmail: ${gmail}
    Outlook: ${outlook}
`)