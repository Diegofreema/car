'use client';
import { useRouter } from 'next/navigation';
import { FC } from 'react';
import CustomButton from './CustomButton';
import { updateSearchParams } from '@/utils';

interface Props {
  pageNumber: number;
  isNext: boolean;
  setLimit: (limit: number) => void;
}

const ShowMore: FC<Props> = ({ pageNumber, isNext, setLimit }): JSX.Element => {
  const handleNavigation = () => {
    const newLimit = (pageNumber + 1) * 10;
    setLimit(newLimit);
  };
  return (
    <div className="w-full flex-center gap-5 mt-10">
      {!isNext && (
        <CustomButton
          title="Show More"
          btnType="button"
          containerStyles="bg-primary-blue rounded-full text-white"
          handleClick={handleNavigation}
        />
      )}
    </div>
  );
};

export default ShowMore;
