import { useEffect, useState } from 'react';

interface Props {
  answer: string;
  input: string; // 사용자가 하나하나 클릭할 떄마다 클릭한 문자가 들어감
  countHandler?(arg: number): void;
}

export function AnswerInput({ answer, input, countHandler }: Props) {
  const [characterList, setCharacterList] = useState<Array<any>>([]);
  const [disCorrect, setDisCorrect] = useState(1);
  const [answerArray, setAnswerArray] = useState<Array<any>>([]);

  useEffect(() => {
    const tmp = answer.split('');
    const showList = Array(answer.length).fill('_');
    setAnswerArray(tmp);
    setCharacterList(showList);
  }, []);

  useEffect(() => {
    const tmp = [...characterList];
    for (let i = 0; i < answer.length; i += 1) {
      if (answerArray[i] === input) {
        tmp[i] = input;
        setCharacterList(tmp);
      }
    }
    if (!answerArray.includes(input)) {
      setDisCorrect(disCorrect + 1);
      countHandler?.(disCorrect);
    }
  }, [input]);

  return <div className="">{characterList}</div>;
}
