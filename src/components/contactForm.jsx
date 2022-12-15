import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { schema } from './userMailValidations';

const ContactForm = () => {
  const [isSending, setIsSending] = useState(false);

  const intialValues = {
    user_name: '',
    subject: '',
    email: '',
    message: '',
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: intialValues,
    mode: 'all',
  });

  const onSubmit = (valores) => {
    setIsSending(true);
    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID,
        valores,
        process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          setIsSending(false);
          reset();
        },
        (err) => {
          console.log('FAILED...', err);
          setIsSending(false);
        }
      );
  };

  return (
    <div className="shadow-lg shadow-darkBlue p-8">
      <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex items-center">
          <label htmlFor="user_name" className=" mr-2">
            Name:
          </label>
          <input
            {...register('user_name')}
            placeholder="Name:"
            className="w-full text-white px-2 py-2 outline-none border-transparent focus:border-darkBlue border-b-4 rounded-md transition duration-500 bg-darkBlue/20"
          />
        </div>
        <p className="text-sm text-danger mb-2">{errors.user_name?.message}</p>
        <div className="flex items-center">
          <label htmlFor="subject" className=" mr-2">
            Subject:
          </label>
          <input
            {...register('subject')}
            placeholder="Subject:"
            className="w-full text-white px-2 py-2 outline-none border-transparent focus:border-darkBlue border-b-4 rounded-md transition duration-500 bg-darkBlue/20"
          />
        </div>
        <p className="text-sm text-danger mb-2">{errors.subject?.message}</p>
        <div className="flex items-center">
          <label htmlFor="email" className=" mr-2">
            Email:
          </label>
          <input
            {...register('email')}
            placeholder="Email:"
            className="w-full text-white px-2 py-2 outline-none border-transparent focus:border-darkBlue border-b-4 rounded-md transition duration-500 bg-darkBlue/20"
          />
        </div>
        <p className="text-sm text-danger mb-2">{errors.email?.message}</p>
        <div className="flex items-center">
          <label htmlFor="messaje" className=" mr-2">
            Messaje:
          </label>
          <textarea
            {...register('message')}
            cols="30"
            rows="5"
            placeholder="Message"
            className="w-full text-white px-2 py-2 outline-none border-transparent focus:border-darkBlue border-b-4 rounded-md transition duration-500 bg-darkBlue/20"
          ></textarea>
        </div>
        <p className="text-sm text-danger mb-2">{errors.message?.message}</p>
        {!isSending && (
          <button
            type="submit"
            className="px-4 py-2 w-1/3 mx-auto mt-4 bg-darkBlue text-white hover:bg-darkBlue/75 rounded-md"
          >
            Submit
          </button>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
