import React from 'react'
import { useNavigate } from 'react-router-dom';
const productData = [
    {
        id: 1,
        image: 'https://i.pinimg.com/564x/3e/05/ce/3e05cefbc7eec79ac175ea8490a67939.jpg',
        title: 'Hand Painted Blue Kaushalam Tea Pot in Aluminium',
        desc: 'Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.',
        price: 150,
        trendingProductName: 'Featured',
        quantity: 1,
    },
    {
        id: 2,
        image: 'https://i.pinimg.com/736x/e4/61/f2/e461f2246b6ad93e2099d98780626396.jpg',
        title: 'Kaushalam kalash Copper Pot',
        desc: 'Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.',
        price: 120,
        trendingProductName: 'Featured',
        quantity: 1,
    },
    {
        id: 3,
        image: 'https://i.pinimg.com/564x/fd/50/68/fd50688767adb47aba7204f034554cbd.jpg',
        title: 'Hand Painted Blue Kaushalam Tea Pot in Aluminium',
        desc: 'Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.',
        price: 130,
        trendingProductName: 'Featured',
        quantity: 1,
    },
    {
        id: 4,
        image: 'https://i.pinimg.com/564x/22/80/8d/22808d88ada424962f2e064f3075b2d1.jpg',
        title: 'Hand Painted Blue Kaushalam Tea Pot in Aluminium',
        desc: 'Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.',
        price: 120,
        trendingProductName: 'Featured',
        quantity: 1,
    },
    {
        id: 1,
        image: 'https://i.pinimg.com/564x/3e/05/ce/3e05cefbc7eec79ac175ea8490a67939.jpg',
        title: 'Hand Painted Blue Kaushalam Tea Pot in Aluminium',
        desc: 'Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.',
        price: 150,
        trendingProductName: 'Featured',
        quantity: 1,
    },
    {
        id: 2,
        image: 'https://i.pinimg.com/736x/e4/61/f2/e461f2246b6ad93e2099d98780626396.jpg',
        title: 'Kaushalam kalash Copper Pot',
        desc: 'Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.',
        price: 120,
        trendingProductName: 'Featured',
        quantity: 1,
    },
    {
        id: 3,
        image: 'https://i.pinimg.com/564x/fd/50/68/fd50688767adb47aba7204f034554cbd.jpg',
        title: 'Hand Painted Blue Kaushalam Tea Pot in Aluminium',
        desc: 'Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.',
        price: 130,
        trendingProductName: 'Featured',
        quantity: 1,
    },
    {
        id: 4,
        image: 'https://i.pinimg.com/564x/22/80/8d/22808d88ada424962f2e064f3075b2d1.jpg',
        title: 'Hand Painted Blue Kaushalam Tea Pot in Aluminium',
        desc: 'Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.',
        price: 120,
        trendingProductName: 'Featured',
        quantity: 1,
    }
]

function HeroPageCard() {
    const navigate=useNavigate();
  return (
    <div>
      <div className="products ">
        <div className="heading flex justify-center my-2">
            <h1 className='text-xl lg:text-3xl font-bold'>Bestselling Products</h1>
        </div>
        <div className="products_card text-black">
            <div className="container px-4 lg:px-24  ">
                <div className="main2 grid grid-cols-1 md:grid-cols-3 lg:mx-auto ">
                    {productData.map((item,index)=>{
                         const{image,title,price}=item;
                          return (<div key={index} className="main bg-slate-200 shadow-md  m-4 rounded-md border-2 border-gray-500  ">
                            <div className="img   ">
                                <img onClick={()=>navigate('/productinfo')} 
                                 className=' w-full h-96 lg:h-80 rounded-t-md ' src={image} alt="" />
                            </div>
                            <div className="text_all px-3">
                                <h1>ShopSphere</h1>
                                <h2 className='text-xl font-medium ' >{title.substring(0,25)}</h2>
                                <h3 className=' font-medium'>Rs. {price}</h3>
                            </div>
                            <div className="button m-2 text-white font-bold">
                                <button className='w-full py-2 bg-indigo-600 rounded-md'>Add to card</button>
                            </div>
                          </div> )})}
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default HeroPageCard
