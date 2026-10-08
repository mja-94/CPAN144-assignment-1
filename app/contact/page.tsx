import ContactForm from '../components/ContactForm';

export default function ContactPage() {
  return (
    <div>
      <h1>Contact Page</h1>
      <p>Fill out the form and press Send.</p>

      <ContactForm title="Send Us a Message" />
    </div>
  );
}