'use client';

import StackedList from '@/components/display/StackedList'
import Hero from '@/components/display/Hero'
import TabList from '@/components/display/TabList';

import { homeStackedListButtons, homeTabListButtons }from '../constants/defaults'

export default function Home() {
  return (
    <>
      <Hero>
        <TabList buttons={homeTabListButtons}/>  
      </Hero>
      <StackedList buttons={homeStackedListButtons} /> 
    </>
  )
}