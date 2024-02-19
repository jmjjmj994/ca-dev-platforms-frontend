import Header from '../Header';
import Footer from '../Footer';
import { getAllCars } from '../../fetch/fetch';
import { useEffect, useState } from 'react';

const CarsUI = () => {
  const [cars, setCars] = useState<[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const data = await getAllCars();
        setCars(data);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCars();
  }, [cars]);
  console.log(cars);

  return (
    <>
      <Header />
      <main>
        <div className="car-content-wrapper py-[5rem]">
          {!isLoading &&
            cars &&
            cars.data.map(({ id, brand, color, price, img }) => (
              <CarsCard
                id={id}
                brand={brand}
                color={color}
                price={price}
                img={img}
              />
            ))}
          {/*    {cars.data.map((car) => (
            <CarsCard car={car} />
          ))}  */}
        </div>
      </main>
      <Footer />
    </>
  );
};

const CarsCard = ({ id, brand, color, price, img }) => {
  console.log(id, brand, color);
  return (
    <article className=" h-[15rem] w-[15rem] bg-light-grey">
      <div className="h-[10rem]">
        <img
          className="h-full w-full object-cover"
          src={img}
          alt={`Image of ${brand}`}
        />
      </div>
      <div className='pb-3 pt-2 px-2'>
        <p>Brand: {brand}</p>
        <p>Color: {color}</p>
        <p>Price: {price}$</p>
      </div>
    </article>
  );
};

export default CarsUI;
