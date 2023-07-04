'use client';
import { CarProps } from '@/types';
import { FC } from 'react';
import { useState } from 'react';
import Image from 'next/image';
import { calculateCarRent, generateCarImageUrl } from '@/utils';
import CustomButton from './CustomButton';
import CarDetails from './CarDetails';
interface CarCardProps {
  car: CarProps;
}

const CarCard: FC<CarCardProps> = ({ car }): JSX.Element => {
  const { city_mpg, year, make, model, drive, transmission } = car;
  const carRent = calculateCarRent(city_mpg, year);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
      </div>
      <p className="flex mt-6 text-[32px]">
        <span className="self-start text-[14px] font-semibold">$</span>
        {carRent}
        <span className="self-end text-[14px] font-medium">/day</span>
      </p>
      <div className="relative w-full h-40 my-3 ">
        <Image
          src={'/hero.png'}
          alt="car-image"
          fill
          priority
          className="object-contain"
        />
      </div>
      <div className="relative flex w-full mt-2">
        <div className="flex group-hover:invisible w-full justify-between text-gray-50">
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              src={'/steering-wheel.svg'}
              width={20}
              alt="wheel"
              height={20}
              priority
            />
            <p className="text-[14px] text-black">
              {transmission === 'a' ? 'Automatic' : 'Manual'}
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src={'/tire.svg'} width={20} alt="tire" height={20} />
            <p className="text-[14px] text-black">{drive.toUpperCase()}</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src={'/gas.svg'} width={20} alt="gas" height={20} priority />
            <p className="text-[14px] text-black">{city_mpg} MPG</p>
          </div>
        </div>
        <div className="car-card__btn-container">
          <CustomButton
            title="View More"
            containerStyles="w-full py-[16px] rounded-full bg-primary-blue"
            textStyles="text-white text-[14px] leading-[17px] font-bold"
            rightIcon="/right-arrow.svg"
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>
      <CarDetails
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        car={car}
      />
    </div>
  );
};

export default CarCard;
