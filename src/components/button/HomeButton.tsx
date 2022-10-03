import { useNavigate } from 'react-router-dom';

interface Props {
  title: string;
}

export function HomeButton({ title }: Props) {
  const navigate = useNavigate();

  const nextPage = () => {
    navigate('/game');
  };
  return (
    <button
      type="button"
      className="flex px-10 border-2 border-black border-solid bg-blue-100"
      onClick={nextPage}
    >
      {title}
    </button>
  );
}
