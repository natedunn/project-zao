export const Builder = ({ test, verify, id }: any) => {
  if (!verify) return <div>Unauthorized</div>;
  return (
    <div>
      {test} <br />
      <div>Authorized. Building: {id}.</div>
    </div>
  );
};
