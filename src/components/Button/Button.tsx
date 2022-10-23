interface IButtinProps {
  text?: string;
  styles?: string;
  handler: (event: React.MouseEvent<HTMLElement>) => any;
}

const Button = ({ text = "OK", styles = '', handler }: IButtinProps) => {
  const general = 'btn bg-sky-700';
  const size = 'h-[3rem]';
  const txt = 'text-white';
  const border = 'border border-grey rounded-md';
  const hover = 'hover:bg-sky-600';
  const animation = 'duration-200';
  const position = '';

  const root = `${general} ${size} ${txt} ${border} ${hover} ${animation} ${position} ${styles}`;

  return (
    <>
      <button className={root} onClick={handler}>{text}</button>
    </>
  );
};

export default Button;
