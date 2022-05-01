import React, { lazy } from "react";
import dynamic from "next/dynamic";

export default function RenderComponents({ layout, name = null }) {
  // Map through list of components to render
  const renderComponent = (item) => {
    const component = dynamic(() => import(`./${item.component}`));
    const { children, ...props } = item.props;
    const renderChildren = (children) => {
      if (typeof children === "object") {
        return renderComponent(children);
      }
      return children;
    };
    if (component)
      return React.createElement(component, {
        ...props,
        key: item?.key,
        children: renderChildren(children),
      });
    return null;
  };
  // Render components
  return (
    <div className={name ? `rendered rendered-${name}` : `rendered`}>
      {layout.length > 0 ? (
        layout?.map((item) => renderComponent(item))
      ) : (
        <div>Nothing to see.</div>
      )}
    </div>
  );
}
