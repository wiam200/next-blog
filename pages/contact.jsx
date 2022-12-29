import React from "react";
import ContactForm from "../components/contact/contactForm";
import Head from "next/head";

function contactPage() {
  return (
    <section>
      <Head>
        <title>Contact Me</title>
        <meta name="description" content="Send me your messages!" />
      </Head>
      <ContactForm />
    </section>
  );
}

export default contactPage;
