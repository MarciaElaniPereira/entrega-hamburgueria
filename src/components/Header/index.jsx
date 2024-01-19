import { useState } from "react";
import Logo from "../../assets/Logo.svg";
import { MdSearch, MdShoppingCart } from "react-icons/md";
import styles from "./style.module.scss";

export const Header = () => {
   const [value, setValue] = useState("");

   return (
      <header className={styles.heder__container}>
         <img src={Logo} alt="Logo Kenzie Burguer" />
         <div>
            <button className="button__carrinho">
               <MdShoppingCart size={21} />
               <span className="span__quantidades">0</span>
            </button>

         </div>
      </header>
   );
};
