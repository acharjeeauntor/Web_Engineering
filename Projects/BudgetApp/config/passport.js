const passport = require("passport");
const JwtStrategy = require("passport-jwt").Strategy;
const { ExtractJwt } = require("passport-jwt");
const LocalStrategy = require("passport-local").Strategy;
const User = require("../models/Users");
const config = require("./Keys");

// JSON WEB TOKENS STRATEGY
passport.use(
  new JwtStrategy(
    {
      jwtFromRequest: ExtractJwt.fromHeader("authorization"),
      secretOrKey: config.secretOrKey
    },
    (payload, done) => {
      // Find the user specified in token
      User.findById(payload.sub)
        .then((user) => {
          // If user doesn't exists, handle it
          if (!user) {
            return done(null, false);
          } 
            // Otherwise, return the user
           return done(null, user);
        
        })
        .catch(err=>console.log(err));
    }
  )
);
