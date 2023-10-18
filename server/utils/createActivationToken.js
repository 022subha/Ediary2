import jwt from "jsonwebtoken";

export const createActivationToken = (user) => {
  try {
    const otp = Math.floor(1000 + Math.random() * 9000).toString();
    const token = jwt.sign({ user, otp }, process.env.ACTIVATION_SECRET, {
      expiresIn: "5m",
    });

    return { token, otp };
  } catch (error) {
    console.log(error);
  }
};
