import './Footer.css'

export function Footer({ filters }) {
	return (
		<footer className='footer'>
			{JSON.stringify(filters, null, 2)}
			{/* <h4>
				React shop with React 🐱‍💻 — <span>@internetcharly</span>
			</h4>
			<h5>This is a prototype, enjoy it!</h5> */}
		</footer>
	)
}
