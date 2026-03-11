const CustomButton = (props) => {
    return (
        <button className={`${props.className} cursor-pointer transition-all ease-in-out duration-200 active:scale-95`}>
            {props.txt}
        </button>
    )
}

export default CustomButton;