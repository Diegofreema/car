'use client';
import Link from 'next/link';
import { FC } from 'react';
import { Avatar } from '@mantine/core';
import Image from 'next/image';
import CustomButton from './CustomButton';

interface Props {}

const Navbar: FC<Props> = ({}): JSX.Element => {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex flex-start items-center sm:px-16 px-6 py-4">
        <Link href={'/'} className="flex justify-center items-center">
          <Image
            src={'/logo.svg'}
            alt="Car Hub Logo"
            width={118}
            height={18}
            className="object-contain"
          />
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
