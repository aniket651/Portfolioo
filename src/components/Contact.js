import React from 'react'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./Contact.css"
function Contact() {

  const [open, setOpen] = React.useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_tox7kqs', 'template_nv7k7mj', form.current, 'SybVGsYS52j2TfLbi')
      .then((result) => {
        setOpen(true);
        form.current.reset();
      }, (error) => {
        console.log(error.text);
      });
  }


  return (
    <div className='Container'>
      <div className='Wrapper'>
        <div className='Title'>Contact</div>
        <div className='Disc'>Feel free to reach out to me for any questions or opportunities!</div>
        <form className='ContactForm' ref={form} onSubmit={handleSubmit}>
          <div className='ContactTitle'>Email Me 🚀</div>
          <input className='ContactInput' placeholder="Your Email" name="from_email" />
          <input className='ContactInput' placeholder="Your Name" name="from_name" />
          <input className='ContactInput' placeholder="Subject" name="subject" />
          <textarea className='ContactInputMessage' placeholder="Message" rows="4" name="message" />
          <input className='ContactButton' type="submit" value="Send" />
        </form>
        {/* <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={()=>setOpen(false)}
          message="Email sent successfully!"
          severity="success"
        /> */}
      </div>
    </div>
  )
}

export default Contact