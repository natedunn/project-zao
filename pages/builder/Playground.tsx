// TODO: Add type for component structure to replace any
import { Fragment, useState } from 'react';
import * as componentList from '../../components/manifest';
import RenderOption from '../../components/app/RenderOption';
import RenderComponents from '../../components/app/RenderComponents';

export default function Playground({ pageId, pageLayout: initialPageLayout }) {
  const manifest = componentList?.default as any;
  const [pageLayout, setPageLayout] = useState(initialPageLayout);

  const changeLayoutByKey = ({ key, prop, value }) => {
    setPageLayout({
      ...pageLayout,
      [key]: {
        ...pageLayout[key],
        ...{
          props: {
            ...pageLayout[key]?.props,
            ...{
              [prop]: value,
            },
          },
        },
      },
    });
  };

  //
  //
  //
  // Set Layout
  const createLayout = (item) => {
    if (!item || !item.component) return null;
    return (
      <li>
        <span>{item?.component}</span>
        <ul>
          {Object.keys(item?.props).map((key, index) => {
            const prop = key;
            const value = item?.props[key];
            return (
              <li className='pl-6 mt-2' key={`${item.key}-${prop}-${index}`}>
                <input
                  className='text-black'
                  type='text'
                  defaultValue={value}
                  onChange={(e) =>
                    changeLayoutByKey({
                      key: item.key,
                      prop,
                      value: e.target.value,
                    })
                  }
                />
              </li>
            );
          })}
        </ul>
        <ul className='pl-6 list-disc list-inside'>
          {/* {Array.isArray(item?.props?.children)
            ? item?.props.children.map((child) => {
                return (
                  <Fragment key={child.key}>{createLayout(child)}</Fragment>
                );
              })
            : null} */}
          {item?.props?.children && typeof item?.props?.children === 'object'
            ? Object.keys(item?.props?.children).map((key, index) =>
                createLayout(item?.props?.children[key])
              )
            : null}
        </ul>
      </li>
    );
  };

  //
  //
  // Return
  return (
    <section className='w-full bg-slate-300'>
      <div className='p-4 text-center bg-slate-300'>
        <h1>Building page: {pageId}.</h1>
      </div>
      <div className='flex h-full'>
        <div className='flex-auto bg-white'>
          {pageLayout ? <RenderComponents layout={pageLayout} name='playground-preview' /> : null}
        </div>
        <div className='w-full max-w-md bg-slate-900 text-white h-[100vh] flex flex-col gap-10'>
          <div>
            <div className='p-3'>
              <h3 className='font-bold'>Available Components</h3>
            </div>
            {/* {Object.keys(manifest)?.map((key) => {
              const component = manifest[key];
              return (
                <div key={`component-${component.key}`}>
                  <RenderOption title={component.title} />
                </div>
              );
            })} */}
          </div>
          <div>
            <div className='p-3'>
              <h3 className='font-bold'>Layers</h3>
              <ul className='list-disc list-inside'>
                {Object.keys(pageLayout)?.map((key, index) => (
                  <Fragment key={pageLayout[key]?.key}>{createLayout(pageLayout[key])}</Fragment>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
