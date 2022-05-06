import nodemailer from 'nodemailer'
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "c1fb9f20a56de8",
    pass: "7a149347636a87",
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
        from: "Equipe Feedget <oi@feedget.com>",
        to: "Tony Carvalho <tony.carvalho1994@gmail.com>",
        subject,
        html: body,
      });
  };
}