import { render, screen } from "@testing-library/react";
import { fireEvent, waitFor } from "@testing-library/dom";
import ProductPage from "../productHome";
import AppRoutes from "../AppRoutes";

import store from "../../redux/store";
import { Provider } from "react-redux";
import axios from "axios";

const MockProductPage = () => {
  return (
    <Provider store={store}>
      <ProductPage />
    </Provider>
  );
};

const MockAppRoutes = ({ data }) => {
  return (
    <Provider store={store}>
      <AppRoutes data={data} />
    </Provider>
  );
};

describe("product home tests", () => {
  var data;

  jest.setTimeout(30000);

  beforeAll(async () => {
    await axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        data = res.data;
      })
      .catch((err) => {
        console.log("failed to get data ->", err);
      });
  });

  it("check", async () => {
    render(<MockProductPage />);
    const headerElement = await screen.findByText(/product list/i);
    expect(headerElement).toBeInTheDocument();
  });

  test("count of cards", async () => {
    render(<AppRoutes data={data} />);
    const cardElements = await screen.findAllByTestId("productCard");
    expect(cardElements.length).toBe(data.length);
  });

  test("Routing from home to selected product", async () => {
    render(<MockAppRoutes data={data} />);
    const linkToSelectedProduct = screen.getAllByRole("link", {
      name: /name -/i,
    })[0];
    fireEvent.click(linkToSelectedProduct);
    const headerText = await screen.findByTestId("headerSelectedProduct");
    expect(headerText).toBeInTheDocument();
  });
});
