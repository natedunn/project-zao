export default function BuilderPage({ id }) {
  return (
    <div>
      <h1>Builder for: {id}.</h1>
      <section>Builder Section</section>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const { id } = params;
  return {
    props: {
      id,
    },
  };
}
