import { useState, useEffect } from 'react';
import { Builder } from './Builder';

type Props = {
  apiKey: string;
  id: string;
};

export const useBuilder = ({ apiKey, id }: Props) => {
  const [verify, setVerify] = useState(false);

  useEffect(() => {
    const verifyKey = async () => {
      const res = await fetch('/api/verify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          key: apiKey,
        }),
      });
      const data = await res.json();
      setVerify(data?.valid);
    };
    verifyKey();
  }, []);

  return {
    Builder: (props) => {
      return <Builder verify={verify} id={id} apiKey={apiKey} {...props} />;
    },
  };
};
