import { FC, useState } from 'react'
import './Counter.scss'

export const Counter: FC = () => {
    const [count, setCount] = useState<number>(0)
    
    const increment = () => {
        setCount(count + 1)
    }

    return (
        <div>
            <h1>{count}</h1>
            <button
                onClick={increment}
            >
                increment
            </button>
        </div>
    )
}
