// pages/api/sendEmail.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, subject, description } = req.body;

    // Ensure required fields are provided
    if (!email || !subject || !description) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
      }
    });

    const mailOptions = {
      from: `Your Name <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `${name} - ${subject}`,
      text: description,
      html: `<p><strong>From:</strong> ${email}</p><p><strong>Message:</strong> ${description}</p>`
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
      console.error('Failed to send email:', error);

      // Type assertion to treat error as an instance of Error
      const message = (error instanceof Error) ? error.message : 'An unknown error occurred';
      res.status(500).json({ message: 'Failed to send email', error: message });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
