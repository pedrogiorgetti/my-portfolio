import mySkills from '@constants/mySkills';

import { MySkillsItem } from './Item';

export function MySkills() {
  return (
    <div className="text-white w-full mt-16">
      <h3 className="pb-16 text-2xl font-bold text-center">MY SKILLS</h3>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-10">
        {mySkills.map(skill => (
          <MySkillsItem key={skill.name} skill={skill} />
        ))}
      </div>
    </div>
  );
}
