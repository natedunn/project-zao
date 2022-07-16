import clsx from 'clsx';

export default function TextInput({ className, ...props }) {
  return <input className={clsx(className, '')} {...props} />;
}
