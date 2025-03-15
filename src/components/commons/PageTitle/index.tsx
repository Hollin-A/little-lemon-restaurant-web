import { cn } from "@/lib/utils";

// type Props = { title: string };

const PageTitle = ({
  className,
  title,
  ...props
}: React.ComponentProps<"h2">) => {
  return (
    <h2
      className={cn(
        "scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0 text-yellow",
        className
      )}
      {...props}
    >
      {title}
    </h2>
  );
};

export default PageTitle;
