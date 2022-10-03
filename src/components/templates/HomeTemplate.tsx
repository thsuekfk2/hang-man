interface Props {
  title?: string;
  children?: React.ReactNode;
}

export function HomeTemplate({ title, children }: Props) {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {title !== '' && <div className="h-1/5 font-bold text-xl">{title}</div>}
      <div className="flex items-center">{children}</div>
    </div>
  );
}
