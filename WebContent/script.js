let fruits = [
	{
	name: 'Orange',
	price: 2.0	
}, {
	name: 'Pear',
	price: 3.5	
}, {
	name: 'Watermelon',
	price: 1.75	
}, {
	name: 'Apple',
	price: 0.50	
}, {
	name: 'Banana',
	price: 1.55
}, {
	name: 'Grapefruit',
	price: 3.45	
}, {
	name: 'Pomegranade',
	price: 1.60
}];


let displayTable = document.getElementById("display");

for (let i=0; i<fruits.length; i++){
	let tr = document.createElement("tr");
	displayTable.appendChild(tr);
	
	let th = document.createElement("th");
	th.innerText = fruits[i].name;
	tr.appendChild(th);
	
	let td = document.createElement("td");
	td.innerText = fruits[i].price;
	tr.appendChild(td);
	
	let button = document.createElement("button");
	button.innerText = "Add";
	tr.appendChild(button);
	button.setAttribute("type", "button");
	button.setAttribute("onclick", "add('" + fruits[i].name+ "', " +fruits[i].price + ")");
	
}


let chosenFruits = [];

function add(name, price) {
	chosenFruits.push({name,price});
}


function total() {
	let header = document.getElementById("header");
	header.innerText = "Shopping Cart";

	let tr = document.getElementById("firstRow");

	let th = document.createElement("th");
	th.innerText = "Product";
	tr.appendChild(th);
	let th2 = document.createElement("th");
	th2.innerText = "Price";
	tr.appendChild(th2);
	
	
	let body = document.getElementById("shoppingTable");
	let total = 0;
	
	for (let i=0; i<chosenFruits.length; i++){
		let tr = document.createElement("tr");
		body.appendChild(tr);
		
		let th = document.createElement("th");
		th.innerText = chosenFruits[i].name;
		tr.appendChild(th);
		
		let td = document.createElement("td");
		td.innerText = chosenFruits[i].price;
		tr.appendChild(td);
		total += chosenFruits[i].price;
	}
	
	
	let label = document.createElement("label");
	label.innerText = "Total";
	
	body.appendChild(label);
	
	let p = document.createElement("p");
	p.innerText = total;
	label.appendChild(p);


}