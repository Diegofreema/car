'use client';

import { CarCard, CustomFilter, Hero, SearchBar, ShowMore } from '@/components';
import { fuels, yearsOfProduction } from '@/constants';
import { CarProps } from '@/types';
import { fetchCars } from '@/utils';
import Image from 'next/image';

import { useState, useEffect } from 'react';

export default function Home() {
  const [allCars, setAllCars] = useState([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [model, setModel] = useState<string>('');
  const [manufacturer, setManufacturer] = useState<string>('');
  const [fuel, setFuel] = useState<string>('');
  const [year, setYear] = useState(2022);
  const [limit, setLimit] = useState<number>(10);

  useEffect(() => {
    const getCars = async () => {
      setLoading(true);
      try {
        const response = await fetchCars({
          manufacturer: manufacturer || '',
          model: model || '',
          year: year || 2022,
          limit: limit || 10,
          fuel: fuel || '',
        });
        setAllCars(response);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getCars();
  }, [fuel, year, manufacturer, model, limit]);

  return (
    <main className="visible-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>
        <div className="home__filters">
          <SearchBar setModel={setModel} setManufacturer={setManufacturer} />
          <div className="home__filter-container">
            <CustomFilter title="fuel" options={fuels} setFilter={setFuel} />
            <CustomFilter
              title="year"
              options={yearsOfProduction}
              setFilter={setYear}
            />
          </div>
        </div>
        {allCars.length > 0 ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars?.map((car, i) => (
                <CarCard car={car} key={i} />
              ))}
            </div>
            {loading && (
              <div className="mt-16 w-full flex-center">
                <Image
                  src={'/loader.svg'}
                  width={50}
                  height={50}
                  className="object-contain"
                  alt="loader"
                />
              </div>
            )}
            <ShowMore
              pageNumber={limit / 10}
              isNext={limit > allCars.length}
              setLimit={setLimit}
            />
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">Oops, no results</h2>
          </div>
        )}
      </div>
    </main>
  );
}
