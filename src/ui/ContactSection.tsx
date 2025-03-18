import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="row-start-6 mt-16 col-span-13 flex flex-col gap-8 mb-25"
    >
      <h1 className="text-4xl text-center">CONTACT</h1>
      <div className="grid grid-cols-12 gap-4">
        <ContactForm />
      </div>
    </section>
  );
}
