import { useState } from 'react'
import { motion as Motion } from 'framer-motion'
import { profile } from '../data/profile'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrorMessage('')

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const text = await response.text()
      let data = {}
      try {
        data = JSON.parse(text)
      } catch {
        throw new Error(`Server returned non-JSON response (${response.status}): ${text.slice(0, 120)}`)
      }

      if (response.ok && data.success) {
        setSubmitted(true)
      } else {
        throw new Error(data.error || 'Failed to send email via Node.js mailer.')
      }
    } catch (err) {
      console.error('Nodemailer submit error:', err)
      setErrorMessage(err.message || 'Something went wrong. Please check your backend mailer configuration.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleReset = () => {
    setFormData({ name: '', email: '', subject: '', message: '' })
    setSubmitted(false)
    setErrorMessage('')
  }

  return (
    <div className="w-full rounded-lg border border-neutral-800 bg-neutral-900/40 p-6 sm:p-8">
      <div className="mb-6">
        <h3 className="text-xl font-semibold tracking-tight text-neutral-100">Send a message</h3>
        <p className="mt-1 text-sm text-neutral-400">
          Powered by Node.js mailer. Messages land directly in <span className="text-white font-medium">{profile.contact.email}</span>.
        </p>
      </div>

      {submitted ? (
        <Motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          className="rounded-md border border-emerald-500/30 bg-emerald-950/20 p-6 text-center"
        >
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h4 className="mt-4 text-base font-semibold text-neutral-100">Message sent!</h4>
          <p className="mt-2 text-sm text-neutral-300">
            Your message has been sent via Node.js Nodemailer. I&apos;ll get back to you at <strong className="text-white">{formData.email}</strong> as soon as possible.
          </p>
          <button
            type="button"
            onClick={handleReset}
            className="btn-secondary mt-5 text-xs"
          >
            Send another message
          </button>
        </Motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {errorMessage && (
            <div className="rounded-md border border-rose-500/30 bg-rose-950/30 p-3.5 text-xs text-rose-300">
              {errorMessage}
            </div>
          )}

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="contact-name" className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-neutral-300">
                Your Name <span className="text-rose-400">*</span>
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Alex Johnson"
                className="w-full rounded-md border border-neutral-800 bg-neutral-950 px-3.5 py-2.5 text-sm text-neutral-100 placeholder:text-neutral-600 focus:border-neutral-400 focus:outline-none focus:ring-1 focus:ring-neutral-400"
              />
            </div>
            <div>
              <label htmlFor="contact-email" className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-neutral-300">
                Your Email <span className="text-rose-400">*</span>
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="alex@example.com"
                className="w-full rounded-md border border-neutral-800 bg-neutral-950 px-3.5 py-2.5 text-sm text-neutral-100 placeholder:text-neutral-600 focus:border-neutral-400 focus:outline-none focus:ring-1 focus:ring-neutral-400"
              />
            </div>
          </div>

          <div>
            <label htmlFor="contact-subject" className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-neutral-300">
              Subject
            </label>
            <input
              id="contact-subject"
              name="subject"
              type="text"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Project opportunity / Inquiry"
              className="w-full rounded-md border border-neutral-800 bg-neutral-950 px-3.5 py-2.5 text-sm text-neutral-100 placeholder:text-neutral-600 focus:border-neutral-400 focus:outline-none focus:ring-1 focus:ring-neutral-400"
            />
          </div>

          <div>
            <label htmlFor="contact-message" className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-neutral-300">
              Message <span className="text-rose-400">*</span>
            </label>
            <textarea
              id="contact-message"
              name="message"
              rows={4}
              required
              value={formData.message}
              onChange={handleChange}
              placeholder="Hi Fuhad, I'd like to discuss a project..."
              className="w-full rounded-md border border-neutral-800 bg-neutral-950 px-3.5 py-2.5 text-sm text-neutral-100 placeholder:text-neutral-600 focus:border-neutral-400 focus:outline-none focus:ring-1 focus:ring-neutral-400"
            />
          </div>

          <div className="pt-2 flex items-center justify-between gap-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary w-full sm:w-auto"
            >
              {isSubmitting ? 'Sending via Node.js Mailer...' : 'Send Message'}
            </button>
          </div>
        </form>
      )}
    </div>
  )
}
