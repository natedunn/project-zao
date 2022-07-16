import * as manifest from '../manifest';

type Props = {
  component: {
    component: string;
    props: object;
    key: string;
  };
  changeLayoutByKey: ({ key: string, prop: object, value: any }) => void;
};

export default function ComponentOptions({ component, changeLayoutByKey }: Props) {
  if (!component) return null;

  const info = manifest?.default?.[component?.component];

  return (
    <div>
      <div className='border-b-2 border-white mb-2 pb-2'>
        <div className='text-lg font-bold'>{component?.component}</div>
        <div className='text-sm italic'>{info?.description}</div>
      </div>
      <div className='mt-6 font-bold'>Props:</div>
      <ul>
        {info?.props.map((prop) => {
          const Input = prop.input || null;
          const value = component?.props?.[prop.name];
          if (!Input) return <span className='italic text-sm'>No editable props to display</span>;
          return (
            <li key={`${component?.key}-${prop.name}`}>
              <div>{prop.title}</div>
              <div>{prop.description}</div>
              <div>
                {prop.name in component.props ? (
                  <Input
                    defaultValue={value}
                    onChange={(e) =>
                      changeLayoutByKey({
                        key: component.key,
                        prop: prop.name,
                        value: e.target.value,
                      })
                    }
                  />
                ) : null}
              </div>
            </li>
          );
          // return (
          //   <li className='pl-6 mt-2' key={`${component.key}-${prop}-${index}`}>
          //     <input
          //       className='text-black'
          //       type='text'
          //       defaultValue={value}
          //       onChange={(e) =>
          //         changeLayoutByKey({
          //           key: component.key,
          //           prop,
          //           value: e.target.value,
          //         })
          //       }
          //     />
          //   </li>
          // );
        })}
      </ul>
    </div>
  );
}
