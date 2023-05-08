import { ContactInput, SocialCards } from 'components'
import React from 'react'
import Head from 'next/head'
import { FaRegUser } from 'react-icons/fa'
import { AiOutlineMail, AiOutlineSend } from 'react-icons/ai'
import { MdSubject } from 'react-icons/md'

function ContactPage(): JSX.Element {
  return (
    <>
      <Head>
        <title>contact</title>
        <meta
          name="description"
          content="Get in touch with the guy behind uniqueMW."
        />
        <SocialCards
          title="contact"
          description="Get in touch with the guy behind uniqueMW."
        />
      </Head>
      <section className="flex flex-col items-center lg:px-10 px-2 h-screen">
        <form
          className="flex flex-col items-center space-y-4 w-11/12 lg:w-2/5"
          action="https://formsubmit.co/clifflikovo@gmail.com"
          method="POST"
          role="form"
        >
          <h1 className="text-lg text-heading text-left w-full font-heading tracking-wider">
            Contact Me
          </h1>
          <ContactInput
            placeholder="Full Name"
            id="fullname"
            inputType="text"
            name="name"
          >
            <FaRegUser />
          </ContactInput>

          <ContactInput
            placeholder="Email"
            id="email"
            inputType="email"
            name="email"
          >
            <AiOutlineMail />
          </ContactInput>
          <ContactInput
            placeholder="Subject"
            id="subject"
            inputType="text"
            name="_subject"
          >
            <MdSubject />
          </ContactInput>
          <textarea
            placeholder="Your Message..."
            className="bg-background text-base text-paragraph tracking-wider font-paragraph px-2 border border-heading h-72 w-full"
            required
          />
          <button
            className="text-base text-heading font-heading tracking-wider border border-heading"
            type="submit"
          >
            <div className="flex flex-row space-x-2 items-center px-6 py-3">
              <h3>Submit</h3>
              <AiOutlineSend />
            </div>
          </button>
        </form>
      </section>
    </>
  )
}

export default ContactPage
