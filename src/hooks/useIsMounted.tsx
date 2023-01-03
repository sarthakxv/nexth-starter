import { useState, useEffect } from 'react';

export default function useIsMounted(): boolean {
	let [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	return isMounted;
}
