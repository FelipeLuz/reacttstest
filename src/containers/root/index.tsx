import React, { Component } from "react";
import { Table } from "./components/table";
import { TableBest } from "./components/tableBest";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

export const Root: React.FC = () => {
    return (
        <Tabs>
            <TabList>
                <Tab>All</Tab>
                <Tab>Best</Tab>
            </TabList>

            <TabPanel>
                <Table />
            </TabPanel>
            <TabPanel>
                <TableBest />
            </TabPanel>
        </Tabs>

    )
};