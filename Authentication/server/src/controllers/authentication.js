const User = require("../models/user");

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

      res.json({ success: true });
    } catch (err) {
      return res.status(500).json(err);
    }
  },
};
