import GridCard from './GridCard';
import { useEffect, useState } from 'react';
import { getAllCars } from '../../fetch/fetch';
const Grid = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        setLoading(true);
        const data = await getAllCars();
        console.log(data);
        setCars(data);
      } finally {
        setLoading(false);
      }
    };
    fetchCars();
  }, []);

  return (
    <div className=' h-full'>
      {loading ? (
        <p>Loading....</p>
      ) : (
       cars.data?.map((({id, brand, color, img, price}) => (
        <GridCard id={id} brand={brand} color={color} img={img} price={price}/>
       )))
      )}
    </div>
  );
};

export default Grid;
/* <div className='bg-orange-500 h-full'>{loading ? <p>Loading...</p> : <GridCard cars={cars} />}</div> */
