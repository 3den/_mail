Template.form.events({
  'submit form' : function (e) {
    e.preventDefault();
    var $form = $(e.target), data = {
      from: $("#email_from", $form).val(),
      to: $("#email_to", $form).val(),
      subject: $("#email_subject", $form).val(),
      body: $("#email_body", $form).val()
    };

    console.log($form, data);
  }
});

