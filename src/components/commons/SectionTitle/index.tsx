type Props = { title: string };

const SectionTitle = ({ title }: Props) => {
  return (
    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
      {title}
    </h3>
  );
};

export default SectionTitle;
