import asyncHandler from "express-async-handler"
import nodemailer from "nodemailer"
import mg from "nodemailer-mailgun-transport"
// @desc    Create new order
// @route   POST /api/orders
// @access  Private
const mailControllerFunction = asyncHandler(async (req, res) => {
  let { name, email, message } = req.body
  const auth = {
    auth: {
      api_key: "4bfc70a7863df639930b35f87f2eeaa2-1d8af1f4-69939cd8",
      domain: "sandboxf8f929f622dc47c6b6518948e21d4e1d.mailgun.org"
    }
  }

  const nodemailerMailgun = nodemailer.createTransport(mg(auth))

  const user = "Mail route is working"

  nodemailerMailgun.sendMail(
    {
      from: email,
      to: "Gabehaus@gmail.com", // An array if you have multiple recipients.
      subject: "message from portfolio viewer",
      html: `<ul>
        <li>Name: ${name}</li>
        <li>Message: ${message}</li>
      </ul>`
    },
    (err, info) => {
      if (err) {
        console.log(`Pebaw: ${err}`)
      } else {
        console.log(`Response: ${info}`)
      }
    }
  )

  if (user) {
    res.send(user)
  } else {
    res.status(404)
    throw new Error("Mail route not working")
  }
})

export { mailControllerFunction }
