import { useRouter } from 'next/router';

export const useParams = () => {
  const router = useRouter();

  const getParam = (paramName) => {
    return router.query[paramName] || '';
  };

  return {
    getParam
  };
};