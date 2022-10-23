import { useEffect, useState } from 'react';

type Props = {
  key: string;
  id: string;
};

const useBuilder = ({ key, id }: Props) => {
  const [builder, setBuilder] = useState(false);

  const checker = async () => {
    await fetch('/api/keycheck', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        key,
      }),
    })
      .then(() => setBuilder(true))
      .catch(() => setBuilder(false));
  };

  useEffect(() => {
    async function check() {
      await checker();
    }
    check();
  }, []);

  return <>Hello</>;
};

export { useBuilder };

// const createBuilder = async ({ key, id }) => {
//   console.log(`checking ${key} against API`);

//   Run some API call to check if key is valid
//   if (key !== 'xDj8Kln84D') {
//     console.warn('Key unauthorized');
//     return {
//       Builder: () => <div>Unauthorized</div>,
//     };
//   }
//   // Return if valid
//   return {
//     Builder: () => <div>Authorized. Building: {id}</div>,
//   };
// };
// export { createBuilder };
