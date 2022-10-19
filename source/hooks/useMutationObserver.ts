import {useMemo, useEffect} from 'react';

import {useElement} from 'hooks';

function useMutationObserver<T extends HTMLElement>(
	callbackFn: (element: T, mutation: MutationRecord) => void,
	options?: MutationObserverInit,
) {
	const [ref, element] = useElement<T>();

	const mutationObserver = useMemo(() => new MutationObserver(mutations => {
		for (const mutation of mutations) {
			element && callbackFn(element, mutation);
		}
	}), [element]);

	useEffect(() => {
		element && mutationObserver.observe(element, options);

		return () => mutationObserver.disconnect();
	}, [element]);

	return [ref, element] as const;
}

export default useMutationObserver;
