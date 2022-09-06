import React, { useState } from 'react'
import ItemsCarousel from 'react-items-carousel';
import product1 from '../assets/products/1.png'
import product2 from '../assets/products/2.png'
import product3 from '../assets/products/3.png'
import product4 from '../assets/products/4.png'
import product5 from '../assets/products/5.png'
import product6 from '../assets/products/6.png'
import product7 from '../assets/products/7.png'
import product8 from '../assets/products/8.jpeg'
import product9 from '../assets/products/9.jpeg'
import product10 from '../assets/products/10.jpeg'
import product11 from '../assets/products/11.jpeg'
let products = [
{
    name: "Mug",
    price: "120 UNI",
    image: product1
},
{
    name: "Mug",
    price: "150 UNI",
    image: product2
},
{
    name: "Mug",
    price: "150 UNI",
    image: product3
},
{
    name: "T-Shirt",
    price: "300 UNI",
    image: product4
},
{
    name: "T-Shirt",
    price: "250 UNI",
    image: product5
},
{
    name: "T-Shirt",
    price: "270 UNI",
    image: product6
},
{
    name: "T-Shirt",
    price: "250 UNI",
    image: product7
},
{
    name: "Book",
    price: "120 UNI",
    image: product8
},
{
    name: "Book",
    price: "150 UNI",
    image: product9
},
{
    name: "Book",
    price: "200 UNI",
    image: product10
},
{
    name: "Book",
    price: "150 UNI",
    image: product11
}
]


function Products() {
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const chevronWidth = 40;
      return (
        <div style={{ padding: `0 ${chevronWidth}px` }}>
          <ItemsCarousel
            infiniteLoop={true}
            requestToChangeActive={setActiveItemIndex}
            activeItemIndex={activeItemIndex}
            numberOfCards={3}
            gutter={20}
            leftChevron={<button>{'<'}</button>}
            rightChevron={<button>{'>'}</button>}
            outsideChevron
            chevronWidth={chevronWidth}
          >
            {products.map((item, index)=> {
                return (
                <div key={index} className='flex flex-col h-[300px] bg-gray-100 items-center rounded-lg justify-center'>
                        <img className='max-h-[200px]' src={item.image} alt={item.name} />
                        <h2 className='font-bold'>{item.name}</h2>
                        <p>{item.price}</p>
                </div>
                )
            })}
          </ItemsCarousel>
        </div>
      );
    };

export default Products