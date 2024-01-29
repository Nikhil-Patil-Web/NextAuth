import nodemailer from "nodemailer"
import { activationTemplate } from "./emailTemplates/activation"
export async function sendMail({
  to,
  subject,
  body,
}: {
  to: string
  subject: string
  body: string
}) {
  const { SMTP_GMAIL_PASSWORD, SMTP_EMAIL } = process.env

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: SMTP_EMAIL,
      pass: SMTP_GMAIL_PASSWORD,
    },
  })
  try {
    const testResult = await transport.verify()
    console.log("Test Result of Transport", testResult)
  } catch (error) {
    console.log(error)
  }
  try {
    const sendResult = await transport.sendMail({
      from: SMTP_EMAIL,
      to,
      subject,
      html: body,
    })
    console.log(sendResult)
  } catch (error) {
    console.log(error)
  }
}

export function compileActivationTemplate(name: string, url: string) {
  const template = Handlebars.compile(activationTemplate)
  const htmlBody = template({
    name,
    url,
  })

  return htmlBody
}
