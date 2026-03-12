import monk from '../assets/images/monk2-hd.png';
import freakMonk from '../assets/images/freaky-monkey.png'
import coldMonk from '../assets/images/coldy-monk.png'
import camoMonk from '../assets/images/camo-monk.png'
import pirateMonk from '../assets/images/pirate-monk.png'

import { FaGithub, FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import CustomButton from '../components/CustomButton';

const LandingPage = () => {
    return (
        <div>
            <section className="w-full h-screen relative bg-(--secondary-black) z-10">

                {/* MONKOO TEXT */}
                <h1
                    className="
                absolute top-1/3 left-1/2
                -translate-x-1/2 -translate-y-1/2
                text-[19.8rem]
                scale-105
                font-extrabold
                text-(--secondary-text)
                tracking-widest
                inner-shadow-text
                -z-20 pointer-events-none

                max-[1920px]:text-[15rem]
                max-2xl:text-[12rem]
                max-xl:text-[9rem]
                max-lg:text-[6.5rem]
            "
                >
                    MONKOO
                </h1>


                {/* MONKOO LOGO */}
                <div
                    className="
                w-1/4
                absolute bottom-0 left-1/2
                -translate-x-1/2
                -z-10

                max-xl:w-[40%]
                max-xl:bottom-2
                max-lg:w-1/2
            "
                >
                    <img src={monk} className="w-full h-full object-cover" />
                </div>


                {/* COLLECT NFT TEXT */}
                <h2
                    className="
                absolute
                text-[12rem]
                w-full flex justify-center
                font-bold tracking-wider
                bottom-0 left-1/2
                -translate-x-1/2
                -z-20

                max-[1920px]:text-[10rem]
                max-2xl:text-9xl
                max-lg:text-8xl
            "
                >
                    COLLECT NFT
                </h2>


                {/* NEW TEXT */}
                <h3
                    className="
                absolute
                text-6xl
                bottom-24
                -rotate-90
                left-45
                text-(--primary-orange)
                font-bold

                max-[1920px]:left-25
                max-[1920px]:text-6xl
                max-[1920px]:bottom-23

                max-2xl:text-6xl
                max-2xl:bottom-12
                max-2xl:left-25

                max-xl:text-4xl
                max-xl:bottom-30
                max-xl:left-20
                max-xl:rotate-0

                max-lg:text-4xl
                max-lg:bottom-24
                max-lg:rotate-0
                max-lg:left-15
            "
                >
                    NEW
                </h3>


                {/* LEFT SOCIAL BAR */}
                <div
                    className="
                rounded-tr-2xl rounded-br-2xl
                bg-(--primary-orange)
                w-max
                px-5 py-18
                shadow-[inset_0_6px_12px_rgba(0,0,0,0.9)]

                absolute top-1/2 left-0
                -translate-y-1/2
            "
                >
                    <ul className="flex flex-col gap-20">
                        <a href="https://github.com/Fury-Senpai">
                            <FaGithub size={30} color="black" />
                        </a>

                        <a href="https://linkedin.com/in/nitish-harbola-a795a2189">
                            <CiLinkedin size={30} color="black" />
                        </a>

                        <a href="https://www.instagram.com/narendramodi">
                            <FaInstagram size={30} color="black" />
                        </a>
                    </ul>
                </div>


                {/* RIGHT GLASS PANEL */}
                <div
                    className="
                w-1/3
                bg-(--glass-black)
                backdrop-blur-xs
                border-b border-l border-white/20
                pt-4 px-4
        

                absolute right-0 top-1/2 z-20
                -translate-y-1/2

                max-xl:w-1/2
                max-lg:w-1/2
            "
                >
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Ipsa doloremque maxime quis excepturi, reiciendis adipisci
                        quo reprehenderit incidunt officia deserunt.
                    </p>

                    <CustomButton text="Get More Info" />
                </div>

            </section>

            <section className='mt-20 p-15'>
                <div className='flex flex-col gap-6'>
                    <h3 className='text-(--primary-white) text-4xl font-medium'>
                        GET YOUR <span className='text-(--primary-orange)'>FREE</span> NFT NOW
                    </h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, quis!<br/>
                        Lorem ipsum dolor sit, amet consectetur adipisicing.<br/>
                    </p>
                </div>

                {/* MONKEYS DIV */}
                <div className='flex gap-5 items-end mt-40'>
                    <div className='bg-(--soft-blue) w-xs h-60 relative rounded-tr-[5rem] rounded-tl-[5rem] max-[1440px]:h-40 max-[1210px]:h-30 max-[1024px]:h-25'>
                        <img src={freakMonk} className='w-full absolute bottom-0 left-1/2 transform -translate-x-1/2 max-[1024px]:h-25' />
                    </div>
                    <div className='bg-(--light-yellow) w-xs h-60 relative rounded-tr-[5rem] rounded-tl-[5rem] max-[1440px]:h-40 max-[1210px]:h-30 max-[1024px]:h-25'>
                        <img src={coldMonk} className='w-full absolute bottom-0 left-1/2 transform -translate-x-1/2' />
                    </div>
                    <div className='bg-(--baby-pink) w-xs h-60 relative rounded-tr-[5rem] rounded-tl-[5rem] max-[1440px]:h-40 max-[1210px]:h-30 max-[1024px]:h-25'>
                        <img src={camoMonk} className='w-full absolute bottom-0 left-1/2 transform -translate-x-1/2' />
                    </div>
                    <div className='bg-(--mint-green) w-xs h-60 relative rounded-tr-[5rem] rounded-tl-[5rem] mr-10 max-[1440px]:h-40 max-[1210px]:h-30 max-[1024px]:h-25'>
                        <img src={pirateMonk} className='w-full absolute bottom-0 left-1/2 transform -translate-x-1/2' />
                    </div>

                    <CustomButton text="Explore More" />
                </div>

                <div className='flex flex-col gap-6 mt-40'>
                    <h3 className='text-(--primary-white) text-4xl font-medium'>
                        DIGITAL <span className='text-(--primary-orange)'>-</span> PHYSICAL
                    </h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, quis!<br/>
                        Lorem ipsum dolor sit, amet consectetur adipisicing.<br/>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate sunt laudantium iure recusandae molestiae.
                    </p>
                </div>
            </section>
        </div>
    )
}

export default LandingPage;