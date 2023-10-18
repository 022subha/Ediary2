export const activationMail = (data) => {
  return `<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Ediary Activation Email</title>
  </head>
  <body
    style="
      margin: 0;
      padding: 0;
      min-width: 100%;
      font-family: Arial, sans-serif;
      font-size: 16px;
      line-height: 1.5;
      background-color: #fafafa;
      color: #222222;
      text-align: center;
    "
  >
    <div className="email-wrapper" style="max-width: 600px; margin: 0 auto">
      <div
        className="email-header"
        style="background-color:#4066ff;padding:24px;color:#ffffff;"
      >
      <img
        src="https://theediary.vercel.app/assets/images/logo.png"
        alt=""
        style="
          max-width: 100px;
				  margin-bottom: 20px;
          "
        />
          <p
            style="
              font-size:36px;
              font-weight:600;
              margin:10px 0;
            "
          >
            Ediary
          </p>
      </div>
      <div className="email-body" style="padding: 24px; background-color: #ffffff">
        <p style="margin-top: 0; margin-bottom: 24px">
          Hello ${data.user.name},
        </p>
        <p style="margin-top: 0; margin-bottom: 24px">
          Thank you for registering with Ediary. To complete your registration,
          please use the following OTP (One-Time Password) to verify your
          account:
        </p>
        <h2
          className="otp"
          style="
            display: inline-block;
            padding: 10px 25px;
            margin-top: 0;
            margin-bottom: 24px;
            font-weight: 700;
            color: #ffffff;
            background-color: #4066ff;
            border-radius: 10px;
          "
        >
          ${data.otp}
        </h2>
        <p style="margin-top: 0; margin-bottom: 24px">
          This OTP is valid for 5 minutes. If you did not request this
          verification, please disregard this email. Once your account is
          verified, you will have access to our platform and its features.
        </p>
      </div>
      <div
        className="email-footer"
        style="padding: 24px; background-color: #ded9d9"
      >
        <p style="margin-top: 0; margin-bottom: 24px">
          If you have any questions or need assistance, please feel free to
          reach out to us at
          <a href="mailto:support@ediary.com">support@coursehub.com</a> .We are
          here to help!
        </p>
      </div>
    </div>
  </body>
</html>
`;
};
