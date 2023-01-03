import { FC } from 'react';
import { FaGithub, FaTwitter } from 'react-icons/fa';
import LinkComponent from './LinkComponent';
import { SITE_DESCRIPTION, SOCIAL_GITHUB, SOCIAL_TWITTER } from 'utils/config';

interface Props {
	className?: string;
}

const Footer: FC<Props> = () => {
	return (
		<footer className="flex flex-col justify-center items-center my-2">
			<p>{SITE_DESCRIPTION}</p>

			<div className="text-gray-500 gap-1 items-center mt-1">
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
