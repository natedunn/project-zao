type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  props: any;
};

const Button = ({ children, onClick, className, ...props }: Props) => {
  return (
    <button onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default Button;
