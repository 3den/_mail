Template.form.events({
  'submit form' : function (e) {
    e.preventDefault();
    var $form = $(e.target), data = {
      from: $("#email_from", $form).val(),
      to: $("#email_to", $form).val(),
      subject: $("#email_subject", $form).val(),
      text: $("#email_body", $form).val()
    };

    Meteor.call('sendEmail', data, function(error, result) {
      if (error) {
        alert("Shit happens, the email was not sent!");
      } else {
        $("[type=reset]", $form).click();
        alert("An email was sent from '" + data.from + "' to '" + data.to + "'");
      }
    });
  }
});

