import TrendingApps from '@/components/homepage/TrendingApps';
import React from 'react';

export const metadata = {
  title: "Apps Page",
  description: "",
};
const AppsPage = () => {
    return (
        <div>
            <h1>this is app page</h1>
            <TrendingApps from="apps"></TrendingApps>
        </div>
    );
};

export default AppsPage;