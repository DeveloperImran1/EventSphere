"use client"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Post from './Post';
import AboutMe from './AboutMe';
import Review from './Review';

const RightSide = () => {
  return (
    <div className='bg-white rounded-md  shadow-md mt-4 flex gap-4'>
      <Tabs className="max-w-md lg:max-w-xl mt-4 mx-auto bg-white rounded-lg space-y-6">
        <TabList >
          <Tab>Post</Tab>
          <Tab>About Me</Tab>
          <Tab>Review</Tab>
        </TabList>

        <TabPanel >
          <Post />
        </TabPanel>
        <TabPanel>
          <AboutMe />
        </TabPanel>
        <TabPanel>
          <Review />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default RightSide;