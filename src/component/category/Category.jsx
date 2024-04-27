import React from 'react'

const category = [
    {
        image: 'https://cdn-icons-png.flaticon.com/256/4359/4359963.png',
        name: 'fashion'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/256/11833/11833323.png',
        name: 'shirt'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/256/8174/8174424.png',
        name: 'jacket'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/256/7648/7648246.png',
        name: 'mobile'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/256/12142/12142416.png',
        name: 'laptop'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/256/10686/10686553.png',
        name: 'shoes'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/256/12114/12114279.png',
        name: 'home'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/256/11946/11946316.png',
        name: 'books'
    }
]

function Category() {
    
  return (
    <div>
      <div className="main1 flex flex-col mt-5   ">
        <div className="main2 flex  overflow-x-scroll justify-center ">
            <div className="category flex  ">
                {category.map((item,index)=>{return(
                        <div key={index} className="div px-3 lg:px-8 ">
                            <div  className="name bg-indigo-600 rounded-full transition-all "><img className='h-16 w-16 lg:w-24 lg:h-24 flex justify-center' src={item.image} alt="" /></div>
                            <div className="img text-xl font-medium "><h1 className='first-letter:uppercase text-center'>{item.name}</h1></div>
                        </div>
                     )})}
            </div>
        </div>
      </div>
    </div>
  )
}

export default Category
