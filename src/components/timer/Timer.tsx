import useInterval from 'hooks/useInterval';
import { useEffect, useState } from 'react';

interface Props {
  reStart?: string | boolean;
}

export function Timer({ reStart }: Props) {
  const [second, setSecond] = useState(10);

  useEffect(() => {
    setSecond(10);
  }, [reStart]);

  useInterval(() => {
    if (second > 0) {
      setSecond((sec) => sec - 1);
    }
    if (second === 0) {
      setSecond(10);
    }
  }, 1000);

  return (
    <div>{(reStart || true) && (second < 10 ? `0${second}` : second)}</div>
  );
}
