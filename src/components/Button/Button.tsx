interface IButtinProps {
  text: string;
  handler: (event: React.MouseEvent<HTMLElement>) => any;
}

const Button = ({ text = "OK", handler }: IButtinProps) => {
  const general = 'btn';
  const size = 'w-[6em] h-[3em]';
  const txt = 'text-white';
  const border = 'border border-grey rounded';
  const hover = 'hover:bg-sky-700';
  const animation = 'duration-200';

  const root = `${general} ${size} ${txt} ${border} ${hover} ${animation}`;

  return (
    <>
      <button className={root} onClick={handler}>{text}</button>
    </>
  );
};

export default Button;
