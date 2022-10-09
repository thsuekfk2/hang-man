import { useEffect, useState } from 'react';

interface Props {
  answer: string;
  input: string; // 사용자가 하나하나 클릭할 떄마다 클릭한 문자가 들어감
}

export function AnswerInput({ answer, input }: Props) {
  const [characterList, setCharacterList] = useState<Array<any>>([]);
  const [correct, setCorrect] = useState<Array<boolean>>([]);

  // 초기 배열 값 세팅
  useEffect(() => {
    const initialArray = [];
    for (let i = 0; i < answer.length; i += 1) {
      initialArray.push(false);
    }

    setCorrect(initialArray);
  }, []);

  // 문자가 바뀔 떄마다 검사, 입력한 값이 있으면 해당 문자를 보여줌
  useEffect(() => {
    const tmp = [...correct];
    for (let i = 0; i < answer.length; i += 1) {
      if (answer[i] === input) {
        tmp[i] = true;
        setCorrect(tmp);
      }
    }
  }, [input]);

  // 답이 맞으면 맞는 답을 화면에 보여주고 아닐 경우 _ 빈 값
  useEffect(() => {
    const showList = [];
    for (let i = 0; i < correct.length; i += 1) {
      if (correct[i] === true) {
        showList.push(answer[i]);
      } else {
        showList.push('_');
      }
    }
    setCharacterList(showList);
  }, [correct]);

  return <div className="">{characterList}</div>;
}
