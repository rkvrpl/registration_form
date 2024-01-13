"use strict"
// Используя JavaScript, добавьте обработчик события отправки формы (`submit`), который будет выполнять следующие действия:

// - Отменять действие по умолчанию для события `submit`
// - Отображать сообщение об ошибке рядом с каждым полем при обнаружении ошибки валидации
// - Кнопка отправки должна быть неактивна (`disabled`), пока все поля формы не будут правильно заполнены и не будет отмечен чекбокс согласия с условиями
// - Если форма проходит проверку валидности, выводите в консоль значения полей формы и очищайте форму

// 4 Бонусное задание: реализуйте дополнительные обработчики событий `focus` и `blur` для каждого поля
const form = document.forms.form;
const name = form.elements.name;
const email = form.elements.email;
const age = form.elements.age;
const woman = form.elements.woman;
const man = form.elements.man;
const profession = form.elements.profession;
const pass = form.elements.pass;
const checkbox = form.elements.checkbox;
const button = form.elements.button;

form.addEventListener('submit', function (evt) {
    evt.preventDefault();

    // form.reset(); //Сброс полей формы
    });