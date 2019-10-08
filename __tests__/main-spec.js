const output = require('../main');

it ('should get the 0001 product', () => {
	const productId="0001";
	const actualResult = output.getProductFromId(productId);
	const expectedResult = {
		"id": "0001",
		"name" : "Coca Cola",
		"price": 3
	};

   expect(actualResult).toStrictEqual(expectedResult);
});

it ('should get the Diet Mountain Dew product', () => {
	const productId="0008";
	const actualResult = output.getProductFromId(productId);
	const expectedResult = {
		"id": "0008",
		"name" : "Diet Mountain Dew",
		"price": 10
	};

   expect(actualResult).toStrictEqual(expectedResult);
});

it ("should create a map containing the quantity per item. No repeats", () => {
	const productList = ['0001', '0003', '0005'];
	const actualResult = output.getProductListWithQuantity(productList);
	const expectedResult = [
		{"id": "0001", "name" : "Coca Cola", "price": 3, "quantity":1 },
		{"id": "0003", "name" : "Pepsi-Cola", "price": 5, "quantity": 1},
		{"id": "0005", "name" : "Dr Pepper", "price": 7, "quantity": 1}
	]

	expect(actualResult).toStrictEqual(expectedResult);
});

it ("Get the total price single quantity", ()=>{
	const productListWithQuantity = [
		{"id": "0001", "name" : "Coca Cola", "price": 3, "quantity":1 },
		{"id": "0003", "name" : "Pepsi-Cola", "price": 5, "quantity": 1},
		{"id": "0005", "name" : "Dr Pepper", "price": 7, "quantity": 1}
	];
	const actualResult = output.getTotalPrice(productListWithQuantity);
	const expectedResult = 15;

	expect(actualResult).toBe(expectedResult);
});

it ("Get the total price. Quantity is greater than 1", ()=>{
	const productListWithQuantity = [
		{"id": "0001", "name" : "Coca Cola", "price": 3, "quantity":3},
		{"id": "0003", "name" : "Pepsi-Cola", "price": 5, "quantity": 2},
		{"id": "0005", "name" : "Dr Pepper", "price": 7, "quantity": 1}
	];
	const actualResult = output.getTotalPrice(productListWithQuantity);
	const expectedResult = 26;

	expect(actualResult).toBe(expectedResult);
});

it ("Should create a receipt", ()=>{
	const productList = ['0001', '0003', '0005', '0003'];
	const actualResult = output.createReceipt(productList);
	const expectedResult=
		"Receipts\n" +
		"------------------------------------------------------------\n" +
		"Coca Cola                       3          1\n" +
		"Pepsi-Cola                      5          2\n" +
		"Dr Pepper                       7          1\n" +
		"------------------------------------------------------------\n" +
		"Price: 20\n";

	expect(actualResult).toBe(expectedResult);
});