import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import Header from '../components/Header';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_id8ohuq', 'template_r0pe2e7', form.current, 'user_9wba3P5QeVywoIBaC8eCb')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset()
  };

  return (
    <>
    <Header/>
    <section class="contact" id="contact">
      <h1 class="heading" data-aos="fade-up"
          data-aos-anchor-placement="top-center"> <span>contact</span> me </h1>
      <form ref={form} onSubmit={sendEmail}>

        <input type="text" name="name" className="box" placeholder="  Enter the name" />

        <input type="email" name="email" className="box" placeholder="  Enter your email"/>

        <input type="tel" placeholder="  Enter your phone number" className="box" name="tel" />

        <textarea name="message" className="box" placeholder="  Your message" id="" cols="30" rows="10" />

        <input type="submit" value="Send" className="btn" />
      </form>
    </section>
    </>
  );
};

export default Contact










//

//

// <form action="">
//     <input type="text" placeholder="your name" class="box">
//     <input type="email" placeholder="your email" class="box">
//     <input type="text" placeholder="subject" class="box">
//     <textarea name="" class="box" placeholder="your message" id="" cols="30" rows="10"></textarea>
//     <input type="submit" value="send message" class="btn">
// </form>

// </section>