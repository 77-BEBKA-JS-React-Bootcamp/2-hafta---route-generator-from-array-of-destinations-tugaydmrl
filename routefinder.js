const tickets = [['JPN', 'PHL'], ['BRA', 'UAE'], ['USA', 'BRA'], ['UAE', 'JPN']];
function routeFinder(tickets) {
	const ticketsSource = [];
	tickets.forEach(element => ticketsSource.push(element[0]));
	const ticketsDestination = [];
	tickets.forEach(element => ticketsDestination.push(element[1]));

	const firstCountry = ticketsSource.filter(i => !ticketsDestination.includes(i));

	const route = [firstCountry[0]];

	let index = ticketsSource.indexOf(firstCountry[0])

	while (route.length < tickets.length + 1) {
	let addCountry = ticketsDestination[index];
	route.push(addCountry);
	index = ticketsSource.indexOf(addCountry);
	}

	return route.toString();
}

routeFinder(tickets);