import express from 'express';
import nodemailer from 'nodemailer'
import { prisma } from './prisma';

export const routes = express.Router()

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "8817f9df8bf905",
      pass: "7c6e9d240084c6"
    }
  });

routes.post('/feedbacks', async(req, res) => {
    const { type, comment, screenshot } = req.body

    const feedback = await prisma.feedback.create({
        data: {
            type: type,
            comment: comment,
            screenshot: screenshot,
        }
    })

    // await transport.sendMail({
    //     from: 'Equipe Feedget <oi@feedget.com>',
    //     to: 'Patrick Pegoretti <ppegoretti@gmail.com>',
    //     subject: 'Novo feedback',
    //     html: [
    //         `<div style="font-family: sans-serif; font-size: 16px; color: #111;">`,
    //         `<p>Tipo do feedback: ${type}<p/>`,
    //         `<p>Comentario: ${comment}<p/>`,
    //         `<div/>`
    //     ].join('\n')
    // })

    return res.status(201).json({data: feedback});

})