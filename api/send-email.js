import nodemailer from 'nodemailer'

export default async function handler(req, res) {
  // CORS Headers for API requests
  res.setHeader('Access-Control-Allow-Credentials', true)
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  )

  if (req.method === 'OPTIONS') {
    res.status(200).end()
    return
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { name, email, subject, message } = req.body || {}

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields: name, email, and message.' })
  }

  const smtpUser = process.env.SMTP_USER || 'fuhadbello09@gmail.com'
  const smtpPass = process.env.SMTP_PASS

  if (!smtpPass) {
    // If SMTP_PASS is not configured yet, return a clear setup instruction
    return res.status(200).json({
      success: true,
      demoMode: true,
      message: 'Nodemailer route is ready! Please configure SMTP_PASS in your .env file to complete live SMTP delivery.',
    })
  }

  // Create Nodemailer SMTP Transporter
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: Number(process.env.SMTP_PORT) || 587,
    secure: false,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  })

  try {
    await transporter.sendMail({
      from: `"${name}" <${smtpUser}>`,
      replyTo: email,
      to: process.env.RECEIVER_EMAIL || 'fuhadbello09@gmail.com',
      subject: subject ? `[Portfolio] ${subject}` : `[Portfolio Contact] New message from ${name}`,
      text: `You received a new message from your portfolio contact form:\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject || 'N/A'}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; padding: 20px; border: 1px solid #eee; border-radius: 8px;">
          <h2 style="color: #4f46e5; border-bottom: 2px solid #4f46e5; padding-bottom: 8px;">New Portfolio Contact Message</h2>
          <p><strong>From:</strong> ${name} (&lt;<a href="mailto:${email}">${email}</a>&gt;)</p>
          <p><strong>Subject:</strong> ${subject || 'No subject'}</p>
          <hr style="border: none; border-top: 1px solid #ddd; margin: 16px 0;" />
          <p><strong>Message:</strong></p>
          <div style="background: #f9fafb; padding: 16px; border-radius: 6px; border-left: 4px solid #4f46e5; white-space: pre-wrap;">${message}</div>
          <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;" />
          <p style="font-size: 12px; color: #888;">Sent via Node.js Nodemailer server route.</p>
        </div>
      `,
    })

    return res.status(200).json({ success: true, message: 'Email sent successfully via Nodemailer!' })
  } catch (error) {
    console.error('Nodemailer error:', error)
    return res.status(500).json({ error: 'Failed to send email via Nodemailer SMTP.', details: error.message })
  }
}
