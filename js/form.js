document.addEventListener("DOMContentLoaded", function () {
  const validation = new JustValidate('.js-form');
  const selector = document.querySelector("input[type='tel']");
  const im = new Inputmask("+7 (999)-999-99-99");
  im.mask(selector);

  validation
    .addField('.js-form-name', [{
        rule: 'minLength',
        value: 3,
        errorMessage: "Мало символов"
      }
    ])
    .addField('.js-form-tel', [{
      rule: "function",
      validator: function (name, value) {
        const phone = selector.inputmask.unmaskedvalue();
        return phone.length === 10
      },
      errorMessage: 'Мало символов',
    }]);
})
