// "use client ";
import { product } from '../modules/product'
import { useSelector } from 'react-redux';
import ProductCart from '../components/productCart';
interface RootState {
    cart: {
        items: any[];
    };
}
function Home() {
    const carts = useSelector((state: RootState) => state.cart.items);
    console.log(carts, "pháp")
    return (
        <div>
            <h1 className='text-3xl my-5'>List Products</h1>
            <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5'>
                {product.map((item) => (
                    <ProductCart key={item.id} data={item} />
                ))}
            </div>
        </div>
    );
}

export default Home;
