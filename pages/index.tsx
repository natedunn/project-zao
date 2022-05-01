import RenderComponents from "../components/RenderComponents";

export default function Home({ test }) {
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
    {
      component: "Button",
      props: {
        children: "Click Me",
        onClick: () => alert("Clicked"),
        className:
          "bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded",
      },
      key: "asdfasdf",
    },
  ];
  return (
    <div>
      <h1 className="text-3xl text-red-500">{test}</h1>
      <RenderComponents layout={componentLayout} name="body" />
    </div>
  );
}

// export async function getStaticProps(context) {
//   const componentLayout = [
//     {
//       component: "Heading",
//       props: {
//         children: "Test Page",
//       },
//       key: "ljaflksd",
//     },
//     {
//       component: "Paragraph",
//       props: {
//         children: "Hello World",
//       },
//       key: "nhienasd",
//     },
//     {
//       component: "Box",
//       props: {
//         borderColor: "red",
//         children: {
//           component: "Toggle",
//           props: {
//             text: "Switch",
//           },
//           key: "asdasd",
//         },
//       },
//       key: "ioouqwnv",
//     },
//     {
//       component: "Button",
//       props: {
//         children: "Click Me",
//         onClick: async () => alert("Clicked"),
//         className:
//           "bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded",
//       },
//       key: "asdfasdf",
//     },
//   ];

//   return {
//     props: {
//       test: "Testing Things",
//       componentLayout,
//     },
//   };
// }
