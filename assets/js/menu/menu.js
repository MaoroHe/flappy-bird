import { readForm } from "../formRead/formRead";

export let menu = () => {
  document.body.innerHTML = `<div class='menu'>
  <span id="close">&times;</span>
  <form class='form'>
  <h1 id='titleM'>Welcome to Flappy Bird</h1>
  <input type='text' placeholder='username' id='usernameInput'>
  <button type='submit' id='play'>Play</button>
  </form>
  </div>`;
};

export let eventCloseAndStart = () => {
    const buttonPlay = document.getElementById('play');

    buttonPlay.addEventListener('click', (e) =>  {
        formVal = readForm();
    });
};