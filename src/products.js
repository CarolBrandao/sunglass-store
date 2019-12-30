export const products = [
	{
		"id": "1",
		"title": "magnus",
		"brand": "harris",
		"description": "Designed in Paris. Plastic frame cat eye sunglasses with bright coloured geometric shapes.",
		"price": "$149",
		"material": "plastic",
		"shape": "rounded square",
		"dimensions": "48X20X148",
		"colors": ["marble", "nude", "charcoal"]
	},
	{
		"id": "2",
		"title": "poolside",
		"brand": "blue",
		"description": "Designed in Paris. Plastic frame cat eye sunglasses with bright coloured geometric shapes.",
		"price": "$235",
		"material": "plastic",
		"shape": "rounded square",
		"dimensions": "48X20X148",
		"colors": ["marble", "nude", "charcoal"]
	},
	{
		"id": "3",
		"title": "hsp",
		"brand": "lens",
		"description": "Designed in Paris. Plastic frame cat eye sunglasses with bright coloured geometric shapes.",
		"price": "$89",
		"material": "plastic",
		"shape": "rounded square",
		"dimensions": "48X20X148",
		"colors": ["marble", "nude", "charcoal"]
	},
	{
		"id": "4",
		"title": "muse",
		"brand": "lacoste",
		"description": "Designed in Paris. Plastic frame cat eye sunglasses with bright coloured geometric shapes.",
		"price": "$359",
		"material": "plastic",
		"shape": "rounded square",
		"dimensions": "48X20X148",
		"colors": ["marble", "nude", "charcoal"]
	},
	{
		"id": "5",
		"title": "3025",
		"brand": "rayban",
		"description": "Designed in Paris. Plastic frame cat eye sunglasses with bright coloured geometric shapes.",
		"price": "$289",
		"shape": "rounded square",
		"dimensions": "48X20X148",
		"colors": ["marble", "nude", "charcoal"]
	},
	{
		"id": "6",
		"title": "aviator",
		"brand": "rayban",
		"description": "Designed in Paris. Plastic frame cat eye sunglasses with bright coloured geometric shapes.",
		"price": "$149",
		"material": "plastic",
		"shape": "rounded square",
		"dimensions": "48X20X148",
		"colors": ["marble", "nude", "charcoal"]
	}
]


export function getProductById(id){
	return products.find(product => product.id === id)
}