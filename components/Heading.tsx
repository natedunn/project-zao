// TODO: set input as TS type options
import TextInput from './app/inputs/TextInput';

type Props = {
  children: React.ReactNode;
  className?: string;
};

function Heading({ children, className }: Props) {
  return <h1 className={className}>{children}</h1>;
}

const register = {
  component: Heading,
  title: 'Heading',
  description: 'A heading component',
  key: 'heading',
  props: [
    {
      name: 'children',
      title: 'Children',
      description: 'The text to display',
      type: 'string',
      required: true,
      input: TextInput,
    },
    {
      name: 'className',
      title: 'Class Name',
      description: 'The class name to apply to the heading',
      type: 'string',
      required: false,
      input: TextInput,
    },
  ],
};

export default register;
