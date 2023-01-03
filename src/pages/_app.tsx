import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from 'components/layout';
import Provider from '../components/Provider';
import useIsMounted from 'hooks/useIsMounted';

export default function App({ Component, pageProps }: AppProps) {
	const isMounted = useIsMounted();

	return (
		<Provider>
			{isMounted && (
				<Layout>
					<Component {...pageProps} />
				</Layout>
			)}
		</Provider>
	);
}
