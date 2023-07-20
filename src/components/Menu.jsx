import logo from "./logo.svg";

export const Menu = (props) => {
    const { onSectionChange, menuOpened, setMenuOpened } = props;

    return (
    <>
        <img
        src={logo}
        className="fixed z-20 bottom-12 right-12 scale-[0.7]"
        />

        <button
        onClick={() => setMenuOpened(!menuOpened)}
        className="z-20 fixed top-12 right-12 p-3 w-11 h-11 rounded-md"
        >
            <div
            className={`bg-black h-0.5 rounded-md w-full transition-all ${
                menuOpened ? "rotate-45 translate-y-0.5" : ""
            }`}
            />
            <div
            className={`bg-black h-0.5 rounded-md w-full my-1 ${
                menuOpened ? "hidden" : ""
            }`}
            />
            <div
            className={`bg-black h-0.5 rounded-md w-full transition-all ${
                menuOpened ? "-rotate-45" : ""
            }`}
            />
        </button>

        <div
        className={`z-10 fixed top-0 right-0 bottom-0 bg-white transition-all overflow-hidden flex flex-col
        ${menuOpened ? "w-80" : "w-0"}`}
        >
            <div className="flex-1 flex items-start justify-center flex-col gap-6 p-8"></div>
            <MenuButton label="About" onClick={() => onSectionChange(0)} />
            <MenuButton label="Works" onClick={() => onSectionChange(3)} />
            <MenuButton label="Archive" onClick={() => onSectionChange(9)} />
            <MenuButton label="Contact" onClick={() => onSectionChange(0)} />
        </div>
    </>);
}

const MenuButton = (props) => {
    const { label, onClick } = props;
    return (
        <button
        onClick={onClick}
        className="text-2xl font-bold cursor-pointer hover:text-indigo-600 transition-colors"
        >
            {label}
        </button>
    )
}