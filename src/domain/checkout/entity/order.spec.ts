import Order from "./order";
import OrderItem from "./order_item";

describe("Order unit tests", () => {
  it("should throw error when id is empty", () => {
    expect(() => {
      let order = new Order("", "123", []);
    }).toThrow("Id is required");
  });

  it("should throw error when customerId is empty", () => {
    expect(() => {
      let order = new Order("123", "", []);
    }).toThrow("CustomerId is required");
  });

  it("should throw error when customerId is empty", () => {
    expect(() => {
      let order = new Order("123", "123", []);
    }).toThrow("Items are required");
  });

  it("should calculate total", () => {
    const item = new OrderItem("i1", "Item 1", 100, 2, "p1");
    const item2 = new OrderItem("i2", "Item 2", 200, 2, "p2");
    const order = new Order("o1", "c1", [item]);

    let total = order.total();
    expect(total).toBe(200);

    const order2 = new Order("o1", "c1", [item, item2]);
    total = order2.total();
    expect(total).toBe(600);
  });

  it("should throw erro if the item qtde is less or equal 0", () => {
    expect(() => {
      const item = new OrderItem("i1", "Item 1", 100, 0, "p1");
      const order = new Order("o1", "c1", [item]);
      let total = order.total();
    }).toThrow("Quantity must be greater than 0");
  });
});
