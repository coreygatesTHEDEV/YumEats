import React, {useState} from 'react'
import { IoIosArrowDropleftCircle, IoIosArrowDropRightCircle } from "react-icons/io";


export default function Featured() {
    const sliders = [
            
        {
        url: 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672076/NetflixApp/burger_emxbtv.jpg'
        },
        {
        url: 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672452/NetflixApp/pizza_osjb4f.jpg'
        },
        {
        url: 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672612/NetflixApp/ric_a4ewxo.jpg',
        }
    ]

    const [currentIndex, setCurrentIndex] = useState(0)

  return (
    <div className = 'max-w-full h-[500px] w-full py-4 px-4 relative'> 
        <div className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
        style={
            //access the sliders array, get the objects url to show the image
            {backgroundImage: `url(${sliders[currentIndex].url})`}
        }>
        <button className='text-white rounded-full text-bold'>
                  <div className='pr-3'>
                    <IoIosArrowDropleftCircle size={65}/> 
                  </div>
        </button>         
        </div>
    </div>
  )
}
