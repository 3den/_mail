Meteor.methods({
  sendEmail: function (data) {
    this.unblock();
    Email.send(data);
  }
});
