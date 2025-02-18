import './App.css'
import QuizModal from './components/QuizModal'
import Title from './components/Title'
import 'bootstrap/dist/js/bootstrap.bundle.min';

function App() {

  return (
    <>
      <div className='d-flex flex-column gap-3 p-3'>
        <Title />
        <QuizModal />
      </div>
    </>
  )
}

export default App
