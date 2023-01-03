import Head from 'components/layout/Head';
import { SITE_DESCRIPTION, SITE_NAME } from 'utils/config';

export default function Home() {
	return (
		<>
			<Head />
			<main>
				<h2 className="text-3xl font-semibold">{SITE_NAME}</h2>
				<p className="text-gray-500 font-medium">{SITE_DESCRIPTION}</p>
			</main>
		</>
	);
}
