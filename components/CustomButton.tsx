'use client';
import { FC } from 'react';
import Image from 'next/image';
import { Button } from '@mantine/core';
import { CustomButtonProps } from '@/types';
import Link from 'next/link';

const CustomButton: FC<CustomButtonProps> = ({
  title,
  handleClick,
  containerStyles,
  btnType,
  textStyles,
  rightIcon,
  isDisabled,
  link,
}): JSX.Element => {
  if (link) {
    return (
      <Link href={link}>
        <button
          disabled={false}
          type={btnType}
          className={`custom-btn ${containerStyles}  `}
        >
          <span className={`flex-1 ${textStyles}  `}>{title}</span>
          {rightIcon && (
            <div className="relative w-6 h-6">
              <Image
                src={rightIcon}
                fill
                alt="icon"
                className="object-contain"
              />
            </div>
          )}
        </button>
      </Link>
    );
  }
  return (
    <button
      disabled={false}
      type={btnType}
      className={`custom-btn ${containerStyles}  `}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles}  `}>{title}</span>
      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image src={rightIcon} fill alt="icon" className="object-contain" />
        </div>
      )}
    </button>
  );
};

export default CustomButton;
