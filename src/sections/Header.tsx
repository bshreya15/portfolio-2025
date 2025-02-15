export const Header = () => {
  return (
    <div className="flex justify-center fixed items-center top-0 left-0 right-0 pt-8 z-10">
      <nav className="flex p-0.5 md:gap-12 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <a
          href="#"
          className="nav-item" >
          Home
        </a>
        <a href="#" className="nav-item">Projects</a>
        <a href="#" className="nav-item">About</a>
        <a href="#" className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900">Contact</a>
      </nav>
    </div>
  );
};
