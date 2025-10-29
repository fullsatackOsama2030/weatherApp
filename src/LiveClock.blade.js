import { useState, useEffect } from 'react';
import moment from 'moment';

const LiveClock = () => {
  const [currentTime, setCurrentTime] = useState(moment());

  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentTime(moment());
    }, 1000);
    return () => clearInterval(timerId);
  }, []);

  return (
    <>

        {currentTime.format('dddd D MMM , hh:mm:ss A')}
  
    </>
  );
};

export default LiveClock;
