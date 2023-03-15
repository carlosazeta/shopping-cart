import { useState } from 'react'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Products } from './components/Products'
import { IS_DEVELOPMENT } from './config'
import { useFilters } from './hooks/useFilter'
import { products as initialProducts } from './mocks/products.json'

function App() {
	const [products] = useState(initialProducts)
	const { filters, filterProducts, setFilters } = useFilters()

	const filteredProducts = filterProducts(products)

	return (
		<>
			<Header changeFilters={setFilters} />
			<Products products={filteredProducts} />
			{IS_DEVELOPMENT && <Footer filters={filters} />}
		</>
	)
}

export default App
