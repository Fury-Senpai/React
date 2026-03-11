import CustomButton from "./CustomButton";


const Header = () => {
    return (
        <nav>
            <header className="flex justify-between pb-8 border-b-2">
                <h1 className="text-5xl font-bold text-(--color-primary) font-[primary-font] -tracking-[-0.5rem]">
                    META MINT
                </h1>

                <div className="flex gap-6">
                    <ul className="flex gap-4">
                        <CustomButton className="bg-transparent border-2 border-white px-8 py-2 rounded-3xl" txt={"HOME"} />
                        <CustomButton className="bg-transparent border-2 border-white px-8 py-2 rounded-3xl" txt={"EXPLORE"} />
                        <CustomButton className="bg-transparent border-2 border-white px-8 py-2 rounded-3xl" txt={"DROPS"} />
                        <CustomButton className="bg-transparent border-2 border-white px-8 py-2 rounded-3xl" txt={"UPDATES"} />
                    </ul>
                    <ul>
                        <CustomButton className="bg-(--color-primary) border-2 border-(--color-primary) px-8 py-2 rounded-3xl text-black font-medium" txt={"SIGNUP"} />
                    </ul>
                </div>
            </header>

            
        </nav>
    )
}

export default Header;