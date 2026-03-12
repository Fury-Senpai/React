import monk from '../assets/images/monk2-hd.png';
import freakMonk from '../assets/images/freaky-monkey.png'
import coldMonk from '../assets/images/coldy-monk.png'
import camoMonk from '../assets/images/camo-monk.png'
import pirateMonk from '../assets/images/pirate-monk.png'
import bjpMonk from '../assets/images/bjp-monk.png'
import hoodMonk from '../assets/images/hood-monk.png'
import prisonerMonk from '../assets/images/prisoner-monk.png'

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

            <section className='mt-5'>
            <div className='flex w-full relative'>
                
                {/* Left Panel - Black */}
                <div className='bg-black w-[35%] relative h-[22em] md:h-[28em] lg:h-[35em] xl:h-[50em] 2xl:h-[55em]'>
                <img 
                    src={prisonerMonk} 
                    className='w-[70%] md:w-[75%] lg:w-[80%] max-w-[500px] xl:max-w-[600px] 2xl:max-w-[750px] object-cover object-top absolute bottom-0 right-0'
                />
                </div>

                {/* Center Panel - White */}
                <div className='bg-(--primary-white) w-[30%] h-[22em] md:h-[28em] lg:h-[35em] xl:h-[50em] 2xl:h-[55em]'>
                <img 
                    src={hoodMonk} 
                    className='object-cover object-top w-[40%] md:w-[38%] lg:w-[35%] max-w-[400px] xl:max-w-[500px] 2xl:max-w-[600px] absolute bottom-0 left-1/2 transform -translate-x-1/2'
                />
                </div>

                {/* Right Panel - Orange */}
                <div className='bg-(--primary-orange) w-[35%] h-[22em] md:h-[28em] lg:h-[35em] xl:h-[50em] 2xl:h-[55em] relative'>
                <img 
                    src={bjpMonk} 
                    className='w-[70%] md:w-[75%] lg:w-[80%] max-w-[500px] xl:max-w-[600px] 2xl:max-w-[750px] object-cover object-top absolute bottom-0 -left-6 md:-left-8 lg:-left-10'
                />
                </div>

                {/* CTA Button */}
                <div className='absolute bottom-6 md:bottom-8 lg:bottom-10 left-1/2 transform -translate-x-1/2 whitespace-nowrap'>
                <CustomButton text="Get Free NFT Now" />
                </div>

            </div>

            {/* Text Section */}
            <div className='flex flex-col gap-4 md:gap-5 lg:gap-6 p-8 md:p-12 lg:p-15 xl:p-20 2xl:p-24'>
                <h3 className='text-(--primary-white) text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-medium'>
                MONKOO IS A <span className='text-(--primary-orange)'>REVOLUTION</span>
                </h3>
                <p className='text-sm md:text-base xl:text-lg 2xl:text-xl leading-relaxed'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, quis!<br/>
                Lorem ipsum dolor sit, amet consectetur adipisicing.<br/>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, harum.
                </p>
            </div>
            </section>
        </div>
    )
}

export default LandingPage;