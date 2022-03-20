export default function Box({ children, borderColor = 'black' }) {
  return (
    <div
      style={{
        border: `1px solid ${borderColor}`,
      }}
    >
      This is inner box: {children}
    </div>
  );
}
