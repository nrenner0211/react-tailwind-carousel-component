import Carousel from './components/Carousel';
import img1 from './images/1.jpg';
import img2 from './images/2.jpg';
import img3 from './images/3.jpg';
import img4 from './images/4.jpg';
import img5 from './images/5.jpg';

const slides = [
  img1,
  img2,
  img3,
  img4,
  img5
]

function App() {
  return (
    <main className="App">
      <div className='max-w-lg'>
        <Carousel autoslide={true} autoSlideInterval={3000}>
          {slides.map((s) => (
            <img key={slides.indexOf} src={s} alt='artwork'/>
          ))}
        </Carousel>
      </div>
    </main>
  );
}

export default App;
