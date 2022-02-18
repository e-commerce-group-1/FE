import FooterComponent from "./Footer";
import HeadApp from "./Head";
import NavbarComponent from "./Navbar";

function Layout({children}) {

  return ( 
    <>
      <HeadApp />
      <NavbarComponent />
      <div>{children}</div>
      <FooterComponent />
    </>
  );
}

export default Layout;