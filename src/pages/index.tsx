import { useCallback } from 'react';

import { HiBriefcase, HiEnvelopeOpen, HiHome, HiUser } from 'react-icons/hi2';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

import { AboutSection } from '@components/sections/About';
import { ContactSection } from '@components/sections/Contact';
import { HomeSection } from '@components/sections/Home';
import { PortfolioSection } from '@components/sections/Portfolio';
import { TabItem } from '@components/Tabs/Item';
import { ThemeToggleComponent } from '@components/ThemeToggle';
import { tabs } from '@constants/tabs';
import { ETabName } from '@enum/tabName';
import { useReduxDispatch } from '@hooks/useReduxDispatch';
import { useReduxSelector } from '@hooks/useReduxSelector';
import { tabActions } from '@store/slices/tabs';

export default function Index() {
  const reduxDispatch = useReduxDispatch();
  const activeTab = useReduxSelector(state => state.tab.active);

  const handleSelectTab = useCallback(
    (position: number) => {
      reduxDispatch(
        tabActions.setActiveTab({
          tabName: tabs[position],
        }),
      );
    },
    [reduxDispatch],
  );

  return (
    <div className="w-screen min-h-screen">
      <ThemeToggleComponent />

      <Tabs
        onSelect={index => handleSelectTab(index)}
        selectedIndex={tabs.findIndex(tab => tab === activeTab)}
      >
        <header className="bg-background border-t border-t-blue-secondary w-full px-2 py-4 justify-center fixed bottom-0 right-2/4 translate-x-1/2 flex items-center z-50 lg:bg-transparent lg:border-t-0 lg:w-fit lg:right-12 lg:top-2/4 lg:-translate-y-1/2">
          <TabList className="flex gap-x-10 lg:flex-col lg:gap-y-6">
            <Tab className="ring-blue-primary rounded-full cursor-pointer">
              <TabItem
                active={activeTab === ETabName.Home}
                icon={HiHome}
                title={ETabName.Home}
              />
            </Tab>
            <Tab className="ring-blue-primary rounded-full cursor-pointer">
              <TabItem
                active={activeTab === ETabName.About}
                icon={HiUser}
                title={ETabName.About}
              />
            </Tab>
            <Tab className="ring-blue-primary rounded-full cursor-pointer">
              <TabItem
                active={activeTab === ETabName.Portfolio}
                icon={HiBriefcase}
                title={ETabName.Portfolio}
              />
            </Tab>
            <Tab className="ring-blue-primary rounded-full cursor-pointer">
              <TabItem
                active={activeTab === ETabName.Contact}
                icon={HiEnvelopeOpen}
                title={ETabName.Contact}
              />
            </Tab>
          </TabList>
        </header>

        <TabPanel>
          <HomeSection />
        </TabPanel>

        <TabPanel>
          <AboutSection />
        </TabPanel>

        <TabPanel>
          <PortfolioSection />
        </TabPanel>

        <TabPanel>
          <ContactSection />
        </TabPanel>
      </Tabs>
    </div>
  );
}
