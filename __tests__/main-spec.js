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
	const actualResult = output.getIdQuantityMap(productList);

	const expectedResult = {
		"0001" : 1,
		"0003" : 1,
		"0005" : 1
	}
	expect(actualResult).toStrictEqual(expectedResult);
});

it ("should create a map containing the quantity per item", () => {
	const productList = ['0005', '0005', '0003', '0005', '0003'];
	const actualResult = output.getIdQuantityMap(productList);

	const expectedResult = {
		"0003" : 2,
		"0005" : 3
	}
	expect(actualResult).toStrictEqual(expectedResult);
});