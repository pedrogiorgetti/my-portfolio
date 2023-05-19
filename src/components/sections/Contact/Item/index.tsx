import { IconBaseProps } from 'react-icons/lib';

interface IContactItemProps {
  icon: React.ComponentType<IconBaseProps>;
  title: string;
  value: string;
}

export function ContactItem({ icon: Icon, title, value }: IContactItemProps) {
  return (
    <div className="flex gap-x-6 mb-6">
      <Icon className="text-blue-secondary" size={36} />

      <div className="grid">
        <span className="text-gray-300">{title.toUpperCase()}</span>
        <strong className="text-white">{value}</strong>
      </div>
    </div>
  );
}
