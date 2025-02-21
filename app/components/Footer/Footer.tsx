const Footer = () => {
  return (
    <footer className="w-full mx-auto mt-14">
      <div className="text-base font-semibold text-gray-500 flex flex-col gap-6 items-center py-10 md:py-12 lg:py-14 px-16 lg:px-fluid-16-64 bg-gray-300/40">
        <div className="flex flex-wrap gap-1 justify-center text-xs md:text-sm lg:text-base">
          <span>&copy; VENN STUDIO &middot; </span>
          <span>All rights reserved</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;