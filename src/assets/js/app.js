// Collapse NavbarContent
import * as bootstrap from "bootstrap";


const navbarContent = document.querySelector('#navbarToggleExternalContent')
const navbarButton = document.querySelector('[data-bs-target]')


const hideNavbarContent = () => {
    navbarContent.classList.toggle('show')
    navbarButton.classList.toggle('collapsed')
    navbarButton.ariaExpanded = false
}

navbarContent.addEventListener('click', hideNavbarContent)


// Email form Handling
const emailForm = document.getElementById('emailForm');

emailForm.addEventListener('submit', sendMail);

function sendMail(e) {
    e.preventDefault();

    const fullName = document.getElementById('fname').value;

    const pNumber = document.getElementById('pNumber').value;


    Email.send({
        SecureToken: "c243d354-c7f2-4ab2-a92c-f41b28af8a67",
        To: 'info@new_door.com',
        From: 'tashikova.aida1@gmail.com',
        Subject: "NewDoorAlmaty",
        Body: `Имя:             ${fullName}.<br>
               Номер телефона:  ${pNumber}.`
    }).then(() => showAlert("Ваше сообщение успешно отправлено!", true))
    .catch((e) => showAlert(`Простите, сообщение не отправлено! ${e.message}`, false));

// sultanhahahamaratov@gmail.com
// password 80AC4DD439A67D3C6CDC2F9DB585070706C3


// abcdDCBA1234#
clearFields()
}

function showAlert(message, isSuccess) {
    const div = document.createElement('div')
    div.className = `alert ${isSuccess ? 'alert-success' : 'alert-danger'} alert-message`;
    div.appendChild(document.createTextNode(message));

    document.querySelector('.wrapper').appendChild(div);

    // Vanish in 3 seconds
    setTimeout(() => document.querySelector('.alert').remove(), 4000);
}

function clearFields() {
    document.querySelector('#pNumber').value = '';
    document.querySelector('#fname').value = '';
    document.querySelector('#fCheck').checked = false;
}