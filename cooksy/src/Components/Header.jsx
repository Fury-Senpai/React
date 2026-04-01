import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
const Header = () => {
  const navigate = useNavigate();
  return (
    <nav className='flex justify-center bg-(--color-mint) text-(--color-olive) w-full h-20 select-none top-0 fixed left-0 z-10'>
        <div className='flex h-20  w-[80%] items-center justify-between border-b border-b-gray-500'>
            <div className='text-4xl '>
                <p className='font-[keshia] cursor-pointer' onClick={()=>{
                    navigate('/')
                }}>
                    Cooksy
                </p>
            </div>

            <ul className='flex gap-10 h-full items-center'>
                {/* Home */}
                <NavLink to="/" className={({isActive})=>
                isActive?"relative z-10 flex justify-center items-center text-amber-50 w-max h-max px-8 py-3 after:content-[''] after:rounded-3xl after:w-full after:h-full after:absolute after:left-0 after:bg-(--color-olive) after:z-0 transition-all ease-in":""}>
                    <span className='relative z-10'>Home</span>
                </NavLink>
                {/* Recipe */}
                <NavLink to="/recipe" className={({isActive})=>
                isActive?"relative z-10 flex justify-center items-center text-amber-50 w-max h-max px-8 py-3 after:content-[''] after:rounded-3xl after:w-full after:h-full after:absolute after:left-0 after:bg-(--color-olive) after:z-0 transition-all ease-in":""}>
                    <span className='relative z-10'>Recipe</span>
                </NavLink>
                {/* About */}
                <NavLink to="/about" className={({isActive})=>
                isActive?"relative z-10 flex justify-center items-center text-amber-50 w-max h-max px-8 py-3 after:content-[''] after:rounded-3xl after:w-full after:h-full after:absolute after:left-0 after:bg-(--color-olive) after:z-0 transition-all ease-in":""}>
                    <span className='relative z-10'>About</span>
                </NavLink>
            </ul>
        </div>
    </nav>
  )
}

export default Header