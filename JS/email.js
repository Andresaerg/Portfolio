    const btn = document.getElementById('button');
    let user_name = document.getElementById('from_name');
    let email = document.getElementById('email_id');
    let message = document.getElementById('message');
    let company = document.getElementById('company');

    let body = document.querySelector('body');

    if(body.id === 'esp'){

        document.getElementById('form')
        .addEventListener('submit', function(event) {
            
            event.preventDefault();

            if(user_name.value === '' || email.value === '' || message.value === ''){
                swal('Complete todos los campos', 'Por favor, complete todos los campos para enviar el mensaje', 'info', {
                    button: 'Volver'
                })
            }else{
                btn.disabled = true;
                btn.value = 'Enviando...';
        
                const serviceID = 'default_service';
                const templateID = 'template_i02kfup';
        
                emailjs.sendForm(serviceID, templateID, this)
                .then(() => {
                    btn.value = 'Enviar';
                    swal('Correo enviado', '¡Gracias por su mensaje!', 'success', {
                        button: 'Volver'
                    });
                    user_name.value = '';
                    email.value = '';
                    message.value = '';
                    company.value = '';
                    btn.disabled = false;
                }, (err) => {
                    btn.value = 'Enviar';
                    console.log(JSON.stringify(err))
                    swal('Oops', 'Algo ha salido mal...', 'error', {
                        button: 'Volver'
                    });
                    btn.disabled = false;
                });
            }

        });
    }else{

        document.getElementById('form')
        .addEventListener('submit', function(event) {
            
            event.preventDefault();

            if(user_name.value === '' || email.value === '' || message.value === ''){
                swal('Complete all fields', 'Please complete all fields to send the message', 'info', {
                    button: 'Return'
                })
            }else{
                btn.disabled = true;
                btn.value = 'Sending...';
        
                const serviceID = 'default_service';
                const templateID = 'template_i02kfup';
        
                emailjs.sendForm(serviceID, templateID, this)
                .then(() => {
                    btn.value = 'Send';
                    swal('Mail sent', 'Thanks for your message!', 'success', {
                        button: 'Return'
                    });
                    user_name.value = '';
                    email.value = '';
                    message.value = '';
                    company.value = '';
                    btn.disabled = false;
                }, (err) => {
                    btn.value = 'Send';
                    console.log(JSON.stringify(err))
                    swal('Oops', 'Something has gone wrong...', 'error', {
                        button: 'Return'
                    });
                    btn.disabled = false;
                });
            }

        });
    }