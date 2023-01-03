import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Layout } from 'components/layout';
import { Web3Provider } from 'providers/Web3';
import { useIsMounted } from 'hooks/useIsMounted';

export default function App({ Component, pageProps }: AppProps) {
	const isMounted = useIsMounted();

	return (
		<Web3Provider>
			{isMounted && (
				<Layout>
					<Component {...pageProps} />
				</Layout>
			)}
		</Web3Provider>
	);
}
