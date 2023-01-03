import { ReactNode } from 'react';
import { Header } from './Header';
import Footer from './Footer';
import { NetworkStatus } from './NetworkStatus';

interface Props {
	children: ReactNode;
}

export function Layout(props: Props) {
	return (
		<div className=" mx-0 my-auto min-h-screen">
			<Header />
			<div className=" max-w-lg">{props.children}</div>
			<div className=" fixed bottom-1 right-1">
				<NetworkStatus />
			</div>
			<Footer />
		</div>
	);
}
