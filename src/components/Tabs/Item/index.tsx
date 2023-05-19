import { IconBaseProps } from 'react-icons/lib';

import { ETabName } from '@enum/tabName';
import clsx from 'clsx';

interface ITabItemProps {
  active: boolean;
  icon: React.ComponentType<IconBaseProps>;
  title: ETabName;
}

export function TabItem({ active, icon: Icon, title }: ITabItemProps) {
  return (
    <div
      className={clsx(
        'group',
        'text-white relative flex items-center justify-center rounded-full w-11 h-11 lg:w-12 lg:h-12',
        'transition-all duration-300 hover:bg-blue-secondary',
        {
          'bg-blue-secondary': active,
          'bg-gray-dark': !active,
        },
      )}
    >
      <Icon size={22} />
      <h2
        className="
          hidden
          lg:flex
          bg-blue-secondary
          h-12
          pr-[25px]
          pl-[30px]
          rounded-[30px]
          leading-[48px]
          right-0
          top-0
          absolute
          opacity-0
          uppercase
          transition-all
          duration-300
          -z-10
          group-hover:right-6
          group-hover:rounded-none
          group-hover:rounded-tl-[30px]
          group-hover:rounded-bl-[30px]
          group-hover:opacity-100
        "
      >
        {title}
      </h2>
    </div>
  );
}
