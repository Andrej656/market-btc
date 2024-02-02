import React, { createContext, useEffect, useState } from 'react';
import footerWidget from '../data/footer-widget';

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [videoShow, setVideoShow] = useState(false);
  const handleVideoClose = () => setVideoShow(false);
  const handleVideoShow = () => setVideoShow(true);
  const [showSidebar,setShowSidebar] = useState(false);

  const value = {
    footerWidget,
    videoShow,
    handleVideoShow,
    handleVideoClose,
    showSidebar,
    setShowSidebar,
  }
  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;