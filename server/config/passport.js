var LocalStrategy = require('passport-local').Strategy

//load mongo user model
//var User = require('../app/models/user')

const testUser = {
  username: 'test',
  password: '1111'
}

module.exports = function (passport) {

  passport.serializeUser(function (user, done) {
    done(null, testUser)
  })

  passport.deserializeUser(function (id, done) {
    done(null, testUser)
  })

  passport.use('login', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true
  }, function (req, username, password, done) {
    const rightCredentials = username === testUser.username &&
      password === testUser.password
    if (rightCredentials) {
      return done(null, testUser)
    } else {
      return done(null, false)
    }
    /*const query = {username};
    User.findOne(query, function (err, user) {
      if (err) {
        return done(err);
      }
      if (!user) {
        return done(null, false);
      }
      if (!user.validPassword(password)) {
        return done(null, false);
      }
      return done(null, user);
    })*/
  }))
}
