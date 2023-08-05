import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../Store/cartSlice";
import { fetchProductData } from "../../Store/productSlice";
import { STATUS } from "../../Store/productSlice";
import Alert from "../Alert/Alert";
export default function Product() {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const product_data = useSelector((state) => state.product.data);
  const product_status = useSelector((state) => state.product.status);

  const addCartHandler = (product) => {
    setAlertFlag(true);
    setTimeout(() => {
      setAlertFlag(false);
    }, 3000);

    dispatch(addToCart(product));
    console.log(product);
  };

  const [alertFlag, setAlertFlag] = useState(false);

  useEffect(() => {
    // const getProductList = async () => {
    //   const response = await fetch("https://fakestoreapi.com/products");
    //   const data = await response.json();
    //   const jsonString = JSON.stringify(data);
    //   console.log(data);
    //   setProducts(data);}
    // getProductList();

    dispatch(fetchProductData());
  }, []);

  console.log(product_data);
  if (product_status === STATUS.LOADING) {
    return <div>Loading...</div>;
  } else if (product_status === STATUS.ERROR) {
    return <div>Erro is Occured !</div>;
  } else if (product_status === STATUS.SUCCEEDED) {
    return (
      <>
        <div>
         { alertFlag && <Alert /> } 
        </div>

        <div className="bg-white">
          {console.log(products.length)}
          <div className="mx-auto max-w-2xl px-4 sm:px-6 sm:py-6 lg:max-w-7xl lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Customers also purchased
            </h2>

            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {product_data.map((product) => (
                <div key={product.id}>
                  <div className="relative overflow-hidden rounded-md  lg:aspect-none group shadow-custom object-center  ">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="object-contain object-center lg:h-40 lg:w-full hover:scale-110 transition duration-500 ease-in-out justify-center p-5 m-0 "
                    />
                    {/* Black overlay with 20% opacity */}
                    <div className=" inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity" />
                  </div>

                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm text-gray-700">
                        <a>
                          <span aria-hidden="true" className="inset-0" />
                          {product.title.split(" ").slice(0, 4).join(" ")}
                        </a>
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">
                        {product.color}
                      </p>
                    </div>

                    <p className="text-sm font-medium text-gray-900">
                      {product.price}
                    </p>
                  </div>

                  <div>
                    <button
                      onClick={() => addCartHandler(product)}
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }
}
