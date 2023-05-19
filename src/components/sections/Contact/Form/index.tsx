import { HiPaperAirplane } from 'react-icons/hi2';

import { ButtonComponent } from '@components/Button';

import { FormInput } from './Input';

export function ContactForm() {
  return (
    <form className="flex flex-col gap-y-4 pb-28">
      <div className="grid grid-cols-2 gap-x-4">
        <FormInput name="" placeholder="Your name" />
        <FormInput name="" placeholder="Your email" />
      </div>
      <FormInput name="" placeholder="Your subject" />
      <textarea
        className="bg-gray-800/40 resize-none text-gray-200 py-4 px-6 rounded-[32px] border-transparent transition-all duration-300 outline-none focus:border-blue-secondary border-[2px] placeholder:text-gray-600 placeholder:uppercase "
        cols={30}
        id=""
        name=""
        placeholder="Your message"
        rows={8}
      />

      <div className="max-w-fit ml-auto lg:ml-0 lg:mt-4">
        <ButtonComponent icon={HiPaperAirplane}>SEND MESSAGE</ButtonComponent>
      </div>
    </form>
  );
}
