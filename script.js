console.log('JS funciona');

//Como rellenar campos en un formulario?
window.addEventListener('load', () => {
  //Una vez cargada la ventana ->
  const submitButton = document.querySelector('#btn'); //'#btn' para el id del boton -- querySelector realiza una consulta al elemento btn
  submitButton?.addEventListener('click', (event) => {
    //Cuando se haga click en el boton ->
    event.preventDefault();
    const nomb = document.querySelector('#nomb').value;
    const apel = document.querySelector('#apel').value; //Conseguir los valores de los espacios
    const mail = document.querySelector('#mail').value;
    const tel = document.querySelector('#tel').value;
    const mensaje = document.querySelector('#mensaje').value;
    if (nomb == '' || apel == '' || mail == '' || mensaje == '' || tel == '') {
      // alert('Rellena los espacios gordito');
      document.querySelector('#error').classList.replace('error', 'show-error');
      document.querySelector('#good').classList.replace('show-good', 'good');
      document.querySelector('#user').classList.replace('UserShow', 'User');
    } else {
      document.querySelector('#error').classList.replace('show-error', 'error');
      document.querySelector('#good').classList.replace('good', 'show-good');
      document.querySelector('#user').classList.replace('User', 'UserShow');
      document.querySelector('#Username').innerHTML = nomb;
      document.querySelector('#Usersurname').innerHTML = apel;
      document.querySelector('#Usermail').innerHTML = mail;
      document.querySelector('#Usertel').innerHTML = tel;
    }
  });

  document.querySelector('#ApiBtn')?.addEventListener('click', getUser);
});

//Como obtener datos mediante una fetch api?

function getUser() {
  fetch('https://randomuser.me/api') //desde esta url
    .then((data) => {
      //prometer q vas a devolver la data
      if (data.ok) return data.json();
      else return null;
    })

    .catch(function (error) {
      document.querySelector(
        '#username'
      ).innerHTML = `Hubo un problema con la petición Fetch: ${error.message})`;
      document.querySelector('#username').classList.replace('User', 'UserShow');
    })

    .then((response) => {
      if (response != null) {
        //transformar la data en respuesta y mostrarla
        const username = response.results[0].name;
        const usermail = response.results[0].email;
        document.querySelector(
          '#username'
        ).innerHTML = `${username.title}. ${username.first} ${username.last}, ${usermail}`;
        document
          .querySelector('#username')
          .classList.replace('User', 'UserShow');
      }
    });
}
