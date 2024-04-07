import './contact.css'
const Contact = () => {
  return (
    <div className="contact-wrapper">
      <div className="content-left">
        <div className="items email">
         <img src="./assets/email.png" alt="image" />
          <p>abc@example.com</p>
        </div>
        <div className="items address">
        <img src="./assets/address.png" alt="image" />
          <p>Address</p>
        </div>
        <div className="items phone">
        <img src="./assets/phone.png" alt="image" />
          <p>number</p>
        </div>
      </div>
      <div className="content-right">
        <h2>Contact Me</h2>
        <div className="form-wrapper">
          <div className="wrappers name-wrapper">
            <input type="text" className="name" placeholder="Enter your name" />
          </div>
          <div className="wrappers email-wrapper">
            <input type="email" className="email" placeholder="Enter your email" />
          </div>
          <div className="wrappers message-wrapper">
            <textarea
              name="message"
              className="mssg"
              placeholder="Message"
              defaultValue={""}
            />
          </div>
        </div>
        <div className="buttons">
          <button className="btn">Send Message</button>
        </div>
      </div>
    </div>

  )
}

export default Contact