import React from 'react';
import { TransitionMotion, spring } from 'react-motion';

const willEnter = () => ({
  opacity: 0,
  scale: 1
});

const willLeave = () => ({
  opacity: spring(0, {stiffness: 250, damping: 50}),
  scale: spring(1)
});

const getStyles = () => ({
  opacity: spring(1, {stiffness: 90, damping: 50}),
  scale: spring(1)
});

const Test2 = ({ children: child, element }) => (

  <TransitionMotion
    styles={ [{
      key: element.toString(),
      style: getStyles(),
      data: { child }
    }] }
    willEnter={ willEnter }
    willLeave={ willLeave }
  >
    { (interpolated) =>
      <div>
        { interpolated.map(({ key, style, data }) =>
          <div
            key={ `${key}-transition` }
            style={ {
              ...styles.wrapper,
              opacity: style.opacity,
              transform: `scale(${style.scale})`,

            } }
          >

            { data.child }
          </div>
        ) }
      </div>
    }
  </TransitionMotion>
);

var styles = {
  wrapper: {
    position: 'absolute',
    width: "calc(100% - 405px)",
    display: 'flex'
  }
};

export default Test2;
