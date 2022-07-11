import React, { lazy, Fragment } from 'react';
// import dynamic from "next/dynamic";
import * as manifest from '../manifest';

export default function RenderComponents({ layout, name = null }) {
  // Map through list of components to render
  const renderComponent = (item) => {
    const registration = manifest?.default?.[item.component];
    const component = registration?.component;

    const props = item?.props || null;

    const checkIfChildren = (oldProps) => {
      if (!oldProps.children) return oldProps;
      const { children, ...props } = oldProps;
      return props;
    };

    const renderChildren = (children) => {
      // if (typeof children === "string") return children;
      // return Object.keys(children).map((key, index) => {
      //   return renderComponent(children[key]);
      // });
      if (Array.isArray(children)) {
        return children.map((child) => {
          const newChild = {
            ...layout[child],
            renderChild: true,
          };
          return <Fragment key={layout[child].key}>{renderComponent(newChild)}</Fragment>;
        });
      }
      return children;
    };

    if ((component && !item.parentKey) || (component && item.parentKey && item?.renderChild)) {
      return React.createElement(component, {
        ...checkIfChildren(props),
        key: item?.key,
        children: props?.children ? renderChildren(props?.children) : null,
      });
    }
    return null;
  };
  // Render components
  return (
    <div className={name ? `rendered rendered-${name}` : `rendered`}>
      {layout ? (
        Object.keys(layout)?.map((key, index) => renderComponent(layout[key]))
      ) : (
        <div>Nothing to see.</div>
      )}
    </div>
  );
}
