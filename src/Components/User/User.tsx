import { useEffect, useState } from 'react';
import { createCarListing } from '../../fetch/fetch';
interface LocalStorageData {
  email: string;
  token: string;
  id: string;
  loggedIn: boolean;
}

const UserInterface = () => {
  const data = UserDetails();
  const [car, setCar] = useState({
    brand: '',
    color: '',
    price: 0,
    img: '',
  });
  const [brand, setBrand] = useState('');
  const [color, setColor] = useState('');
  const [price, setPrice] = useState(0);
  const [img, setImage] = useState('');
  const [success, setSuccess] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleCar = ({ id, value }) => {
    switch (id) {
      case 'brand':
        setBrand(value);
        break;
      case 'color':
        setColor(value);
        break;
      case 'price':
        setPrice(value);
        break;
      case 'img':
        setImage(value);
        break;
    }
    setCar((prevCar) => ({ ...prevCar, [id]: value }));
  };

  const handleSuccess = () => {
    return <p>{success}</p>;
  };
  const validate = async () => {
    console.log(car);
    try {
      if (car.brand && car.color && car.price && car.img) {
        setIsLoading(true);
        const data = await createCarListing({
          brand: car.brand,
          color: car.color,
          price: car.price,
          img: car.img,
        });
        if (data && data.success) {
          setBrand('');
          setColor('');
          setPrice(0);
          setImage('');
          setSuccess(data.success);
          setCar({ brand: '', color: '', price: 0, img: '' });
          setIsLoading(false);
          setTimeout(() => {
            setSuccess('');
          }, 3000);
        } else {
          setIsLoading(false);
        }
      } else {
        console.log('Some fields are missing.');
      }
    } catch (error) {
      console.error('Error creating car listing:', error);
    }
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section className="user-container bg-white px-4 py-5 rounded-md shadow-xl">
      <div className="flex w-full items-center  justify-between">
        <img
          className="object-cover rounded-full w-[3rem] h-[3rem]"
          src="https://images.unsplash.com/photo-1636622433525-127afdf3662d?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="avatar"
        />
        <h1>{data.email}</h1>
      </div>

      <form onSubmit={handleSubmit} className="pt-10 pb-10">
        <div className="h-full  flex flex-col items-center justify-center gap-2">
          <div className="flex flex-col gap-0.5 w-full">
            <label htmlFor="brand">Brand</label>
            <input
              required
              className="bg-light-grey border border-dark-grey py-2 pl-2 rounded-md"
              type="text"
              placeholder="Brand"
              id="brand"
              value={brand}
              onChange={(event) =>
                handleCar({ id: 'brand', value: event.target.value })
              }
            />
          </div>

          <div className="flex flex-col gap-0.5 w-full">
            <label htmlFor="colors">Colors</label>
            <select
              className="car-price bg-light-grey border border-dark-grey py-2 pl-2 rounded-md"
              value={color}
              onChange={(event) =>
                handleCar({ id: 'color', value: event.target.value })
              }
              required
              name="colors"
              id="colors"
            >
              <option value=""> - Car color -</option>
              <option value="black"> Black</option>
              <option value="white"> White</option>
              <option value="red"> Red</option>
              <option value="blue"> Blue</option>
              <option value="orange"> Orange</option>
            </select>
          </div>
          <div className="flex flex-col gap-0.5 w-full">
            <label htmlFor="price">Price</label>
            <input
              required
              className="car-price bg-light-grey border border-dark-grey py-2 pl-2 rounded-md"
              type="number"
              placeholder="Price"
              id="price"
              value={price}
              onChange={(event) =>
                handleCar({ id: 'price', value: event.target.value })
              }
            />
          </div>
          <div className="flex flex-col gap-0.5 w-full">
            <label htmlFor="image">Image</label>
            <input
              required
              className="bg-light-grey border border-dark-grey py-2 pl-2 rounded-md"
              type="text"
              placeholder="Image"
              id="image"
              value={img}
              onChange={(event) =>
                handleCar({ id: 'img', value: event.target.value })
              }
            />
          </div>
          <div className="flex flex-col gap-0.5 w-full">
            <button
              onClick={async () => validate()}
              className="flex bg-primary py-3 rounded-md text-white  mt-5 flex-col gap-0.5 w-full"
            >
              Create listing
            </button>
          </div>

          {isLoading && (
            <div className="lds-ring">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          )}

          <p> {success && handleSuccess()}</p>
        </div>
      </form>
    </section>
  );
};
export default UserInterface;

const UserDetails = () => {
  const [details, setDetails] = useState<LocalStorageData>({
    email: '',
    token: '',
    id: '',
    loggedIn: false,
  });

  useEffect(() => {
    const getItems: LocalStorageData = JSON.parse(
      localStorage.getItem('user') || '{}'
    );

    setDetails({
      email: getItems.email,
      token: getItems.token,
      id: getItems.id,
      loggedIn: getItems.loggedIn,
    });
  }, []);

  return details;
};
