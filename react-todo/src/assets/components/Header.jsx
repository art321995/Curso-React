import MoonIcon from "./icons/MoonIcon";


const Header = (params) => {
  return(
    <header className="container mx-auto px-4 pt-8">
        <div className="flex justify-between">
          <h1 className="uppercase text-white text-2xl font-semibold tracking-[0.3em]">Todo</h1>
          <button>
            <MoonIcon />
          </button>
        </div> 
      </header>
  );
};
export default Header;