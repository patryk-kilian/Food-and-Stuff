import { useEffect } from 'react';
import React from 'react';

const ScrollToTop = ({ children, location }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return children;
};

export default ScrollToTop;
