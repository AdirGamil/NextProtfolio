'use client'

import React, { useRef } from 'react'
import { FaEnvelope, FaPhone } from 'react-icons/fa'
import SectionTitle from '../ui/SectionTitle'
import emailjs from '@emailjs/browser'
import toast from 'react-hot-toast'

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formRef.current) return

    const formEl = formRef.current

    const sendEmail = async () => {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_TO_OWNER!,
        formEl,
        { publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY! }
      )

      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_TO_CLIENT!,
        formEl,
        { publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY! }
      )

      formEl.reset()
    }

    toast.promise(sendEmail(), {
      loading: 'Sending message...',
      success: 'Message sent! Check your inbox ✉️',
      error: 'Something went wrong. Please try again.',
    })
  }

  return (
    <section id="contact" className="bg-background text-foreground py-20 px-4">
      <SectionTitle
        eyebrow="Contact"
        title="Let's Connect"
        description="Whether you have a project idea, a question, or just want to say hi — feel free to drop me a message. I'm always open to new opportunities and collaborations."
        align="center"
      />

      <div className="max-w-6xl mt-20 mx-auto grid md:grid-cols-2 gap-12">
        {/* LEFT SIDE – Info */}
        <div className="bg-foreground/5 rounded-2xl p-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get in touch</h2>
          <p className="text-muted mb-8">
            Have a project in mind or just want to say hi? Whether it's a
            collaboration, a freelance opportunity, or a quick question — I'd
            love to hear from you.
          </p>

          <div className="space-y-6 text-sm sm:text-base">
            <div className="flex items-start gap-3">
              <FaPhone className="w-5 h-5 mt-1 text-accent" />
              <div>
                <p className="font-semibold text-foreground">Telephone</p>
                <p className="text-muted">+972 (52) 699-9581</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <FaEnvelope className="w-5 h-5 mt-1 text-accent" />
              <div>
                <p className="font-semibold text-foreground">Email</p>
                <p className="text-muted">2000adir2000@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE – Form */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="firstName">
                First name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                required
                className="w-full bg-transparent border border-border rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="lastName">
                Last name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                required
                className="w-full bg-transparent border border-border rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full bg-transparent border border-border rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="phone">
                Phone number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full bg-transparent border border-border rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="w-full bg-transparent border border-border rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>

          <button
            type="submit"
            className="bg-accent hover:bg-accent-hover text-white font-medium py-2 px-6 rounded-md transition-colors"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  )
}

export default ContactForm
