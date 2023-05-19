import { useMemo } from 'react';

import { HiDocumentArrowDown } from 'react-icons/hi2';

import { ButtonComponent } from '@components/Button';

import { PersonalInfoCard } from './Card';
import { PersonalInfoItem } from './Item';

export function PersonalInfo() {
  const myAge = useMemo(() => {
    const birthDate = new Date(1997, 5, 24);
    const today = new Date();

    let calculatedAge = today.getFullYear() - birthDate.getFullYear();

    const is24June = today.getDate() >= 24 && today.getMonth() >= 5;

    if (!is24June) {
      calculatedAge -= 1;
    }

    const calculatedAgeFormatted = `${calculatedAge} years`;

    return calculatedAgeFormatted;
  }, []);

  const yearsOfExperience = useMemo(() => {
    const startYear = new Date(2017, 1, 1).getFullYear();
    const actuallyYear = new Date().getFullYear();

    const years = actuallyYear - startYear;

    return years;
  }, []);

  return (
    <div className="grid gap-2 lg:grid-cols-[1fr_.6fr] lg:w-full">
      <div>
        <div className="grid gap-6 grid-cols-2 justify-around mb-6 sm:w-fit sm:mx-auto sm:gap-x-16 lg:w-full lg:mb-12">
          <h3 className="text-2xl text-white font-bold grid col-span-2">
            PERSONAL INFOS
          </h3>

          <PersonalInfoItem label="First name" value="Pedro Arthur" />
          <PersonalInfoItem label="Last name" value="Giorgetti" />

          <PersonalInfoItem
            label="Email"
            value="dev.pedrogiorgetti@gmail.com"
          />

          <PersonalInfoItem label="Age" value={myAge} />
          <PersonalInfoItem label="Nationality" value="Brazilian" />
          <PersonalInfoItem label="Address" value="Brazil" />
          <PersonalInfoItem label="Languages" value="Portuguese, English" />

          <ButtonComponent
            className="mt-4 mx-auto w-fit col-span-2 lg:mx-0"
            icon={HiDocumentArrowDown}
          >
            Download
          </ButtonComponent>
        </div>
      </div>

      <div className="flex relative justify-between mt-8 mb-20 w-full sm:left-1/3 sm:-translate-x-[17%] lg:left-0 lg:mt-0 lg:mb-0">
        <PersonalInfoCard
          title="years of experience"
          value={yearsOfExperience}
        />
        <PersonalInfoCard
          className="absolute left-32 top-12 bg-background sm:left-56 sm:top-28 lg:left-40 lg:top-20"
          title="worked projects"
          value={10}
        />
      </div>
    </div>
  );
}
