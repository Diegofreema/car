'use client';

import { FC } from 'react';
import Image from 'next/image';
import CustomButton from './CustomButton';
import {
  usePathname,
  useRouter,
  useSelectedLayoutSegments,
  useParams,
} from 'next/navigation';
interface Props {}

const Hero: FC<Props> = ({}): JSX.Element => {
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Find, book, or rent a car — quickly and easily
        </h1>
        <div className="hero__subtitle">
          <p>
            Streamline your car rental experience with our effortless booking
            process.
          </p>
        </div>
        <CustomButton
          title="Explore Cars"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          btnType="button"
          link="#discover"
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image ">
          <Image
            src={'/hero.png'}
            alt="hero"
            fill
            className="object-contain"
            priority
          />
        </div>
        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};

export default Hero;
