import Link from 'next/link';

const Navbar = () => (
	<nav className='navbar navbar-expand-md navbar-dark bg-dark sticky-top py-3 mb-4'>
		<div className='container'>
			<Link href='/'>
				<a className='navbar-brand'>BitzPrice</a>
			</Link>

			<button
				className='navbar-toggler'
				data-toggle='collapse'
				data-target='#navbar-menu'
			>
				<span className='navbar-toggler-icon'></span>
			</button>

			<div id='navbar-menu' className='navbar-collapse collapse'>
				<ul className='navbar-nav ml-auto'>
					<li className='nav-item'>
						<Link href='/'>
							<a className='nav-link'>Home</a>
						</Link>
					</li>
					<li className='nav-item'>
						<Link href='/about'>
							<a className='nav-link'>About</a>
						</Link>
					</li>
				</ul>
			</div>
		</div>
	</nav>
);

export default Navbar;
