import Playground from '../../../components/app/Playground';

export default function BuilderPage({ id, pageLayout }) {
  return (
    <div>
      <Playground pageId={id} pageLayout={pageLayout} />
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const { id } = params;
  // Let's pretend we have queried the db for information
  const { data: pageLayout } = await fetch('http://localhost:3000/api/v1/layout-example').then(
    (res) => res.json()
  );

  return {
    props: {
      id,
      pageLayout,
    },
  };
}
