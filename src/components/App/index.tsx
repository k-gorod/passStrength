import Form from 'components/Form';
import React, { useEffect, useState } from 'react';

import './index.scss';

interface IWindowSize {
  width: number;
  height: number;
}

const App: React.FC = () => {
  const [windowSize, setWindowSize] = useState<IWindowSize>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, []);

  return (
    <div
      className="app_container"
      style={{
        height: windowSize.height,
      }}
    >
      <Form />
    </div>
  );
};

export default App;
