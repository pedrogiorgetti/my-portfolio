interface IPersonalInfoCardProps {
  className?: string;
  title: string;
  value: number;
}

export function PersonalInfoCard({
  className = '',
  title,
  value,
}: IPersonalInfoCardProps) {
  return (
    <div
      className={`flex flex-col justify-center px-8 pb-4 rounded-lg border-[1px] border-gray-textLight w-44 h-32 sm:w-72 sm:h-40 sm:px-12 sm:pb-6 lg:w-72 lg:h-40 ${className}`}
    >
      <span className="text-blue-primary font-black relative text-4xl sm:text-5xl">
        {value}
        <small className="absolute top-0 text-2xl sm:text-3xl">+</small>
      </span>
      <span className="text-base text-gray-300 leading-5 max-w-[100px] mt-1 sm:text-lg">
        {title}
      </span>
    </div>
  );
}
