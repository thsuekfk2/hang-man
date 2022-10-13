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
  const [disCorrectcount, setDisCorrectcountCount] = useState(0);
  const [correctcount, setCorrectcount] = useState(0);

  const alphabetArray = Array.from({ length: 26 }, (v, i) =>
    String.fromCharCode(i + 65),
  );

  const countDisCorrectHandler = (disCorrect: number) => {
    setDisCorrectcountCount(disCorrect);
  };
  const countCorrectHandler = (correct: number) => {
    setCorrectcount(correct);
  };

  useEffect(() => {
    if (disCorrectcount === 9) {
      navigator(`/gameover`);
    }
  }, [disCorrectcount]);

  useEffect(() => {
    if (correctcount === new Set(answer).size) {
      navigator(`/gamesuccess`);
    }
  }, [correctcount]);

  return (
    <div className="flex flex-col h-full">
      <div className="header">
        <div className="flex justify-center align-middle">
          <Timer reStart={input} />
        </div>
      </div>
      <div className="flex flex-row w-full h-3/4">
        <div className="w-1/2 h-full ">
          <Hangman count={disCorrectcount} />
        </div>

        <div className="flex justify-center w-1/2 items-center">
          <AnswerInput
            answer={answer}
            input={input}
            countDisCorrectHandler={countDisCorrectHandler}
            countCorrectHandler={countCorrectHandler}
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
