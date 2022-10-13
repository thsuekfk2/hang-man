import { useEffect, useState } from 'react';

interface Props {
  answer: string;
  input: string; // 사용자가 하나하나 클릭할 떄마다 클릭한 문자가 들어감
  countDisCorrectHandler(arg1?: number): void;
  countCorrectHandler(arg1?: number): void;
}

export function AnswerInput({
  answer,
  input,
  countDisCorrectHandler,
  countCorrectHandler,
}: Props) {
  const [characterList, setCharacterList] = useState<Array<any>>([]);
  const [disCorrect, setDisCorrect] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [answerArray, setAnswerArray] = useState<Array<any>>([]);

  useEffect(() => {
    const tmp = answer.split('');
    const showList = Array(answer.length).fill(' _ ');
    setAnswerArray(tmp);
    setCharacterList(showList);
  }, []);

  useEffect(() => {
    const tmp = [...characterList];

    let isCorrect = false;
    if (input !== '') {
      for (let i = 0; i < answer.length; i += 1) {
        if (answer.charAt(i) === input) {
          tmp[i] = input;
          isCorrect = true;
        }
      }
      if (isCorrect === true) {
        setCharacterList(tmp);
        setCorrect(correct + 1);
      } else {
        setDisCorrect(disCorrect + 1);
      }
    }
  }, [input]);

  useEffect(() => {
    countCorrectHandler(correct);
  }, [correct]);

  useEffect(() => {
    countDisCorrectHandler(disCorrect);
  }, [disCorrect]);

  return <div className="">{characterList}</div>;
}
