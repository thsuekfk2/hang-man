import { AlphabetButton } from 'components/button/AlphabetButton';
import { Timer } from 'components/timer/Timer';

export function GamePage() {
  const alphabetArray = Array.from({ length: 26 }, (v, i) =>
    String.fromCharCode(i + 65),
  );

  return (
    <div className="flex flex-col">
      <div className="header">
        <div className="flex justify-center align-middle">
          <Timer start />
        </div>
      </div>
      <div>
        <div className="hangman-wrapper" />
        <div className="input-wrapper" />
      </div>
      <div className="w-full h-1/2">
        <div className="w-full flex flex-row flex-wrap bg-red">
          {alphabetArray.map((alphabet) => (
            <AlphabetButton key={alphabet} alphabet={alphabet} />
          ))}
        </div>
      </div>
    </div>
  );
}
