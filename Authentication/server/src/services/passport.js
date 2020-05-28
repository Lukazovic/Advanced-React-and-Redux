const passport = require("passport");
const User = require("../models/user");
const config = require("../../config");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader("authorization"),
  secretOrKey: config.secret,
};

const jwtLogin = new JwtStrategy(jwtOptions, async function (payload, done) {
  try {
    const user = await User.findById(payload.sub);

    if (user) done(null, user);

    done(null, false);
  } catch (err) {
    return done(err, false);
  }
});

passport.use(jwtLogin);
