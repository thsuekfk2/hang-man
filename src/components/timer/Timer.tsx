import useInterval from 'hooks/useInterval';
import { useState } from 'react';

interface Props {
  start?: boolean;
}

export function Timer({ start }: Props) {
  const [second, setSecond] = useState(10);

  useInterval(() => {
    if (second > 0) {
      setSecond((sec) => sec - 1);
    }
    if (second === 0) {
      setSecond(10);
    }
  }, 1000);

  return <div>{start && (second < 10 ? `0${second}` : second)}</div>;
}
