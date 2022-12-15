import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import ContactForm from '../../components/contactForm';
const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen px-4 bg-cover bg-contact bg-right text-center transition duration-500 pt-8"
    >
      <div className="max-w-screen-md mx-auto bg-darkBlue/50 text-white p-8 rounded-lg -z-10">
        <h1 className="text-center title mb-16 text-4xl ">Contact Me</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className=" flex flex-col justify-center">
            <h3 className="text-center text-2xl">
              Want to work together or have any questions?
            </h3>
            <ContactForm />
          </div>

          <div className="flex flex-col justify-center">
            <h2 className="text-2xl mb-8"> Follow me on: </h2>
            <div className="flex justify-center items-center text-4xl space-x-4">
              <a
                className="text-inherit transition duration-500 hover:text-primary scale-115"
                href="https://www.linkedin.com/in/youssef-sabbagh/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>
              <a
                className="text-inherit transition duration-500 hover:text-primary scale-115"
                href="https://github.com/YoussefSabbagh"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>
              <a
                className="text-inherit transition duration-500 hover:text-primary scale-115"
                href="https://twitter.com/TaguaraDigital"
                target="_blank"
                rel="noreferrer"
              >
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
