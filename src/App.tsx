// import { Container } from './components/Container'
// import { MyButton } from './components/MyButton'

//import {Container, MyButton} from './AppStyles'
import * as C from './AppStyles'
const App = () => {

  return (
    <C.Container>
      My Container
      <C.MyButton>Button 1</C.MyButton>
    </C.Container>
  )
}

export default App