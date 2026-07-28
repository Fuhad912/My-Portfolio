import { motion as Motion, useReducedMotion } from 'framer-motion'
import ContactForm from './ContactForm'
import { profile } from '../data/profile'

export default function Footer() {
  const reduceMotion = useReducedMotion()

  return (
    <footer id="contact" className="border-t border-neutral-800 bg-neutral-950">
      <Motion.div
        className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16"
        initial={reduceMotion ? false : { opacity: 0, y: 20 }}
        whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={reduceMotion ? undefined : { duration: 0.45, ease: 'easeOut' }}
      >
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
          <div>
            <p className="eyebrow">06 // GET IN TOUCH</p>
            <h2 className="mt-3.5 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Let&apos;s build something worth sharing.
            </h2>
            <p className="mt-4 text-base leading-7 text-neutral-300">
              Have a project in mind, an opportunity, or a question? Send me a message or connect through any of the channels below.
            </p>

            <div className="mt-8 space-y-4 text-sm text-neutral-300">
              <div>
                <span className="block text-xs uppercase tracking-wider text-neutral-500 font-medium">Direct Email</span>
                <a
                  href={`mailto:${profile.contact.email}`}
                  className="text-base font-semibold text-white hover:text-[color:var(--color-accent)] transition-colors"
                >
                  {profile.contact.email}
                </a>
              </div>

              <div>
                <span className="block text-xs uppercase tracking-wider text-neutral-500 font-medium">Location</span>
                <span className="text-neutral-200">{profile.location}</span>
              </div>

              <div className="pt-2">
                <span className="block text-xs uppercase tracking-wider text-neutral-500 font-medium mb-3">Connect</span>
                <div className="flex flex-wrap items-center gap-3">
                  {/* GitHub */}
                  {profile.contact.github && (
                    <a
                      href={profile.contact.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="GitHub Profile"
                      title="GitHub"
                      className="flex h-10 w-10 items-center justify-center rounded-md border border-neutral-800 bg-neutral-900 text-white transition-all hover:border-white hover:bg-white hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                    >
                      <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                      </svg>
                    </a>
                  )}

                  {/* LinkedIn */}
                  {profile.contact.linkedin && (
                    <a
                      href={profile.contact.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="LinkedIn Profile"
                      title="LinkedIn"
                      className="flex h-10 w-10 items-center justify-center rounded-md border border-neutral-800 bg-neutral-900 text-white transition-all hover:border-white hover:bg-white hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                    >
                      <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.74a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26z" />
                      </svg>
                    </a>
                  )}

                  {/* WhatsApp */}
                  {profile.contact.whatsapp && (
                    <a
                      href={profile.contact.whatsapp}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="WhatsApp Contact"
                      title="WhatsApp"
                      className="flex h-10 w-10 items-center justify-center rounded-md border border-neutral-800 bg-neutral-900 text-white transition-all hover:border-white hover:bg-white hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                    >
                      <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                        <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 1.67c4.54 0 8.24 3.7 8.24 8.24 0 2.2-.86 4.27-2.42 5.82a8.17 8.17 0 0 1-5.82 2.42c-1.5 0-2.97-.4-4.26-1.16l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24zm4.52 10.87c-.25-.13-1.47-.72-1.7-.81-.23-.08-.4-.13-.57.13-.17.25-.66.81-.81.98-.15.17-.3.19-.55.06s-1.06-.39-2.02-1.24c-.74-.66-1.24-1.48-1.39-1.73-.15-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.43s-.57-1.38-.78-1.89c-.2-.49-.41-.42-.56-.43h-.48c-.16 0-.43.06-.66.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.12.17 1.77 2.71 4.3 3.8.6.26 1.07.41 1.44.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.11-.23-.17-.48-.3z" />
                      </svg>
                    </a>
                  )}

                  {/* X (Twitter) */}
                  {profile.contact.x && (
                    <a
                      href={profile.contact.x}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="X Profile"
                      title="X (Twitter)"
                      className="flex h-10 w-10 items-center justify-center rounded-md border border-neutral-800 bg-neutral-900 text-white transition-all hover:border-white hover:bg-white hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                    >
                      <svg className="h-4.5 w-4.5 fill-current" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </a>
                  )}

                  {/* Instagram */}
                  {profile.contact.instagram && (
                    <a
                      href={profile.contact.instagram}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Instagram Profile"
                      title="Instagram"
                      className="flex h-10 w-10 items-center justify-center rounded-md border border-neutral-800 bg-neutral-900 text-white transition-all hover:border-white hover:bg-white hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                    >
                      <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div>
            <ContactForm />
          </div>
        </div>

        <div className="mt-12 border-t border-neutral-800 pt-6 text-sm text-neutral-500 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p>{profile.footerNote}</p>
          <p className="text-xs text-neutral-500">Designed &amp; Built by {profile.name}</p>
        </div>
      </Motion.div>
    </footer>
  )
}
