import React, { useEffect, useState } from 'react';
import DesktopView from './desktopView/DesktopView';
import MobileView from './mobileView/MobileView';
import './ResponsiveTable.css';





export default function ResponsiveTable(props) {
  //Finding out of screen width===========================================
  const { headings, rows } = props;

  const [screenSize, getDimension] = useState({
    dynamicWidth: window.innerWidth,
  });

  const setDimension = () => {
    getDimension({
      dynamicWidth: window.innerWidth,
    })
  }

  useEffect(() => {
    window.addEventListener('resize', setDimension);
    return (() => {
      window.removeEventListener('resize', setDimension);
    })
  }, [screenSize])

  let windowSize = screenSize.dynamicWidth;
  //========================================================================





  return (
    <div className="responsive-table-container">
      {
        windowSize > 750 ? <DesktopView headings={headings} rows={rows} /> : <MobileView rows={rows} />
      }
    </div>
  );
}