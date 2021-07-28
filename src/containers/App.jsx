import React from 'react';

// Css
import '../assets/styles/App.scss';

// Components
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';

// Hooks
import useInitialState from '../hooks/useInitialState';

const App = () => {
	const videos = useInitialState('http://localhost:3000/initialState');

	return (
		<div className="App">
			<Header />
			<Search />

			{ videos.mylist.length > 0 &&
				<Categories title="Mi lista">
					<Carousel>
						{ videos.trends.map(item => <CarouselItem key={item.id} {...item} />) }
					</Carousel>
				</Categories>
			}

			<Categories title="Tendencias">
				<Carousel>
					{ videos.trends.map(item => <CarouselItem key={item.id} {...item} />) }
				</Carousel>
			</Categories>

			<Categories title="Originales">
				<Carousel>
					{ videos.trends.map(item => <CarouselItem key={item.id} {...item} />) }
				</Carousel>
			</Categories>

			<Footer />
		</div>
	);
}

export default App;