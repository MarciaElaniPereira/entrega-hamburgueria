import { useEffect, useState } from "react";
import { CartModal } from "../../components/CartModal";
import { Header } from "../../components/Header";
import { ProductList } from "../../components/ProductList";
import { api } from "../../api";

export const HomePage = () => {
   const [productList, setProductList] = useState([]);
   const [cartList, setCartList] = useState([]);

   // useEffect montagem - carrega os produtos da API e joga em productList
   // useEffect atualização - salva os produtos no localStorage (carregar no estado)
   // adição, exclusão, e exclusão geral do carrinho
   // renderizações condições e o estado para exibir ou não o carrinho
   // filtro de busca
   // estilizar tudo com sass de forma responsiva

   useEffect(() => {
      const getProducts = async () => {
         try {
            const request = await api.get("/products")
            const { data } = request
            setProductList(data)
         } catch (error) {
            consssole.lo(error)
         }
      }
      getProducts()
   }, [])

   const addToCart = (productToAdd) => {
      const isProductInCart = cartList.some(product => product.id === productToAdd.id)


      if (!isProductInCart) {
         setCartList([...cartList, productToAdd])
         console.log(cartList)
      } else {
         console.log("esse produto ja foi adicionado no carrinho")
      }


   }




   return (
      <>
         <Header />
         <main>
            <ProductList addToCart={addToCart} productList={productList} />
            <CartModal cartList={cartList} />
         </main>
      </>
   );x
};








