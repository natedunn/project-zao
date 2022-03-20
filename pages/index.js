import React from 'react';
import Paragraph from '../components/Paragraph';
import Heading from '../components/Heading';
import RenderComponents from '../components/RenderComponents';
import Box from '../components/Box';

export default function Home({ componentLayout, test }) {
  return (
    <div>
      <h1>{test}</h1>
      <RenderComponents layout={componentLayout} />
    </div>
  );
}

export async function getStaticProps(context) {
  const componentLayout = [
    {
      component: 'Heading',
      props: {
        children: 'Test Page',
      },
    },
    {
      component: 'Paragraph',
      props: {
        children: 'Hello World',
      },
    },
    {
      component: 'Box',
      props: {
        borderColor: 'red',
        children: {
          component: 'Toggle',
          props: {
            text: 'Another Paragraph',
          },
        },
      },
    },
  ];

  return {
    props: {
      test: 'Testing Things',
      componentLayout,
    },
  };
}
