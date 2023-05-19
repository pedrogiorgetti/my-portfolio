interface IPersonalInfoItemProps {
  label: string;
  value: string;
}

export function PersonalInfoItem({ label, value }: IPersonalInfoItemProps) {
  return (
    <div>
      <span className="text-gray-300">
        {label}:{' '}
        <b className="block text-white font-bold break-words">{value}</b>
      </span>
    </div>
  );
}
