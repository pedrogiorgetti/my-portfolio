import { IsVisibleComponent } from '@components/utils/IsVisible';

interface ISectionTitleProps {
  backgroundTitle?: string;
  primaryTitle: string;
  secondaryTitle: string;
}

export function SectionTitle({
  backgroundTitle,
  primaryTitle,
  secondaryTitle,
}: ISectionTitleProps) {
  return (
    <div
      className="
        mx-auto
        w-full
        relative
        py-14
        text-center
        lg:py-20
      "
    >
      <h2
        className="
          font-black
          uppercase
          text-white 
          text-4xl
          lg:text-5xl
        "
      >
        {primaryTitle}
        <span className="text-blue-secondary">{secondaryTitle}</span>
      </h2>
      <IsVisibleComponent when={!!backgroundTitle}>
        <span
          className="
            text-gray-dark
            text-6xl
            opacity-50
            font-extrabold
            text-center
            leading-[0.7]
            tracking-[10px]
            absolute
            left-0
            right-0
            top-2/4
            -translate-y-2/4
            -z-[2]
            lg:text-8xl
          "
        >
          {backgroundTitle}
        </span>
      </IsVisibleComponent>
    </div>
  );
}
