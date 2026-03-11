import { Linkedin , Github , MoveUpRight  } from 'lucide-react';
const Footer = () => {
    return (
        <footer className="border-t-2 p-10">
            <div className="w-full flex justify-center">
                <h1 className="text-5xl font-bold text-(--color-primary) font-[primary-font] -tracking-[-0.5rem]">META MINT</h1>
            </div>

            {/* BOTTOM */}
            <div className='flex justify-between'>
                {/* RIGHT */}
                <div className='flex flex-col gap-5 w-max '>
                    <h3 className='font-bold text-2xl'>
                        CONTACT
                    </h3>
                    <ul className='flex gap-4 flex-col w-full'>
                        <li>
                            <a className='flex gap-2' href="https://www.linkedin.com/in/nitish-harbola-a795a2189" target="_blank" rel="noopener noreferrer">
                                <Linkedin color='#277ad3'/>
                                <MoveUpRight color='#CEFF05' size={20} />
                            </a>
                        </li>
                        <li>
                            <a className='flex gap-2' href="https://github.com/Fury-Senpai" target="_blank" rel="noopener noreferrer">
                                <Github color='#ffffff'/>
                                <MoveUpRight color='#CEFF05' size={20} />
                            </a>
                        </li>
                    </ul>
                </div>
                {/* LEFT */}
                <div className='flex flex-col gap-5 w-max'>
                    <h3 className='font-bold text-2xl'>
                        QUICK LINKS
                    </h3>

                    <ul className='flex gap-4 flex-col underline justify-center self-end'>
                        <li >
                            <a  href="#">
                                HOME
                            </a>
                        </li>
                        <li>
                            <a className='flex gap-2' href='#'>
                                ABOUT
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;