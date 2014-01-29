Template.form.greeting = function () {
  return "Welcome to _mail.";
};

Template.form.events({
  'submit form' : function (e) {
    e.preventDefault();
    var target = $(e.target);

    console.log(target);
  }
});
