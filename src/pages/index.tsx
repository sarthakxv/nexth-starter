import { Head } from 'components/layout/Head';
import { SITE_DESCRIPTION, SITE_NAME } from 'utils/config';

export default function Home() {
	return (
		<>
			<Head />
			<main>
				<h2 className="text-2xl">{SITE_NAME}</h2>
				<p>{SITE_DESCRIPTION}</p>
			</main>
		</>
	);
}
