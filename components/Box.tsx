function Box({ children, borderColor = 'gray' }) {
  return (
    <div
      style={{
        border: `1px solid ${borderColor}`,
        borderRadius: '4px',
        padding: '18px',
      }}
    >
      {children}
    </div>
  );
}

const register = {
  component: Box,
  title: 'Box',
  description: 'A box component',
  key: 'box',
  props: [
    {
      name: 'children',
      title: 'Children',
      description: 'Box for other components to be placed inside of.',
      type: 'string',
      required: true,
      input: null,
    },
  ],
};

export default register;
