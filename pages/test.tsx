import confetti from 'https://cdn.skypack.dev/canvas-confetti';
import { useBuilder } from '../module/useBuilder';

export default function TestPage({ name }) {
  const { Builder } = useBuilder({
    apiKey: process.env.NEXT_PUBLIC_BUILDER_KEY,
    id: process.env.NEXT_PUBLIC_BUILDER_ID,
  });

  return (
    <div>
      Test Page {name} <br />
      <div>
        <Builder test='This is the title' />
      </div>
      <br />
      <div>
        <button onClick={() => confetti()}>Confetti</button>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  return {
    props: {
      name: 'Zao',
    },
  };
}
