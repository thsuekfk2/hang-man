interface Props {
  alphabet?: string;
  onClick?(): void;
}

export function AlphabetButton({ alphabet, onClick }: Props) {
  return (
    <button
      type="button"
      className="flex p-5 border-2 border-black border-solid bg-blue-100"
      onClick={onClick}
    >
      {alphabet}
    </button>
  );
}
