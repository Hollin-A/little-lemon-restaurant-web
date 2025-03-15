type Props = { title: string };

const FooterSubtitle = ({ title }: Props) => {
  return (
    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
      {title}
    </h4>
  );
};

export default FooterSubtitle;
