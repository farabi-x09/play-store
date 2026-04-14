import React from 'react';
import { HashLoader } from 'react-spinners';

const loading = () => {
    return (
        <div>
            <div className="flex mt-20 justify-center items-center h-[40vh] font-bold text-5xl bg-purple-400">
        {/* <HashLoader color="#ad46ff" />  */}
        <p>Global lodaing....</p>
        </div>

        </div>
    );
};

export default loading;