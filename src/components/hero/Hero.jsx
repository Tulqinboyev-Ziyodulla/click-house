import React from 'react'
import "./hero.css"
import herologo from "../../assets/image 34.png"
const Hero = () => {
    return (
        <div className='hero mb-10'>
            <div className='container mx-auto'>
                <div className="hero__wrapper flex gap-4 box ">
                    <div className="hero__box  border-none p-14 flex flex-col gap-7 hero">
                        <p className='max-w-80 font-bold text-5xl'>Мебель на любой вкус!</p>
                        <div className="flex flex-col">
                            <p className='desc'>Худи, чашки для горячего чая и термосы</p>
                            <p className='desc'>Начало списка вещей, которые можно</p>
                            <p className='desc'>Eлочные игрушки, брелочки</p>
                        </div>
                        <button className=' w-full border-none bg-orange-500 py-2 rounded-full text-fuchsia-50 font-medium'>Перейти в каталог</button>
                        <button className=' w-full py-2 rounded-full text-orange-400 font-medium mt-3'>Перейти в каталог</button>
                    </div>
                    <div className='hero__img'>
                        <img src={herologo} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero