// Filter using Category
export function bycategory(data, category) {
	let newdata = data.filter((item) => {
		return item.category === category
	})
	if (category === 'all') {
		newdata = data
	}

	return newdata
}
