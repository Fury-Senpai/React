import React from 'react'
import bowlImg from '../assets/images/gourment-salad-removebg.png'
import gormetPlate from '../assets/images/gourmet-plate.jpg'
import { useNavigate } from 'react-router-dom'
import { Clock2 , Hamburger , HeartPlus , Soup , CookingPot  } from 'lucide-react'; 
const Home = () => {
    const navigate = useNavigate()
  return (
    <section className='text-amber-50 h-full bg-(--color-pale-green) w-full  select-none flex flex-col items-center'>
        
        <div className='flex justify-center px-30 w-full relative bg-(--color-mint)'>
            <div className='w-1/2 mt-20 mb-10'>
                <div className='h-full flex flex-col justify-center gap-10'>
                    <h1 className='text-7xl font-serif font-bold text-(--color-olive) leading-tight [word-spacing:3rem]'>
                        Craving <br />Something <br /> Delicious?
                    </h1>
                    <p className='text-2xl text-(--color-olive) w-[80%]'>
                        Explore a world of fresh, flavorful recipes made for every mood and moment. From quick bites to full meals, discover dishes that are easy to make, packed with taste, and perfect for your kitchen. Start cooking something amazing today.
                    </p>
                    <button className='bg-(--color-olive) w-max px-8 py-3 text-amber-50 text-2xl rounded-tl-2xl rounded-br-2xl cursor-pointer active:scale-95' onClick={()=>{
                        navigate('/recipe')
                    }}>
                        Explore
                    </button>
                </div>
            </div>
            {/*// // HERO IMAGE */}
            <div className='w-1/2 h-1/2 mt-20'>
                <img src={bowlImg} className='w-full h-full object-cover drop-shadow-[-100px_50px_100px_rgba(0,0,0,0.5)]'/>
            </div>

            {/* Helper */}
            <div className='w-[80%] absolute h-20 bg-(--color-pale-green) bottom-0 transform translate-y-[50%] rounded-4xl flex justify-evenly items-center z-5'>
                <div className='flex gap-5 items-center'>
                    <Clock2 color='var(--color-olive)' size="3rem" />
                    <p className='text-xl text-(--color-olive)'>
                        Quick Recipes
                    </p>
                </div>
                <div className='flex gap-5 items-center'>
                    <Hamburger color='var(--color-olive)' size="3rem" />
                    <p className='text-xl text-(--color-olive)'>
                        Easy Recipes
                    </p>
                </div>
                <div className='flex gap-5 items-center'>
                    <HeartPlus color='var(--color-olive)' size="3rem" />
                    <p className='text-xl text-(--color-olive)'>
                        Healthy Recipes
                    </p>
                </div>
            </div>
        </div>

        

        {/* SITE DETAIL*/}
        <div className='bg-(--color-light-beige) w-full mb-20 text-(--color-olive) relative'>
                <div className='px-30 flex flex-col gap-40 mt-40'>
                    <h3 className='text-(--color-olive) text-5xl font-bold font-serif text-center'>
                        What Cooksy Offer
                    </h3>

                    <div className='flex justify-between items-center'>
                        <div className='w-2xl flex flex-col gap-10'>
                            <h4 className='text-3xl tracking-tight font-semibold'>
                                Everything You Need to Cook Better
                            </h4>
                            <p className='text-xl text-justify'>
                                Cooksy is designed to make your cooking experience effortless and inspiring. Explore a wide collection of flavorful recipes, discover meals tailored to your cravings, and enjoy step-by-step guidance that makes every dish easy to prepare. Whether you're cooking for yourself or your loved ones, Cooksy helps you turn simple ingredients into something truly special.
                            </p>
                            <button className='bg-(--color-olive) w-max px-8 py-3 text-amber-50 text-2xl rounded-tl-2xl rounded-br-2xl cursor-pointer active:scale-95' onClick={()=>{
                            navigate('/recipe')
                            }}>
                                Satisfy Your Cravings 
                            </button>
                        </div>
                        <div className='overflow-hidden w-2xl rounded-[4rem]'>
                            <img src={gormetPlate} className='w-full' />
                        </div>
                    </div>

                    <div className='w-full flex gap-20 mb-40'>
                        <div className='flex gap-10 flex-col bg-(--color-pale-green) px-8 py-10 rounded-[4rem]'>
                            <div className='border-2 w-max p-2 rounded-full'>
                                <Soup  color='var(--color-olive)' size="4rem"/>
                            </div> 
                            <h4 className='text-3xl tracking-tight font-semibold border-b-(--color-olive) border-b pb-1'>
                                Fresh & Healthy Recipes
                            </h4>
                            <p className='text-xl text-justify'>
                                Discover a wide range of handpicked recipes made with fresh ingredients. From light salads to full meals, everything is designed to be tasty and healthy.
                            </p>
                        </div>

                        <div className='flex gap-10 flex-col bg-(--color-pale-green) px-8 py-10 rounded-[4rem]'>
                            <div className='border-2 w-max p-2 rounded-full'>
                                <CookingPot   color='var(--color-olive)' size="4rem"/> 
                            </div>
                            <h4 className='text-3xl tracking-tight font-semibold border-b-(--color-olive) border-b pb-1'>
                                Fresh & Healthy Recipes
                            </h4>
                            <p className='text-xl text-justify'>
                                Discover a wide range of handpicked recipes made with fresh ingredients. From light salads to full meals, everything is designed to be tasty and healthy.
                            </p>
                        </div>

                        <div className='flex gap-10 flex-col bg-(--color-pale-green) px-8 py-10 rounded-[4rem]'>
                            <Soup  color='var(--color-olive)' size="4rem"/> 
                            <h4 className='text-3xl tracking-tight font-semibold border-b-(--color-olive) border-b pb-1'>
                                Fresh & Healthy Recipes
                            </h4>
                            <p className='text-xl text-justify'>
                                Discover a wide range of handpicked recipes made with fresh ingredients. From light salads to full meals, everything is designed to be tasty and healthy.
                            </p>
                        </div>
                        
                    </div>
                </div>
                {/* SVG */}
                <div className="custom-shape-divider-bottom-1775039757">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" className="shape-fill"></path>
                    </svg>
                </div>      
        </div>
    </section>
  )
}

export default Home