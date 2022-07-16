import clsx from 'clsx';

export default function TextInput({ className, ...props }) {
  return (
    <input type='text' className={clsx(className, 'text-black p-2 rounded w-full')} {...props} />
  );
}
