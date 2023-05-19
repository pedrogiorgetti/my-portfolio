import { HiEnvelopeOpen, HiMapPin } from 'react-icons/hi2';

import usePageTransition from '@hooks/usePageTransition';
import { animated, useSpringRef } from '@react-spring/web';

import { SectionTitle } from '../utils/Title';
import { ContactForm } from './Form';
import { ContactItem } from './Item';

export function ContactSection() {
  const transRef = useSpringRef();

  const { transitions } = usePageTransition({ transRef });

  return (
    <section className="min-h-screen w-screen overflow-x-hidden relative">
      {transitions(style => (
        <animated.div
          className="will-change-transform max-w-7xl mx-auto"
          style={style}
        >
          <SectionTitle
            backgroundTitle="CONTACT"
            primaryTitle="GET IN"
            secondaryTitle="TOUCH"
          />

          <div className="grid gap-x-8 px-4 sm:px-12 lg:grid-cols-[auto_1fr]">
            <div className="lg:max-w-xs pb-4">
              <h3 className="pb-4 text-2xl text-white font-bold">
                DON'T BE SHY!
              </h3>

              <p className="pb-4 text-base text-white lg:pb-8">
                Feel free to get in touch with me. I am always open to
                discussing new projects, creative ideas or opportunities to be
                part of your visions.
              </p>

              <div className="w-full sm:grid sm:grid-cols-[auto_auto] lg:block">
                <ContactItem
                  icon={HiMapPin}
                  title="Location"
                  value="Brussels - Belgium"
                />
                <ContactItem
                  icon={HiEnvelopeOpen}
                  title="Mail me"
                  value="dev.pedrogiorgetti@gmail.com"
                />
              </div>
            </div>

            <ContactForm />
          </div>
        </animated.div>
      ))}
    </section>
  );
}
