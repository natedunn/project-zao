import React, { lazy } from 'react';
import dynamic from 'next/dynamic';

export default function RenderComponents({ layout }) {
  console.log(layout);
  //
  const renderComponent = (item) => {
    const component = dynamic(() => import(`./${item.component}`));
    const { children, ...props } = item.props;
    const renderChildren = (children) => {
      if (typeof children === 'object') {
        return renderComponent(children);
      }
      return children;
    };
    if (component)
      return React.createElement(component, {
        ...props,
        children: renderChildren(children),
      });
    return null;
  };
  //
  return (
    <div id="rendered">
      {layout.length > 0 ? (
        layout?.map((item) => renderComponent(item))
      ) : (
        <div>Nothing to see.</div>
      )}
    </div>
  );
}
