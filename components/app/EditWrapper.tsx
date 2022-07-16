import { Fragment, useState } from 'react';
import { clsx } from 'clsx';

type Props = {
  children: any; // TODO: fix this to allow key below
};

export default function EditWrapper({ children }: Props) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className='editor-wrapper relative'
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
      <div
        className={clsx({
          'border-2 border-blue-500/50 inset-[1px] absolute border-radius rounded pointer-events-none':
            hovered,
        })}
      ></div>
    </div>
  );
}
