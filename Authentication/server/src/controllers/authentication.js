const User = require("../models/user");
const jwt = require("jwt-simple");
const config = require("../../config");

function tokenForUser(user) {
  const timestamp = new Date().getTime();
  const encoded = jwt.encode({ sub: user.id, iat: timestamp }, config.secret);
  return encoded;
}

module.exports = {
  async signup(req, res, next) {
    const { email, password } = req.body;

    try {
      // Verify if the email is in use
      const user = await User.findOne({ email });

      // If a user with email does exist, return an error
      if (user) return res.status(422).send({ error: "Email is in use" });

      // If a user with email does NOT exist, create and save user record
      const newUser = new User({ email, password });
      await newUser.save();

      res.json({ token: tokenForUser(newUser) });
    } catch (err) {
      return res.status(500).json(err);
    }
  },
};
