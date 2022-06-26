import { useForm, ValidationError } from '@formspree/react';



function ContactForm() {
  const [state, handleSubmit] = useForm("meqnwroe");
  if (state.succeeded) {
      return <h2>Thanks for contacting us, we'll get back to you as soon as we can!</h2>;
  }
  return (
    <div className='form-container'>
      <h2>Get in touch with us</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            placeholder='Your Email'
            id="email"
            type="email" 
            name="email"
          />
          <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
          />
        </div>

        <div>
        <textarea
        placeholder='Your message for us'
            id="message"
            name="message"
          />
          <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
          />
        </div>

        <div>
          <button type="submit" disabled={state.submitting}>
            Submit
          </button>
        </div>
      </form>
    </div>
      
  );
}

function Contact() {
  return(
    <ContactForm />
  )
}
  
  export default Contact;