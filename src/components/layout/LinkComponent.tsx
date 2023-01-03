import { FC, ReactNode } from 'react';
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

	if (isExternal) {
		return (
			<a
				className="underline"
				href={props.href}
				target="_blank"
				rel="noopener noreferrer">
				{props.children}
			</a>
		);
	}

	return <Link href={props.href}>{props.children}</Link>;
};

export default LinkComponent;
