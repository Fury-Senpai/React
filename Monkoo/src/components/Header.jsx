const Header = () => {
    return (
        <header className="flex h-max items-center justify-between bg-transparent absolute w-[90%] left-[50%] transform translate-x-[-50%] top-8 z-20">
            {/* right */}
            <div>
                <h3 className="text-5xl font-[primary-font] text-(--primary-gray)">
                    Monkoo
                </h3>
            </div>
            {/* left */}
            <div>
                <ul className="flex gap-8 text-(--primary-gray) text-2xl max-lg:text-xl ">
                    <li className="hover:text-(--primary-orange)">
                        <a href="#">Home</a>
                    </li>
                    <li className="hover:text-(--primary-orange)">
                        <a href="#">Explore</a>
                    </li>
                    <li className="hover:text-(--primary-orange)">
                        <a href="#">Contact</a>
                    </li>
                    <li className="hover:text-(--primary-orange)">
                        <a href="#">About</a>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header;