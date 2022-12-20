// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const mail = require("@sendgrid/mail")
mail.setApiKey("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")//It is setting our key

export default async function handler(req, res) {
  const body=await JSON.parse(req.body)

  const message=`
 Name:${body.name}\r\n
 Email:${body.email}
 Message:${body.message}
  `

  const data = {
    to:`kalwara_marcin@o2.pl`,
    from:'topple@o2.pl',
    subject:"New message",
    text:message,
    html:message.replace(/\r\n/g,`<br>`)
  }
 
  let dwa=mail.send(data)
  console.log(dwa)
  res.status(200).json({ name: 'John Doe' })
}
