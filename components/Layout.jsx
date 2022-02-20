import { useEffect } from "react";
import { useDispatch } from "react-redux";
import allStore from "../store/actions";
import FooterComponent from "./Footer";
import HeadApp from "./Head";
import NavbarComponent from "./Navbar";

function Layout({children}) {

  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(allStore.getProducts())
  },[dispatch])

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