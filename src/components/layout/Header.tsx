import React from 'react';
import { SITE_NAME } from 'utils/config';
import LinkComponent from './LinkComponent';
import { ConnectKitButton } from 'connectkit';

interface Props {
	className?: string;
}

export function Header(props: Props) {
	const className = props.className ?? '';

	return (
		<header className="flex px-1 py-1 mb-2 items-center">
			<LinkComponent href="/">
				<h1 className="text-3xl">{SITE_NAME}</h1>
			</LinkComponent>

			<div className="flex items-center gap-1">
				<ConnectKitButton />
			</div>
		</header>
	);
}
