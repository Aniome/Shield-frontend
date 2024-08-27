const signUpButton:HTMLElement = document.getElementById('signUp');
const signInButton:HTMLElement  = document.getElementById('signIn');
const container:HTMLElement  = document.getElementById('container');

signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});