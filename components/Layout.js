import Head from 'next/head';
import Navbar from './Navbar';

const Layout = ({ children }) => (
	<>
		<Head>
			<link
				rel='stylesheet'
				href='https://bootswatch.com/4/cerulean/bootstrap.min.css'
			/>
			<title>BitzPrice</title>
		</Head>

		<Navbar />
		<div className='container'>{children}</div>
	</>
);

export default Layout;
