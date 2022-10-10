import { AlphabetButton } from 'components/button/AlphabetButton';
import { Hangman } from 'components/hangman/Hangman';
import { AnswerInput } from 'components/input/AnswerInput';
import { Timer } from 'components/timer/Timer';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function GamePage() {
  const navigator = useNavigate();
  const [answer, setAnswer] = useState('apple');
  const [input, setInput] = useState('');
  const [count, setCount] = useState(1);
  const alphabetArray = Array.from({ length: 26 }, (v, i) =>
    String.fromCharCode(i + 65),
  );

  const countDisCorrectHandler = (count: number) => {
    setCount(count);
  };

  useEffect(() => {
    if (count === 10) {
      navigator(`/gameover`);
    }
  }, [count]);

  return (
    <div className="flex flex-col h-full">
      <div className="header">
        <div className="flex justify-center align-middle">
          <Timer start />
        </div>
      </div>
      <div className="flex flex-row w-full h-3/4">
        <div className="w-1/2 h-full ">
          <Hangman count={count} />
        </div>

        <div className="flex justify-center w-1/2 items-center">
          <AnswerInput
            answer={answer}
            input={input}
            countHandler={countDisCorrectHandler}
          />
        </div>
      </div>
      <div className="flex w-full justify-center">
        <div className=" flex flex-row flex-wrap bg-red">
          {alphabetArray.map((alphabet) => (
            <AlphabetButton
              onClick={() => setInput(alphabet.toLocaleLowerCase())}
              key={alphabet}
              alphabet={alphabet}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
