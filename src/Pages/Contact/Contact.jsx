import './contact.css'

export default function Contact() {
  return (
    <div class="contact-wrapper">
      <div class="content-right">
        <div class="item address">
          <img src="/assets/icons8-address-64.png" alt="" />
          <p>Thumalavari street kavali, Nellore,Andhra Pradesh</p>
        </div>
        <div class="item email">
        <img src="/assets/icons8-email-48.png" alt="" />
          <p>abc@example.com</p>
        </div>
        <div class="item phone">
        <img src="/assets/icons8-phone-48.png" alt="" />
          <p>number</p>
        </div>
      </div>
      <div class="content-left">
        <h2>Contact Me</h2>

        <div class="form-wrapper">
          <form class="form-fields">
            <div class="name-wrapper"><input type="text" className="name" placeholder="Enter your name" /></div>
            <div class="email-wrapper"><input type="email" className="email" placeholder="Enter your email" /></div>
            <div class="message-wrapper"><textarea className="mssg" name="Message" placeholder='Message'></textarea></div>
          </form>
        </div>
        <div class="buttons">
          <button class="btn">Send</button>
        </div>
      </div>
    </div>
  )
}
