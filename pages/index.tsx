import RenderComponents from '../components/app/RenderComponents';

export default function Home({ pageLayout, test }) {
  return (
    <div>
      <RenderComponents layout={pageLayout} name='body' />
    </div>
  );
}

export async function getServerSideProps() {
  const { data: pageLayout } = await fetch('http://localhost:3000/api/pageLayoutExample').then(
    (res) => res.json()
  );

  return {
    props: {
      test: 'Testing Things',
      pageLayout,
    },
  };
}
