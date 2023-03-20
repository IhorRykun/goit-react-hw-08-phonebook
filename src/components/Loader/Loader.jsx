import { Puff } from 'react-loader-spinner';
import { LoaderPosition } from './Loader.styled';

export function Loader() {
  return (
    <LoaderPosition>
      <Puff
        height="80"
        width="80"
        radisu={1}
        color="#2493eb"
        ariaLabel="puff-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </LoaderPosition>
  );
}
