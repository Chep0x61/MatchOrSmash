import Card from './Components/Card';
import './app.css'

const App = () => {
  return (
    <div className="app w-screen h-screen justify-center text-center overflow-x-hidden bg-[url('img/comics.jpg')] bg-cover">
      <h1 className='p-8 text-8xl text-white font-komikz'>Match or Smash</h1>
      <Card />
    </div>
  )}
export default App;
