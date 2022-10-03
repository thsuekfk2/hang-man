interface Props {
  alphabet?: string;
}

export function AlphabetButton({ alphabet }: Props) {
  return (
    <button
      type="button"
      className="flex p-5 border-2 border-black border-solid bg-blue-100"
    >
      {alphabet}
    </button>
  );
}
