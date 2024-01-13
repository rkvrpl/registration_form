"use strict"

const form = document.forms.form,
    name = form.elements.name,
    email = form.elements.email,
    age = form.elements.age,
    profession = form.elements.profession,
    checkbox = form.elements.checkbox,
    button = form.elements.button;

    function createError(input , text){
        const parent = input.parentNode;
        const errorLabel = document.createElement('p');
        errorLabel.textContent = text; 
        parent.append(errorLabel);
    }
    function validation(elem){
        if(elem.value === ''){
            createError(elem, 'Поле не заполнено или заполнено неверно');
        }
    }
    form.addEventListener('submit', function (evt) {
        evt.preventDefault();
        validation(name);
        validation(email);
        validation(age);
        validation(profession);
        checkbox.addEventListener('click', () =>{
            if(checkbox.checked === true){
                button.disabled = false;
            }
            if(checkbox.checked === false){
                button.disabled = true;
            }
        });
        
        form.reset();
    });
    