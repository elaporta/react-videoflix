import { useState, useEffect } from 'react';

const useInitialState = (url) => {
	const [ videos, setVideos ] = useState({ mylist: [], trends: [], originals: [] });

	useEffect(() => {
		fetch(url)
		.then(respose => respose.json())
		.then(data => setVideos(data));
	}, []);

	return videos;
}

export default useInitialState;