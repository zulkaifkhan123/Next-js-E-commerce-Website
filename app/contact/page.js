'use client'
import { useState } from "react";


function Contact() {
  let [state, setState] = useState({ name: "", email: "", phone: "", subject: "", message: "" })

  function handleChange (e) {
    let { name, value } = e.target
    setState((prev) => ({
      ...prev ,
      [name] : value
    }))
  }
  async function handleSubmit (e) {
    e.preventDefault()
    console.log(state)
    await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(state)
    })
    setState({ name: "", email: "", phone: "", subject: "", message: "" })
  }

  return (
    <div className="contact">
      <section>
        <div className="cont-sides cont-side1">
          <h1>Contact Us</h1>
          <p id="mainP">Have a question? Our dedicated team is here to assist you. Contact us with any inquiries, and we'll ensure you get the information you need.</p>
          <div className="call foot-contact"><i className="icon ri-phone-line" /><p>+923097650328</p></div>
          <div className="whatsapp foot-contact"><i className="icon ri-whatsapp-line" /><p>+92765430328</p></div>
          <div className="email foot-contact"><i className="icon ri-mail-line" /><p>muhammad34@gamil.com</p></div>
          <div className="location foot-contact"><i className="icon ri-map-pin-line" /><p>New-York colambia PIN : 87564</p></div>
        </div>
        <div className="cont-sides cont-side2">
          <form onSubmit={handleSubmit} id='form-contact'>
            <div>
              <input className="input" required  value={state.name} onChange={handleChange} type="text" name="name" id="name" placeholder="Name" />
              <input className="input" required  value={state.email} onChange={handleChange} type="email" name="email"  id="email" placeholder="Email" />
            </div>
            <div>
              <input className="input" minLength={11} pattern="\d{11}" required  value={state.phone} onChange={handleChange} type="number" name="phone" placeholder="+92340-907832-1" id="phone" />
              <input className="input" required  value={state.subject} onChange={handleChange} type="text"  name="subject" placeholder="Subject" id="subject" />
            </div>
            <textarea minLength={30} required  value={state.message} onChange={handleChange} id="textarea" name="message" placeholder="Message" defaultValue={""} />
            <button id="submit" type='submit'>Submit</button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Contact;
