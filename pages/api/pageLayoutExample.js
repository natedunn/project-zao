// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  // Open Chrome DevTools to step through the debugger!
  // debugger;
  res.status(200).json({
    data: {
      ljaflksd: {
        key: 'ljaflksd',
        component: 'Heading',
        props: {
          children: 'Test Page!!!',
          className: 'text-3xl text-purple-500',
        },
      },
      uendhekd: {
        key: 'uendhekd',
        component: 'Heading',
        parentKey: 'npodfi7',
        props: {
          children: 'This should be in a box',
          className: 'text-xl text-blue-500',
        },
      },
      npodfi7: {
        key: 'npodfi7',
        component: 'Box',
        props: {
          children: ['uendhekd'],
        },
      },
    },
  });
};
