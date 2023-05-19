import { HiArrowSmallRight } from 'react-icons/hi2';

import Image from 'next/image';

import { ButtonComponent } from '@components/Button';
import usePageTransition from '@hooks/usePageTransition';
import { animated, useSpringRef } from '@react-spring/web';

export function HomeSection() {
  const transRef = useSpringRef();

  const { transitions } = usePageTransition({ transRef });

  return (
    <section className="min-h-screen w-screen overflow-hidden max-h-screen relative">
      {transitions(style => (
        <animated.div className="will-change-transform px-4" style={style}>
          <div className="hidden lg:flex fixed h-[200%] w-full -left-[80%] -top-1/2 -rotate-12 bg-blue-secondary -z-[-1]" />

          <div className="flex flex-col justify-center items-center h-screen w-full lg:flex-row">
            <Image
              alt=""
              className="rounded-full border-2 border-gray-dark h-56 w-56 mb-6"
              src=""
            />

            <div className="w-full lg:w-4/6 lg:ml-[33%]">
              <div className="w-full lg:max-w-xl mx-auto">
                <h1
                  className="
                  text-blue-secondary
                  text-2xl
                  text-center
                  font-black
                  relative
                  leading-[1.25]

                  before:hidden
                  before:content-['']
                  before:bg-blue-secondary
                  before:absolute
                  before:left-0
                  before:h-1
                  before:w-10
                  before:rounded-lg
                  before:top-5

                  lg:text-4xl
                  lg:pl-16
                  lg:before:block
                  lg:text-left
                "
                >
                  I'M PEDRO GIORGETTI.
                  <span className="flex text-white justify-center w-full lg:w-fit">
                    FRONT-END DEVELOPER
                  </span>
                </h1>

                <p className="text-white text-base mt-4 mb-7 leading-7 text-center max-w-lg mx-auto lg:leading-9 lg:text-left">
                  I'm a Brazilian based front-end developer focused on crafting
                  clean, user-friendly and visually appealing, passionate about
                  creating websites and software that provides the user with a
                  smooth and intuitive experience.
                </p>

                <ButtonComponent
                  className="mx-auto lg:mx-0"
                  icon={HiArrowSmallRight}
                >
                  MORE ABOUT ME
                </ButtonComponent>
              </div>
            </div>
          </div>
        </animated.div>
      ))}
    </section>
  );
}
