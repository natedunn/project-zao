// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  // Open Chrome DevTools to step through the debugger!
  // debugger;
  res.status(200).json({
    data: {
      '9599f496-d6d9-47e1-bce8-cb2658c88d36': {
        key: '9599f496-d6d9-47e1-bce8-cb2658c88d36',
        component: 'Heading',
        props: {
          children: 'Test Page!!!',
          className: 'text-3xl text-purple-500',
        },
      },
      '1d92ad6f-f6ce-48e8-9fd7-dbc5ab238dfe': {
        key: '1d92ad6f-f6ce-48e8-9fd7-dbc5ab238dfe',
        component: 'Heading',
        parentKey: 'npodfi7',
        props: {
          children: 'This should be in a box',
          className: 'text-xl text-blue-500',
        },
      },
      'a3ec86ad-f1d9-4359-9132-f7fd8c99c607': {
        key: 'a3ec86ad-f1d9-4359-9132-f7fd8c99c607',
        component: 'Box',
        props: {
          children: ['1d92ad6f-f6ce-48e8-9fd7-dbc5ab238dfe'],
        },
      },
    },
  });
};
