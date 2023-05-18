import React from 'react';
import Timer from '../components/Timer';

const Main = () => {
  const [seconds, setSeconds] = React.useState(0);
  const fixSeconds = Number(seconds.toString().replace(/[^0-9,\s]/g, ''));

  const createTimerAnimator = (sec) => {
    let interv = setInterval(() => {
      setSeconds(sec - 1);
      sec = sec - 1;
      if (sec <= 0) clearInterval(interv);
    }, 1000);
  };

  return (
    <>
      <input
        onChange={(event) => setSeconds(event.target.value)}
        placeholder="Seconds"
        type="text"
      />
      <button onClick={() => createTimerAnimator(fixSeconds)}>Start</button>
      <br />
      <br />
      <Timer seconds={fixSeconds} />
    </>
  );
};

export default Main;
