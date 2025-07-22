"use client"
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';

const reactTabs = () => {
    return (
        <div className="container mx-auto mt-5">
            <Tabs>
                <TabList>
                    <Tab>Tab 1</Tab>
                    <Tab>Tab 2</Tab>
                    <Tab>Tab 3</Tab>
                </TabList>
                <TabPanel>Content for Tab 1</TabPanel>
                <TabPanel>Content for Tab 2</TabPanel>
                <TabPanel>Content for Tab 3</TabPanel>
            </Tabs>
        </div>
    )
}

export default reactTabs;