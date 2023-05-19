import usePageTransition from '@hooks/usePageTransition';
import { animated, useSpringRef } from '@react-spring/web';

import { SectionTitle } from '../utils/Title';
import { PortfolioItem } from './Item';

export function PortfolioSection() {
  const transRef = useSpringRef();

  const { transitions } = usePageTransition({ transRef });

  return (
    <section className="min-h-screen h-full w-screen overflow-x-hidden relative">
      {transitions(style => (
        <animated.div
          className="will-change-transform max-w-7xl mx-auto"
          style={style}
        >
          <SectionTitle
            backgroundTitle="WORKS"
            primaryTitle="MY "
            secondaryTitle="PORTFOLIO"
          />

          <div className="grid gap-4 px-4 pb-24 sm:px-8 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <PortfolioItem
              imageUrl="https://www.seiu1000.org/sites/main/files/main-images/camera_lense_0.jpeg"
              link=""
              projectName="Project Name"
            />
            <PortfolioItem
              imageUrl="https://www.seiu1000.org/sites/main/files/main-images/camera_lense_0.jpeg"
              link=""
              projectName="Project Name"
            />
            <PortfolioItem
              imageUrl="https://www.seiu1000.org/sites/main/files/main-images/camera_lense_0.jpeg"
              link=""
              projectName="Project Name"
            />
            <PortfolioItem
              imageUrl="https://www.seiu1000.org/sites/main/files/main-images/camera_lense_0.jpeg"
              link=""
              projectName="Project Name"
            />
          </div>
        </animated.div>
      ))}
    </section>
  );
}
