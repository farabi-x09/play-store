import React from 'react';

const layout = ({children}) => {
    return (
        <div className='flex justify-between items-center container mx-auto gap-5'>
            <div className='bg-blue-400 w-50 h-[80vh] items-center flex justify-center '>Sidber</div>
            {children}

        </div>
    );
};

export default layout;