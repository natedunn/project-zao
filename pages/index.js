import React from "react";
import Paragraph from "../components/Paragraph";
import Heading from "../components/Heading";
import RenderComponents from "../components/RenderComponents";
import Box from "../components/Box";

export default function Home({ componentLayout, test }) {
  return (
    <div>
      <h1>This is: {test}!</h1>
      <RenderComponents layout={componentLayout} />
    </div>
  );
}

export async function getStaticProps(context) {
  const componentLayout = [
    {
      component: "Heading",
      props: {
        children: "Test Page",
      },
      key: "ljaflksd",
    },
    {
      component: "Paragraph",
      props: {
        children: "Hello World",
      },
      key: "nhienasd",
    },
    {
      component: "Box",
      props: {
        borderColor: "red",
        children: {
          component: "Toggle",
          props: {
            text: "Switch",
          },
          key: "asdasd",
        },
      },
      key: "ioouqwnv",
    },
  ];

  return {
    props: {
      test: "Testing Things",
      componentLayout,
    },
  };
}
