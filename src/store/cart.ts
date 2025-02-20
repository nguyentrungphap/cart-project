import { createSlice } from '@reduxjs/toolkit';

interface CartItem {
    productId: string;
    quantity: number;
}

const initialState = {
    items: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart") as string) : [],
    statusTab: false,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addtoCart: (state, action) => {
            const { productId, quantity } = action.payload;
            const indexProductId = state.items.findIndex((item: CartItem) => item.productId === productId);
            
            if (indexProductId >= 0) {
                state.items[indexProductId].quantity += quantity;
            } else {
                state.items.push({ productId, quantity });
            }

            localStorage.setItem("cart", JSON.stringify(state.items));
        },
        changeQuantity: (state, action) => {
            const { productId, quantity } = action.payload;
            const indexProductId = state.items.findIndex((item: CartItem) => item.productId === productId);

            if (indexProductId !== -1) {
                if (quantity > 0) {
                    state.items[indexProductId].quantity = quantity;
                } else {
                    state.items = state.items.filter((item: CartItem) => item.productId !== productId);
                }

                localStorage.setItem("cart", JSON.stringify(state.items));
            }
        },
        toggleStatusTab: (state) => {
            state.statusTab = !state.statusTab;
        }
    }
});

export const { addtoCart, changeQuantity, toggleStatusTab } = cartSlice.actions;
export default cartSlice.reducer;
