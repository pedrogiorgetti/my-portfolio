import { HiGlobeAlt } from 'react-icons/hi2';
import { IoLogoGithub } from 'react-icons/io5';

import Image from 'next/image';
import Link from 'next/link';

interface IPortfolioItemProps {
  imageUrl: string;
  link: string;
  projectName: string;
}

export function PortfolioItem({
  imageUrl,
  link,
  projectName,
}: IPortfolioItemProps) {
  return (
    <div className="w-full relative flex group overflow-hidden">
      <div className="relative w-full h-64">
        <Image
          alt={`${projectName} - Logo`}
          className="rounded-md object-cover mx-auto"
          fill
          src={imageUrl}
        />
      </div>

      <div className="flex bg-blue-primary/50 rounded-md p-4 opacity-0 duration-300 will-change-transform absolute left-2 bottom-0 right-2 translate-y-full transition-all group-hover:-translate-y-2 group-hover:opacity-100">
        <h4 className="flex-1 font-bold text-lg text-gray-100">
          {projectName}
        </h4>

        <div className="w-auto items-center flex gap-x-2">
          <Link
            className="text-gray-100 transition-all duration-300 hover:opacity-70"
            href={link}
            target="_blank"
          >
            <HiGlobeAlt size={20} />
          </Link>
          <Link
            className="text-gray-100 transition-all duration-300 hover:opacity-70"
            href={link}
            target="_blank"
          >
            <IoLogoGithub size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
}
