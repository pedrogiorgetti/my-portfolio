import { ButtonHTMLAttributes } from 'react';

import { IconBaseProps } from 'react-icons/lib';

interface IButtonComponentProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  icon?: React.ComponentType<IconBaseProps>;
}

export function ButtonComponent({
  children,
  className = '',
  icon: Icon,
  ...rest
}: IButtonComponentProps) {
  return (
    <button
      className={`rounded-full flex items-center h-[54px] pl-9 pr-20 text-base leading-6 font-bold text-white border-blue-secondary border-[1px] overflow-hidden relative transition ease-in-out duration-200 hover:before:translate-x-0 hover:before:bg-blue-secondary before:-z-[1] before:content-[''] before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:translate-x-full before:transition before:ease-out before:duration-300 ${className}`}
      type="button"
      {...rest}
    >
      {children}
      {Icon && (
        <span className="rounded-full h-[54px] w-[54px] flex items-center justify-center absolute -right-[1px] bg-blue-secondary">
          <Icon size={24} />
        </span>
      )}
    </button>
  );
}
