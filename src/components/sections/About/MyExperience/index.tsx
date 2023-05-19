import myExperiences from '@constants/myExperiences';

import { MyExperienceItem } from './Item';

export function MyExperience() {
  return (
    <div className="text-white w-full mt-28 mb-12">
      <h3 className="pb-16 text-2xl font-bold text-center">
        EXPERIENCE & EDUCATION
      </h3>

      <div className="grid sm:grid-cols-2 gap-y-20 gap-x-10">
        {myExperiences.map(experience => (
          <MyExperienceItem
            experience={experience}
            key={experience.companyName}
          />
        ))}
      </div>
    </div>
  );
}
