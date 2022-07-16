import { Fragment, useState } from 'react';
import { clsx } from 'clsx';
import useStore from '../../utils/store';

type Props = {
  children: any; // TODO: fix this to allow key below
};

export default function EditWrapper({ children }: Props) {
  const [isHovered, setIsHovered] = useState(false);
  const setHovered = useStore((state) => state.editor.setHovered);
  const setSelected = useStore((state) => state.editor.setSelected);

  return (
    <div
      className='editor-wrapper relative'
      onClick={(e) => {
        e.stopPropagation();
        setSelected(children.key);
      }}
      onMouseOver={(e) => {
        e.stopPropagation();
        setHovered(children.key);
        setIsHovered(true);
      }}
      onMouseOut={(e) => {
        e.stopPropagation();
        setHovered(null);
        setIsHovered(false);
      }}
    >
      <div
        className={clsx(
          'absolute inline-block top-[-23px] left-0 right-0 text-center pointer-events-none',
          {
            'opacity-100': isHovered,
            'opacity-0': !isHovered,
          }
        )}
      >
        <div className='inline-block py-1 px-2 text-xs bg-blue-500 text-white rounded-t pointer-events-auto'>
          Edit {children.key}
        </div>
      </div>
      {children}
      <div
        className={clsx({
          'border-2 border-blue-500 inset-[1px] absolute border-radius rounded pointer-events-none':
            isHovered,
        })}
      ></div>
    </div>
  );
}
