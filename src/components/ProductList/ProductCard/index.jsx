export const ProductCard = ({ addToCart, product }) => {
    return (
        <li className="">
            <img src={product.img} alt={product.name} />
            <div>
                <h3>{product.name}</h3>
                <p>{product.category}</p>
                <p>{product.price.toLocaleString('pt-BR', { style: "currency", currency: "BRL" })}</p>
                <button onClick={() => addToCart(product)}>Adicionar</button>
            </div>
        </li>
    )
}