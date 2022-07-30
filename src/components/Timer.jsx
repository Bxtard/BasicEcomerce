import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function Timer({ setBool }) {
  const [seconds, setSeconds] = useState(Math.floor(Math.random() * 59));
  const [minutes, setMinutes] = useState(Math.floor(Math.random() * 3));
  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds === 0) {
        if (minutes === 0) {
          setBool(false);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      } else {
        setSeconds(seconds - 1);
      }
      clearInterval(interval);
    }, 1000);
  }, [seconds, minutes]);

  const min = minutes<10 ? `0${minutes}`:`${minutes}`
  const sec = seconds<10 ? `0${seconds}`:`${seconds}`
  /* return <h4>{`${minutes} : ${seconds}`}</h4>; */
  return <h4>{ `${min}:${sec}`}</h4>;
}

Timer.propTypes = {
  setBool: PropTypes.func.isRequired,
};
export default Timer;
