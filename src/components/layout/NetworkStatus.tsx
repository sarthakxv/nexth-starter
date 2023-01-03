import { useBlockNumber, useNetwork } from 'wagmi';
import LinkComponent from './LinkComponent';

export function NetworkStatus() {
	const block = useBlockNumber({ watch: true });
	const network = useNetwork();
	const explorerUrl = network.chain?.blockExplorers?.default.url;

	return (
		<div className="flex items-cetner gap-1 z-10 bg-gray-50 p-1">
			<div className="px-2 py-1 text-xs bg-purple-300 font-medium rounded">
				{network.chain?.name ?? 'Ethereum'}
			</div>
			{explorerUrl && (
				<LinkComponent href={explorerUrl}>
					<p className="font-xs"># {block.data}</p>
				</LinkComponent>
			)}
			{!explorerUrl && <p className="font-xs"># {block.data}</p>}
		</div>
	);
}
