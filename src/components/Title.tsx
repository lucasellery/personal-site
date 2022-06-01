interface TitleProps {
  title: string;
}

const Title: React.FC<TitleProps> = ({ title }) => {
  return (
    <h1 className="text-xl text-brand-300 font-bold">
      {title}
    </h1>
  );
}

export default Title;