"use client"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Post from './Post';
import AboutMe from './AboutMe';
import Setting from './Setting';

const RightSide = () => {
  return (
    <div className='bg-white rounded-md p-6 shadow-md mt-4 flex gap-4'>
      <Tabs>
        <TabList >
          <Tab>Post</Tab>
          <Tab>About Me</Tab>
          <Tab>Setting</Tab>
        </TabList>

        <TabPanel >
          <h2><Post /></h2>
        </TabPanel>
        <TabPanel>
          <h2><AboutMe /></h2>
        </TabPanel>
        <TabPanel>
          <h2><Setting /></h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default RightSide;