import nodemailer from 'nodemailer'
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "8817f9df8bf905",
      pass: "7c6e9d240084c6"
    }
  });

export class NodemailerMailAdapter implements MailAdapter{
    async sendMail({subject, body}: SendMailData) {
    //     await transport.sendMail({
    //     from: 'Equipe Feedget <oi@feedget.com>',
    //     to: 'Patrick Pegoretti <ppegoretti@gmail.com>',
    //     subject,
    //     html: body,
    // })
    }
}