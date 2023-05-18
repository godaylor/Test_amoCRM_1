import React from 'react';

const Timer = ({ seconds }) => {
  let minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  minutes = minutes - hours * 60;
  seconds = seconds - (minutes + hours * 60) * 60;

  const hoursStr = (hours) => {
    if (hours > 9) return hours;
    else return '0' + hours.toString();
  };
  const minutesStr = (minutes) => {
    if (minutes > 9) return minutes;
    else return '0' + minutes.toString();
  };
  const secondsStr = (seconds) => {
    if (seconds > 9) return seconds;
    else return '0' + seconds.toString();
  };

  return (
    <span>
      {hours ? hoursStr(hours) : 'hh'}:{minutes || hours ? minutesStr(minutes) : 'mm'}:
      {seconds || minutes || hours ? secondsStr(seconds) : 'ss'}
    </span>
  );
};

export default Timer;
