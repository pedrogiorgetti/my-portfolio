import { HiAcademicCap, HiBriefcase } from 'react-icons/hi2';

import { IsVisibleComponent } from '@components/utils/IsVisible';
import { IMyExperience } from '@constants/myExperiences';

interface IMyExperienceItemProps {
  experience: IMyExperience;
}

export function MyExperienceItem({ experience }: IMyExperienceItemProps) {
  return (
    <div className="grid grid-cols-[auto_1fr] gap-x-4">
      <div className="relative flex justify-center h-fit">
        <span className="flex items-center justify-center w-10 h-10 bg-blue-secondary rounded-full">
          <IsVisibleComponent when={!experience.isEducation}>
            <HiBriefcase size={20} />
          </IsVisibleComponent>
          <IsVisibleComponent when={experience.isEducation}>
            <HiAcademicCap size={20} />
          </IsVisibleComponent>
        </span>
        <span className="absolute top-full translate-y-8 rotate-90 bg-gray-50 h-[1px] w-20 -z-[1]" />
      </div>
      <div>
        <span className="bg-gray-dark mb-3 flex max-w-fit px-2 h-6 text-xs font-semibold text-gray-300 rounded-full items-center justify-center">
          {experience.period}
        </span>
        <div className="grid gap-y-3">
          <h4 className="font-bold text-white text-base">
            {experience.title.toUpperCase()}
            <small className="text-gray-300 ">
              {' '}
              - {experience.companyName.toUpperCase()}
            </small>
          </h4>
          <p className="text-base relative text-gray-50 max-w-[90%] transition-all">
            {experience.resume}
          </p>
        </div>
      </div>
    </div>
  );
}
