import React from 'react';
import PropTypes from 'prop-types';
import setTimeFormat from '../../utils/helpers';

export const Controls = ({
  time,
  start,
  stop,
  reset,
  wait,
}) => (
  <>
    <header className="header">
      <h1 className="stopwatch caption">
        Stopwatch
      </h1>
      <h1 className="stopwatch clock">
        {setTimeFormat(time)}
      </h1>
    </header>
    <section className="main">
      <div className="case">
        <button type="button" className="button b_style" onClick={start}>
          Start
        </button>
        <button type="button" className="button b_style" onClick={stop}>
          Stop
        </button>
        <button type="button" className="button b_style" onClick={reset}>
          Reset
        </button>
        <button type="button" className="button b_style" onDoubleClick={wait}>
          Wait
        </button>
      </div>
    </section>
  </>
);

Controls.propTypes = {
  time: PropTypes.number.isRequired,
  start: PropTypes.func.isRequired,
  stop: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  wait: PropTypes.func.isRequired,
};
