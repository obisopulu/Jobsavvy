'use client';

import StackedList from '@/components/display/StackedList'
import Hero from '@/components/display/Hero'
import TabList from '@/components/display/TabList';

import { useToggle, useToggleTabList } from '@/hooks/hooks';

import { homeStackedListButtons, optionsTabListButtons }from '@/constants/defaults'
import Offcanvas from '@/components/display/Offcanvas';
import Header from '@/components/display/Header';

import { jobs } from '@/constants/defaults';

export default function Home() {
  const [isActive, toggleActive] = useToggle(false);
  const [tabList, setTabList] = useToggleTabList('settings');

  return (
    <>
      <Header />
      <Hero>
        <TabList buttons={optionsTabListButtons(setTabList)}/>  
      </Hero>
      {tabList != 'settings' && <StackedList jobs={jobs} buttons={homeStackedListButtons(toggleActive)} />}
      <Offcanvas isOpen={isActive} onClose={() => toggleActive()} buttons={homeStackedListButtons(toggleActive)} /> 
    </>
  )
}