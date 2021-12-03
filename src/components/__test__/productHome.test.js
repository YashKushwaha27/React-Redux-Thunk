import { render, screen } from '@testing-library/react'
import { waitFor } from '@testing-library/dom'
import ProductPage from '../productHome'

import store from '../../redux/store'
import { Provider } from 'react-redux'
import axios from 'axios'

const MockProductPage = () => {
    return (
        <Provider store={store}>
            <ProductPage />
        </Provider>
    )
}

describe("product home tests", () => {
    // beforeAll(() => {
    // axios
    //     .get("https://fakestoreapi.com/products")
    //         .then(() => {
    //             console.log("data got")
    //         })
    //         .catch((err) => {
    //             console.log("failed to get data ->",err)
    //         })
    // })

    it("check", async () => {
        render(<MockProductPage />)
        const headerElement = await screen.findByText(/product list/i);
        expect(headerElement).toBeInTheDocument();
    })

    // test("count of cards", async () => {
    //     render(<MockProductPage />)
    //     const cardElements = screen.findAllByTestId("productCard")
    //     expect(cardElements.length).toBe(20);
    // })
})