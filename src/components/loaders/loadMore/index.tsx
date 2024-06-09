import { useInView } from 'react-intersection-observer';
import Loader from '../loaderBasic';
import { FC, useEffect, useState } from 'react';

type LoadMoreProps = {
  onView: () => void;
  isMutating: boolean;
};

const LoadMore: FC<LoadMoreProps> = ({ onView, isMutating }): JSX.Element => {
  const [isLoadingStart, setIsLoadingStart] = useState(false);
  const { ref, inView } = useInView();

  useEffect(() => {
    if (!isMutating && inView && !isLoadingStart) {
      onView();
      setIsLoadingStart(true);
    } else if (isLoadingStart) {
      setIsLoadingStart(false);
    }
  }, [isMutating, onView, inView, isLoadingStart]);

  return <div ref={ref}>{isMutating && <Loader />}</div>;
};

export default LoadMore;
