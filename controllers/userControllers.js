const prisma = require("../prisma/index");
const cookieToken = require("../utils/cookieToken");

exports.signup = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    // Check if all required fields are present
    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "All the information required for signup are not provided",
      });
    }

    // Create the user in the database
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password,
      },
    });

    // Send the user a token
    cookieToken(user, res);
  } catch (error) {
    console.error("Signup error: ", error); // Log error for debugging
    res.status(500).json({ success: false, message: "Signup failed" });
  }
};
