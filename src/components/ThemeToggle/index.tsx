import { HiSun } from 'react-icons/hi2';

export function ThemeToggleComponent() {
  return (
    <button
      aria-label="Theme toggle button"
      className="
        bg-gray-dark
        text-white
        rounded-full
        w-12
        h-12
        flex
        items-center
        justify-center
        fixed
        top-6
        right-8
        transition-all
        duration-300
        hover:bg-gray-text
      "
      type="button"
    >
      <HiSun size={24} />
    </button>
  );
}
