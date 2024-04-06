import './contact.css'

export default function Contact() {
  return (
    <div className="contact-wrapper">
      <div className="content-right">
        <div className="item address">
          <img src="/assets/icons8-address-64.png" alt="" />
          <p>Thumalavari street kavali, Nellore,Andhra Pradesh</p>
        </div>
        <div className="item email">
        <img src="/assets/icons8-email-48.png" alt="" />
          <p>abc@example.com</p>
        </div>
        <div className="item phone">
        <img src="/assets/icons8-phone-48.png" alt="" />
          <p>number</p>
        </div>
      </div>
      <div className="content-left">
        <h2>Contact Me</h2>

        <div className="form-wrapper">
          <form className="form-fields">
            <div className="name-wrapper"><input type="text" className="name" placeholder="Enter your name" /></div>
            <div className="email-wrapper"><input type="email" className="email" placeholder="Enter your email" /></div>
            <div className="message-wrapper"><textarea className="mssg" name="Message" placeholder='Message'></textarea></div>
          </form>
        </div>
        <div className="buttons">
          <button className="btn">Send</button>
        </div>
      </div>
    </div>
  )
}
