import React, { FC } from 'react';
import { SITE_NAME } from 'utils/config';
import LinkComponent from './LinkComponent';
import { ConnectKitButton } from 'connectkit';

interface Props {
	className?: string;
}

const Header: FC<Props> = (props) => {
	return (
		<header className="flex bg-gray-100 px-4 py-3 mb-10 justify-between items-center">
			<LinkComponent href="/">
				<p className="text-xl font-bold">{SITE_NAME}</p>
			</LinkComponent>
			<div>
				<ConnectKitButton />
			</div>
		</header>
	);
};

export default Header;
