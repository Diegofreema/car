'use client';
import { manufacturers } from '@/constants';
import { Combobox, Transition } from '@headlessui/react';
import { Avatar, CheckIcon } from '@mantine/core';
import { FC, Fragment, useState } from 'react';

interface Props {
  selected: string;
  setSelected(selected: string): void;
}

const SearchManufacturer: FC<Props> = ({
  selected,
  setSelected,
}): JSX.Element => {
  const [query, setQuery] = useState('');
  const filteredManufacturers =
    query === ''
      ? manufacturers
      : manufacturers.filter((item) =>
          item.trim().toLowerCase().includes(query.trim().toLowerCase())
        );
  return (
    <div className="search-manufacturer">
      <Combobox value={selected} onChange={setSelected}>
        <div className="relative w-full">
          <Combobox.Button className={'absolute top-[14px]'}>
            <Avatar
              src={'/car-logo.svg'}
              size={20}
              radius={20}
              className="ml-4"
            />
          </Combobox.Button>
          <Combobox.Input
            className={'search-manufacturer__input'}
            placeholder="Volkswagen"
            displayValue={(manufacturer: string) => manufacturer}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery('')}
          >
            <Combobox.Options>
              {filteredManufacturers.length === 0 && query !== '' ? (
                <Combobox.Option
                  value={query}
                  className={'search-manufacturer__option'}
                >
                  &quot;{query}&quot; not found
                </Combobox.Option>
              ) : (
                filteredManufacturers.map((item) => (
                  <Combobox.Option
                    key={item}
                    className={({ active }) =>
                      `relative search-manufacturer__option ${
                        active ? 'bg-primary-blue text-white' : 'text-gray-900'
                      }`
                    }
                    value={item}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? 'font-medium' : 'font-normal'
                          }`}
                        >
                          {item}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? 'text-white' : 'text-teal-600'
                            }`}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchManufacturer;
