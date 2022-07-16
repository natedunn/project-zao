type Props = {
  component: {
    component: string;
    props: object;
    key: string;
  };
  changeLayoutByKey: ({ key: string, prop: object, value: any }) => void;
};

export default function ComponentOptions({ component, changeLayoutByKey }: Props) {
  return (
    <div className='p-2 mx-2 border-b-2 border-white'>
      <span>{component?.component}</span>
      <ul>
        {Object.keys(component?.props).map((key, index) => {
          const prop = key;
          const value = component?.props[key];
          return (
            <li className='pl-6 mt-2' key={`${component.key}-${prop}-${index}`}>
              <input
                className='text-black'
                type='text'
                defaultValue={value}
                onChange={(e) =>
                  changeLayoutByKey({
                    key: component.key,
                    prop,
                    value: e.target.value,
                  })
                }
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
