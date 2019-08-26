  passport.use(new OAuth2Strategy({
    authorizationURL: 'https://www.fitbit.com/oauth2/authorize',
    tokenURL: 'https://api.fitbit.com/oauth2/token',
    clientID: "22B7YW",
    clientSecret: "35ff70fdab2b30dd97af96ab57221b40",
    callbackURL: "https://fitbits.herokuapp.com/",
    scope: "activity",
    state: "states"
  },
  function(accessToken, refreshToken, profile, cb) {
    User.findOrCreate({ exampleId: profile.id }, function (err, user) {
    return cb(err, user);
    });
  }
));