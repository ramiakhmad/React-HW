import React, { useRef, useEffect } from 'react';

function ValueDisplay({ value }) {
  const previousValue = useRef(value);

  useEffect(() => {
    previousValue.current = value;
  }, [value]);

  return (
    <div>
      <p>Current Value: {value}</p>
      <p>Previous Value: {previousValue.current}</p>
    </div>
  );
}

export default ValueDisplay;