interface Props {
  count: number;
}

export function Hangman({ count }: Props) {
  return (
    <img
      className="h-full"
      src={require(`../../assets/hangman/${count + 1}.png`)}
      alt="React"
    />
  );
}
