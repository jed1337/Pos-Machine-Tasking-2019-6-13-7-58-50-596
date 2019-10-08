"use strict";

const PRODUCT_DATABASE = [
    {"id": "0001", "name" : "Coca Cola", "price": 3},
    {"id": "0002", "name" : "Diet Coke", "price": 4},
    {"id": "0003", "name" : "Pepsi-Cola", "price": 5},
    {"id": "0004", "name" : "Mountain Dew", "price": 6},
    {"id": "0005", "name" : "Dr Pepper", "price": 7},
    {"id": "0006", "name" : "Sprite", "price": 8},
    {"id": "0007", "name" : "Diet Pepsi", "price": 9},
    {"id": "0008", "name" : "Diet Mountain Dew", "price": 10},
    {"id": "0009", "name" : "Diet Dr Pepper", "price": 11},
    {"id": "0010", "name" : "Fanta", "price": 12}
];

const NAME_PADDING_VALUE=31;
const PRICE_PADDING_VALUE=10;

function createReceipt(idList){
	if(isEmptyList(idList)||!isValidProduct(idList)){
		return "[ERROR]:";
	}

	const productListWithQuantity = getProductListWithQuantity(idList);

	let receipt = "Receipts\n";
	receipt+="------------------------------------------------------------\n";

	for(let productWithQuantity of productListWithQuantity){
		const paddedName=productWithQuantity.name.padEnd(NAME_PADDING_VALUE);
		const paddedPrice = productWithQuantity.price.toString().padEnd(PRICE_PADDING_VALUE);
		receipt+=`${paddedName} ${paddedPrice} ${productWithQuantity.quantity}\n`
	}

	receipt+="------------------------------------------------------------\n";
	receipt+=`Price: ${getTotalPrice(productListWithQuantity)}\n`;
	return receipt;
}

function isEmptyList(idList){
	return idList.length===0;
}

function isValidProduct(idList){
	const validProductIds = PRODUCT_DATABASE
			.map(product=>product.id);

	console.log(idList);
	for(let id of idList){
		console.log("ID", id);
		if(!validProductIds.includes(id)){
			return false;
		}
	}
	return true;
}

function getProductListWithQuantity(idList){
	let productListWithQuantity = [];

	const uniqueIdList = new Set(idList);

	for(let uniqueId of uniqueIdList){
		const product = getProductFromId(uniqueId);
		const quantity = idList
			.filter(id=>id === uniqueId)
			.length;

		productListWithQuantity.push({
			id: product.id,
			name: product.name,
			price: product.price,
			quantity: quantity
		})
	}
	return productListWithQuantity;
}

function getProductFromId(value){
	return PRODUCT_DATABASE
		.filter(product=>product.id===value)
		[0];
}

function getTotalPrice(productListWithQuantity){
	return productListWithQuantity
		.map(product=>product.price * product.quantity)
		.reduce((a,b)=>a+b, 0);
}

module.exports = {
	createReceipt:createReceipt,
	getProductListWithQuantity:getProductListWithQuantity,
	getProductFromId: getProductFromId,
	getTotalPrice:getTotalPrice,
};