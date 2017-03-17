/*Accounts.onCreateUser((options, user) => {
  if (Meteor.settings.admins.indexOf(options.email) > -1 ) {
    user.roles = ['admin'];
  }
  return user;
});*/

Accounts.onCreateUser(function (options, user) {

    if (user.services.google) {
        console.log("services exist")


        var email = user.services.google.email;

        var existingUser = Meteor.users.findOne({'profile.email': email});
        if (!existingUser) {
          user['profile'] = {
            email: user.services.google.email,
            firstName: user.services.google.given_name,
            lastName: user.services.google.family_name,
            
           }
          user['roles'] = ['employee']
          user['stage'] = 1
          return user
        }

        existingUser['services'] = {}



        console.log(existingUser)
        existingUser.services['google'] = user.services.google;

        Meteor.users.remove({_id: existingUser._id}); // remove existing record

        return existingUser;                  // record is re-inserted
      }
      return user
});

Accounts.validateLoginAttempt(function() {
   console.log('loggedIn')
   return true
});
