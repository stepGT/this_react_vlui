const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <footer className="text-center">copyright stepGT &copy; {year}</footer>
    </>
  );
};

export default Footer;
