"use client"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Post from './Post';
import AboutMe from './AboutMe';
import Review from './Review';

const RightSide = () => {
  return (
    <div className='bg-white rounded-md p-6 shadow-md mt-4 flex gap-4'>
      <Tabs>
        <TabList >
          <Tab>Post</Tab>
          <Tab>About Me</Tab>
          <Tab>Review</Tab>
        </TabList>

        <TabPanel >
          <h2><Post /></h2>
        </TabPanel>
        <TabPanel>
          <h2><AboutMe /></h2>
        </TabPanel>
        <TabPanel>
         <div className='max-w-[500px] '>
         <Review/>
         </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default RightSide;