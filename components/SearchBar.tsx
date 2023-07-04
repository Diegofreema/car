'use client';
import React, { FC, useState, Dispatch } from 'react';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import SearchManufacturer from './SearchManufacturer';

interface Props {
  setModel: (model: string) => void;
  setManufacturer: (manufacturer: string) => void;
}

const SearchBarBtn = ({ other }: { other: string }) => {
  return (
    <button type="submit" className={`-ml-3 z-10 ${other}`}>
      <Image
        src={'/magnifying-glass.svg'}
        alt="glass"
        width={40}
        height={40}
        className="object-fit"
      />
    </button>
  );
};

const SearchBar: FC<Props> = ({ setModel, setManufacturer }): JSX.Element => {
  const router = useRouter();
  const [searchManufacturer, setSearchManufacturer] = useState('');
  const [searchModel, setSearchModel] = useState('');
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchManufacturer === '' && searchModel === '') {
      return alert('Please fill in the search bar');
    }
    setModel(searchModel);
    setManufacturer(searchManufacturer);
  };

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          selected={searchManufacturer}
          setSelected={setSearchManufacturer}
        />
        <SearchBarBtn other="sm:hidden" />
      </div>
      <div className="searchbar__item">
        <Image
          src={'/steering-wheel.svg'}
          width={25}
          height={25}
          className="absolute w-[20px] h-[20px] ml-4"
          alt="searchModel"
        />
        <input
          type="text"
          name="searchModel"
          value={searchModel}
          onChange={(e) => setSearchModel(e.target.value)}
          placeholder="Corolla"
          className="
        searchbar__input"
        />
        <SearchBarBtn other="sm:hidden" />
      </div>
      <SearchBarBtn other="max-sm:hidden" />
    </form>
  );
};

export default SearchBar;
