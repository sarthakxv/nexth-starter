import { FC } from 'react';
import { FaGithub, FaTwitter } from 'react-icons/fa';
import LinkComponent from './LinkComponent';
import { SITE_DESCRIPTION, SOCIAL_GITHUB, SOCIAL_TWITTER } from 'utils/config';

interface Props {
	className?: string;
}

const Footer: FC<Props> = () => {
	return (
		<footer className="flex flex-col w-full fixed bottom-0 justify-center items-center py-4">
			<p>{SITE_DESCRIPTION}</p>
			<div className="flex gap-x-4 text-xl text-gray-500 items-center mt-1">
				<LinkComponent href={`https://github.com/${SOCIAL_GITHUB}`}>
					<FaGithub />
				</LinkComponent>
				<LinkComponent href={`https://twitter.com/${SOCIAL_TWITTER}`}>
					<FaTwitter />
				</LinkComponent>
			</div>
		</footer>
	);
};

export default Footer;
