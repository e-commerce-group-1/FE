import FooterComponent from "./Footer";
import NavbarComponent from "./Navbar";

function Layout({children}) {

  return ( 
    <>
      <NavbarComponent />
      <div className="mt-8">{children}</div>
      <FooterComponent />
    </>
  );
}

export default Layout;