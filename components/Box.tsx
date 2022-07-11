function Box({ children, borderColor = "gray" }) {
  return (
    <div
      style={{
        border: `1px solid ${borderColor}`,
        borderRadius: "4px",
        padding: "8px",
      }}
    >
      {children}
    </div>
  );
}

const register = {
  component: Box,
  title: "Box",
  description: "A box component",
  key: "box",
  props: [
    {
      name: "children",
      title: "Children",
      description: "The text to display",
      type: "string",
      required: true,
      input: "text",
    },
  ],
};

export default register;
