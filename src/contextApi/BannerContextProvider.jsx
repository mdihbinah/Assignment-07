'use client'
import { useState } from 'react';
import { BannerContext } from './UserContext';

const BannerContextProvider = ({children}) => {
    const [stats, setStats] = useState([0,0,0,0])
    return (
        <div>
            <BannerContext.Provider value={{stats, setStats}}>
                {children}
            </BannerContext.Provider>
        </div>
    );
};

export default BannerContextProvider;