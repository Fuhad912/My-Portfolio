import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import nodemailer from 'nodemailer'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [
      react(),
      {
        name: 'api-send-email-middleware',
        configureServer(server) {
          server.middlewares.use('/api/send-email', async (req, res) => {
            res.setHeader('Content-Type', 'application/json')

            if (req.method !== 'POST') {
              res.statusCode = 405
              return res.end(JSON.stringify({ error: 'Method not allowed' }))
            }

            let body = ''
            req.on('data', (chunk) => {
              body += chunk
            })

            req.on('end', async () => {
              try {
                const data = JSON.parse(body || '{}')
                const { name, email, subject, message } = data

                if (!name || !email || !message) {
                  res.statusCode = 400
                  return res.end(JSON.stringify({ error: 'Missing required fields: name, email, and message.' }))
                }

                const smtpUser = env.SMTP_USER || process.env.SMTP_USER || 'fuhadbello09@gmail.com'
                const rawPass = env.SMTP_PASS || process.env.SMTP_PASS || ''
                const smtpPass = rawPass.replace(/\s+/g, '')

                if (!smtpPass) {
                  res.statusCode = 400
                  return res.end(
                    JSON.stringify({
                      error: 'SMTP_PASS is missing in .env file. Please add your 16-character Gmail App Password.',
                    })
                  )
                }

                const transporter = nodemailer.createTransport({
                  host: env.SMTP_HOST || 'smtp.gmail.com',
                  port: Number(env.SMTP_PORT) || 587,
                  secure: false,
                  auth: {
                    user: smtpUser,
                    pass: smtpPass,
                  },
                })

                await transporter.sendMail({
                  from: `"${name}" <${smtpUser}>`,
                  replyTo: email,
                  to: env.RECEIVER_EMAIL || 'fuhadbello09@gmail.com',
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
                    </div>
                  `,
                })

                res.statusCode = 200
                res.end(JSON.stringify({ success: true, message: 'Email sent successfully via Nodemailer!' }))
              } catch (err) {
                console.error('Local Nodemailer error:', err)
                res.statusCode = 500
                res.end(JSON.stringify({ error: err.message || 'Failed to send email via SMTP.' }))
              }
            })
          })
        },
      },
    ],
  }
})
