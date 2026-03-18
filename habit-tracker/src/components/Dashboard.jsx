import heroProfile from '../assets/images/logo-removedBg.png'
import levelUpLogo from '../assets/images/level-up-removebg.png'
import expIcon from '../assets/images/exp-logo-removeBg.png'
import heartIcon from '../assets/images/heart-icon-removeBg.png'
import goldSackIcon from '../assets/images/goldSack-icon-removedBg.png'

function Dashboard() {
  return (
    <div className=''>
        <div className='flex items-center gap-10 w-full justify-center'>
            <div className='w-60'>
                <img className='w-full h-full object-cover object-center drop-shadow-[0_0_25px_#8B62C2]' src={heroProfile} alt="" />
            </div>
            <h2 className='text-5xl font-bold font-serif'>
               PLAYER 1
            </h2>
        </div>

        <div className='flex justify-evenly'>
            {/* LEFT DIV LEVEL UP */}
            <div className='bg-(--transparent-purple) w-[45%] p-9 flex flex-col gap-10'>
                <div className='flex items-center gap-10'>
                    <div className='w-20 h-20 p-2 bg-black border-2 border-(--ivory-white) rounded-full'>
                        <img className='w-full h-full object-cover object-center drop-shadow-[0_0_25px_#8B62C2]' src={levelUpLogo} alt="" />
                    </div>
                    <h3 className='text-4xl font-serif font-bold'>
                        Stats
                    </h3>
                </div>

                <div className='flex flex-col w-full gap-2'>
                    <div>
                        <h4 className='text-2xl font-semibold'>
                            Health
                        </h4>
                        <div className='flex items-center gap-5'>
                            <div className='w-10'>
                                <img src={expIcon} alt="" />
                            </div>
                            <div className="h-5 w-100 rounded-2xl overflow-hidden relative bg-(--light-black) after:content-[''] after:absolute after:left-0 after:top-0 after:bg-(--accent-purple) after:w-50 after:h-full after:rounded-r-full">

                            </div>
                        </div>
                    </div>

                    <div>
                        <h4 className='text-2xl font-semibold'>
                            Health
                        </h4>
                        <div className='flex items-center gap-5'>
                            <div className='w-10'>
                                <img src={heartIcon} alt="" />
                            </div>
                            <div className="h-5 w-100 rounded-2xl overflow-hidden relative bg-(--light-black) after:content-[''] after:absolute after:left-0 after:top-0 after:bg-(--accent-purple) after:w-50 after:h-full after:rounded-r-full">

                            </div>
                        </div>
                    </div>

                    <div>
                        <h4 className='text-2xl font-semibold'>
                            Health
                        </h4>
                        <div className='flex items-center gap-5'>
                            <div className='w-10'>
                                <img src={goldSackIcon} alt="" />
                            </div>
                            <div className="h-5 w-100 rounded-2xl overflow-hidden relative bg-(--light-black) after:content-[''] after:absolute after:left-0 after:top-0 after:bg-(--accent-purple) after:w-50 after:h-full after:rounded-r-full">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* RIGHT DIV EXP */}
            <div className='bg-(--transparent-purple) w-[45%] flex flex-col p-9'>
                <div className='flex items-center gap-10'>
                    <div className='w-20 h-20 p-2 bg-black border-2 border-(--ivory-white) rounded-full'>
                        <img className='w-full h-full object-cover object-center drop-shadow-[0_0_25px_#8B62C2]' src={levelUpLogo} alt="" />
                    </div>
                    <h3 className='text-4xl font-serif font-bold'>
                        Exp
                    </h3>
                </div>
                
                <div className='self-center'>
                    <svg className='' width="300" height="300" viewBox="-25 -25 250 250" version="1.1" xmlns="http://www.w3.org/2000/svg" style={{ transform: "rotate(-90deg)" }}>
                        <circle r="90" cx="100" cy="100"  stroke="white" strokeWidth="16px"></circle>
                        <circle className="circle2" r="90" cx="100" cy="100" stroke="#8B62C2" strokeWidth="16px" strokeLinecap="" strokeDashoffset="283px" fill="transparent" strokeDasharray="566px"></circle>
                        <text className="progress-number absolute" x="70px" y="117px" fill="white" fontSize="52px" fontWeight="bold" style={{transform: "rotate(90deg)  translate(0px, -196px)"}}>XP</text>
                    </svg>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Dashboard