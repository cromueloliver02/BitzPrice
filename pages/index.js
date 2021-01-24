import fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';
import Prices from '../components/Prices';

const Index = ({ bpi }) => {
	return (
		<Layout>
			<h1>Welcome to BitzPrice</h1>
			<p>Check current bitcoin rate</p>
			<Prices bpi={bpi} />
		</Layout>
	);
};

export default Index;

export const getServerSideProps = async () => {
	const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
	const data = await res.json();

	return {
		props: {
			bpi: data.bpi
		}
	};
};
