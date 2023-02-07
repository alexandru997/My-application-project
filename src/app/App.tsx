import {useState} from 'react'
import cls from './App.module.scss'
function App() {
    const [count, setCount] = useState(0)

    return (
        <div className={cls.navigate}>
           <h1>Hello World</h1>
        </div>
    )
}

export default App
