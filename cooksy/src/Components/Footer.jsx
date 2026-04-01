import React from 'react'
import { FaLinkedin , FaGithub } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className='w-full  bg-(--color-pale-green) text-(--color-olive)'>
        <div className='w-full flex items-center flex-col gap-5 pb-10'>
            <h2 className='font-[keshia] cursor-pointer pt-5 text-6xl text-center ' onClick={()=>{
                navigate('/')
            }} >
                Cooksy
            </h2>
            <p className='text-xl w-1/3 text-center'>
                Cooksy is built to make your cooking experience effortless and inspiring. From quick meals to flavorful dishes, we bring you recipes that fit your lifestyle and taste.
            </p>
        </div>

        <div className= 'bg-(--color-med-green) flex px-30 py-10 justify-between w-full'>
            {/* SOCIAL LINKS */}
            <div className='w-max'>
                <h4 className='text-2xl font-semibold border-b w-max mb-2'>
                    Socials
                </h4>
                <ul className='ml-1 w-max'>
                    <a href="https://www.linkedin.com/in/nitish-harbola-a795a2189" className='flex gap-5 items-center text-lg tracking-tighter justify-between w-full' target='_blank'>
                        <h5>LinkedIn</h5>
                        <FaLinkedin />
                    </a>
                       
                    <a href="https://github.com/fury-senpai" target='_blank' className='flex gap-5 items-center text-lg tracking-tighter justify-between w-full'>
                        <h5>Github</h5>
                        <FaGithub />
                    </a>
                </ul>
    
            </div>
            {/* QUICK LINKS */}
            <div className='w-max'>
                <h4 className='text-2 text-2xl font-semibold border-b w-max mb-2'>
                    Quick Links
                </h4>
                <ul className='ml-1 w-full flex flex-col items-center'>
                    {/* Home */}
                    <NavLink to="/">
                        <span className='text-lg tracking-tighter'>Home</span>
                    </NavLink>
                    {/* Recipe */}
                    <NavLink to="/recipe"><span className='text-lg tracking-tighter'>Recipe</span>
                    </NavLink>
                    {/* About */}
                    <NavLink to="/about">
                        <span className='text-lg tracking-tighter'>About</span>
                    </NavLink>
                </ul>
    
            </div>
            {/* COOKSY DETAIL */}
            <div className='w-max flex items-center'>
                <p className='w-2xs'>
                    At Cooksy, we believe cooking should be easy, fun, and full of flavor. Explore recipes, try new dishes, and bring joy to your kitchen with every meal you create.
                </p>
            </div>
        </div>
    </footer>
  )
}

export default Footer