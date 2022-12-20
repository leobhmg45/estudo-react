import {Pessoa} from './components/Pessoa'

const App = () => {
  let list = [
    {name: 'ana', age: 20},
    {name: 'samy', age: 30},
    {name: 'bia', age: 40},
  ]
  return (
    <div>
      <ul>
        {list.map((item, index) => (
          <Pessoa key={index} data={item} />
        ))}
      </ul>
    </div>
  )
}

export default App