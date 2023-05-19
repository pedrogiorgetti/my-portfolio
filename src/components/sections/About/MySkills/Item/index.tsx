import { IsVisibleComponent } from '@components/utils/IsVisible';
import { IMySkill } from '@constants/mySkills';

interface IMySkillsItemProps {
  skill: IMySkill;
}

export function MySkillsItem({ skill }: IMySkillsItemProps) {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="bg-background relative flex flex-col items-center justify-center rounded-full h-28 w-28 before:content-[''] before:w-32 before:h-32 before:absolute before:animate-spin  before:rounded-full before:bg-gradient-to-r to-blue-400 from-blue-primary before:-z-10">
        <b className="flex flex-col items-center text-2xl">
          <IsVisibleComponent when={skill.years > 0}>
            {skill.years}
            <small className="text-base font-medium">years</small>
          </IsVisibleComponent>
          <IsVisibleComponent when={skill.years === 0}>
            <small className="text-base font-medium">Learning</small>
          </IsVisibleComponent>
        </b>
      </div>
      <span className="mt-4 text-center text-xs sm:text-sm lg:text-base">
        {skill.name.toUpperCase()}
      </span>
    </div>
  );
}
