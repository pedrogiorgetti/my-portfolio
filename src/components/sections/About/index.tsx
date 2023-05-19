import usePageTransition from '@hooks/usePageTransition';
import { animated, useSpringRef } from '@react-spring/web';

import { SectionTitle } from '../utils/Title';
import { MyExperience } from './MyExperience';
import { MySkills } from './MySkills';
import { PersonalInfo } from './PersonalInfo';

export function AboutSection() {
  const transRef = useSpringRef();

  const { transitions } = usePageTransition({ transRef });

  return (
    <section className="min-h-screen w-screen relative px-8 max-w-7xl mx-auto">
      {transitions(style => (
        <animated.div className="will-change-transform" style={style}>
          <SectionTitle
            backgroundTitle="RESUME"
            primaryTitle="ABOUT "
            secondaryTitle="ME"
          />

          <PersonalInfo />

          <MySkills />

          <MyExperience />
        </animated.div>
      ))}
    </section>
  );
}
