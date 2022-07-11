type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  props: any;
};

const Button = ({ children, onClick = null, className, ...props }: Props) => {
  return (
    <button onClick={onClick} {...props} className={className}>
      {children}
    </button>
  );
};

export const register = {
  component: Button,
  title: 'Button',
  description: 'A button component',
  key: 'button',
  props: [
    {
      name: 'children',
      title: 'Children',
      description: 'The text to display',
      type: 'string',
      required: true,
      input: 'text',
    },
  ],
};

export default register;
