'use client'

import React from 'react'

const ContactForm = () => {
  return (
    <section className="bg-background text-foreground py-20 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* LEFT SIDE – Info */}
        <div className='bg-foreground/5 rounded-2xl p-8'>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get in touch</h2>
          <p className="text-muted mb-8">
            Proin volutpat consequat porttitor cras nullam gravida at. Orci
            molestie a eu arcu. Sed ut tincidunt integer elementum id sem.
            Arcu sed malesuada et magna.
          </p>

          <div className="space-y-4 text-sm sm:text-base">
            <div>
              <p className="font-semibold text-foreground">Address</p>
              <p className="text-muted">545 Mavis Island, Chicago, IL 99191</p>
            </div>
            <div>
              <p className="font-semibold text-foreground">Telephone</p>
              <p className="text-muted">+1 (555) 234-5678</p>
            </div>
            <div>
              <p className="font-semibold text-foreground">Email</p>
              <p className="text-muted">hello@example.com</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE – Form */}
        <form className="space-y-6">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="firstName">
                First name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="w-full bg-transparent border border-border rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                required
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
                className="w-full bg-transparent border border-border rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                required
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
                className="w-full bg-transparent border border-border rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                required
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
              className="w-full bg-transparent border border-border rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
              required
            ></textarea>
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
