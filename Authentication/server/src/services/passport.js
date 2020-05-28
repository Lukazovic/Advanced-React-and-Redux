const passport = require("passport");
const User = require("../models/user");
const config = require("../../config");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const LocalStrategy = require("passport-local");

const localOptions = { usernameField: "email" };
const localLogin = new LocalStrategy(
  localOptions,
  async (email, password, done) => {
    try {
      const user = await User.findOne({ email });

      if (!user) return done(null, false);

      user.comparePassword(password, function (err, isMatch) {
        if (err) return done(err);
        if (!isMatch) return done(null, false);

        return done(null, user);
      });
    } catch (err) {
      return done(err);
    }
  }
);

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader("authorization"),
  secretOrKey: config.secret,
};
const jwtLogin = new JwtStrategy(jwtOptions, async function (payload, done) {
  try {
    const user = await User.findById(payload.sub);

    if (user) return done(null, user);

    return done(null, false);
  } catch (err) {
    return done(err, false);
  }
});

passport.use(jwtLogin);
passport.use(localLogin);
