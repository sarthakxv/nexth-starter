import React, { FC, ReactNode } from 'react';
import Link from 'next/link';

interface Props {
	href: string;
	children: ReactNode;
	isExternal?: boolean;
	className?: string;
}

const LinkComponent: FC<Props> = (props: Props) => {
	const isExternal =
		props.href.match(/^([a-z0-9]*:|.{0})\/\/.*$/) || props.isExternal;
	// const color = useColorModeValue(`${THEME_COLOR_SCHEME}.600`, `${THEME_COLOR_SCHEME}.400`)

	if (isExternal) {
		return (
			<Link href={props.href} target="_blank" rel="noopener noreferrer">
				{props.children}
			</Link>
		);
	}

	return <Link href={props.href}>{props.children}</Link>;
};

export default LinkComponent;
