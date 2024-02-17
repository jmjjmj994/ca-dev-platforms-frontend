import { useEffect } from 'react';

/*0: Object { id: 59, created_at: "2024-02-17T21:20:12.758366+00:00", brand: "Bugatti Chiron", … }
​​​
brand: "Bugatti Chiron"
​​​
color: "Black"
​​​
created_at: "2024-02-17T21:20:12.758366+00:00"
​​​
id: 59
​​​
img: "https://images.unsplash.com/photo-1566023888476-6f17e362fbb7?q=80&w=2865&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
​​​
price: 600000 */

const GridCard = ({ id, brand, color, img, price }) => {
  return (
    <article key={id} className='h-[5rem] w-[5rem]'>
      <div>
        <img src={img} alt={`image of ${brand}`} />
      </div>

      <div>
        <h2>{brand}</h2>
        <a role='button' aria-label='car' href="#">Read more</a>
      </div>
    </article>
  );
};
export default GridCard;

/* 
<article>{cars.data && cars.data.map(({id, brand, color, img})=>(
    <>
    <div key={id}>
        <img src={img} alt={`Image of ${brand}`} />
    </div>
    <div>
        <h2>{brand}</h2>
    </div>
    </>
))}</article> */
