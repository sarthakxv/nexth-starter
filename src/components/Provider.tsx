import { ReactNode } from 'react';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';
import { ConnectKitProvider, getDefaultClient } from 'connectkit';
import { ETH_CHAINS, SITE_NAME } from 'utils/config';

interface Props {
	children: ReactNode;
}

const { provider, webSocketProvider } = configureChains(ETH_CHAINS, [
	publicProvider(),
]);

const client = createClient(
	getDefaultClient({
		appName: SITE_NAME,
		autoConnect: true,
		provider,
		webSocketProvider,
	})
);

export default function Provider(props: Props) {
	return (
		<WagmiConfig client={client}>
			<ConnectKitProvider theme="soft">{props.children}</ConnectKitProvider>
		</WagmiConfig>
	);
}
