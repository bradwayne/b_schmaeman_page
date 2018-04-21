// $('#contact-form').submit(function (e) {
//     var name    = document.getElementById('inputName'),
//         email   = document.getElementById('inputEmail'),
//         subject = document.getElementById('inputSubject'),
//         message = document.getElementById('inputMessage');

//     if (!name.value || !email.value || !subject.value || !message.value) {
//     } else {
//         $.ajax({
//             url: "https://formspree.io/me@bradley-schmaeman.com",
//             method: 'POST',
//             data: $(this).serialize(),
//             dataType: 'json'
//         });

//         e.preventDefault()
//         $(this).get(0).reset()
//     }
// })