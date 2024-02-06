import { ContactForm } from "@/components/form/ContactForm";

export default function Contact() {

  return (
    <div className="w-full h-full">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div className="px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-32">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <h2 className="text-3xl font-bold text-blue-700">Contact Us</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Feel free to contact us, we will get back to you as soon as
              possible.
            </p>
          </div>
        </div>
        <ContactForm />
      </div>
    </div>
  );
}
