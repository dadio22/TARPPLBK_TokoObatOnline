import { useState } from "react";

export default function Cardobat({ name, image, price }) {
  const [count, setCount] = useState(0);
  const countUp = () => setCount(count + 1);
  const countDown = () => setCount(count - 1);

  return (
    <div className="group relative">
      <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
        <img
          src={image}
          alt="gambar"
          className="w-full h-full object-center object-cover lg:w-full lg:h-full"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <a>
              <span aria-hidden="true" className="absolute inset-0" />
              {name}
            </a>
          </h3>
        </div>
        <p className="text-sm font-medium text-gray-900">{price}</p>
      </div>

      <div class="custom-number-input h-10 w-32">
        <label
          for="custom-input-number"
          class="w-full text-gray-700 text-sm font-semibold"
        >
          Quantity
        </label>
        <div class="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
          <button
            data-action="decrement"
            class=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
            onClick={countDown}
          >
            <span class="m-auto text-2xl font-thin">−</span>
          </button>
          <input
            type="number"
            class="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none"
            name="custom-input-number"
            value={count}
          ></input>
          <button
            data-action="increment"
            class="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
            onClick={countUp}
          >
            <span class="m-auto text-2xl font-thin">+</span>
          </button>
        </div>
      </div>
    </div>
  );
}
