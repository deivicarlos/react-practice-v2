import useCounter from "@/hooks/useCounter";

type ButtonProps = React.ComponentPropsWithoutRef<"button"> & {
    variant?: "primary" | "danger"
}

const Button = ({ variant="primary", className, ...rest }: ButtonProps) => {

    const base = "px-4 py-2 rounded text-lg";
    const variants = {
        primary: "bg-blue-300 hover:bg-blue-400",
        danger: "bg-red-400 hover:bg-red-500 text-white"
    };

    return (
        <button type="button" className={`${base} ${variants[variant]} ${className}`} {...rest} />
    )
};

const MainContent = () => {
    const {value, increment, decrement, reset} = useCounter();

     
    return (
        <div className="flex flex-col p-4 h-full gap-y-4">
            <div className="flex flex-col justify-center items-center h-full gap-y-4">

                <div className="flex gap-x-2 w-full justify-center">
                    <Button aria-label="Increment" onClick={increment}>+</Button>
                    <Button aria-label="Decrement" onClick={decrement}>-</Button>
                    <Button aria-label="Reset" onClick={reset} variant="danger">Reset</Button>
                </div>
                <div className="flex">
                    <output aria-live="polite" className="text-2xl tabular-nums">
                        {value}
                    </output>
                </div>
            </div>
        </div>
    )
}


export default MainContent;