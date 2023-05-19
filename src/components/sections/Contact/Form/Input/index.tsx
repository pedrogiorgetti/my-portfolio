interface IFormInputProps {
  name: string;
  placeholder: string;
}

export function FormInput({ name, placeholder }: IFormInputProps) {
  return (
    <input
      autoComplete="none"
      className="bg-gray-800/40 text-gray-200 py-3 px-6 rounded-full transition-all duration-300 outline-none focus:border-blue-secondary border-[2px] border-transparent placeholder:text-gray-600"
      name={name}
      placeholder={placeholder.toUpperCase()}
      type="text"
    />
  );
}
