import '@testing-library/jest-dom'
import { renderHook, act } from '@testing-library/react-hooks'
import { useCounter } from '../../hooks/useCounter'

describe('Pruebas en useCounter', () => {
    test('Debe retornar valores por defecto', () => {
        const {result} = renderHook(() => useCounter())

        expect(typeof result.current.counter).toBe('number')
        expect(typeof result.current.increment).toBe('function')
        expect(typeof result.current.decrement).toBe('function')
        expect(typeof result.current.reset).toBe('function')
    })

    test('Debe retornar el valor', () => {
        const value = 10
        const {result} = renderHook(() => useCounter(value))

        expect(result.current.counter).toBe(value)
    })

    test('Debe incrementar el counter', () => {
        const value = 10
        const {result} = renderHook(() => useCounter(value))
        const {increment} = result.current
        
        act(() => {
            increment()
        })

        const {counter} = result.current
        
        expect(counter).toBe(value + 1)
    })

    test('Debe decrementar el counter', () => {
        const value = 10
        const {result} = renderHook(() => useCounter(value))
        const {decrement} = result.current
        
        act(() => {
            decrement()
        })

        const {counter} = result.current

        expect(counter).toBe(value - 1)
    })

    test('Debe resetear el counter', () => {
        const value = 10
        const {result} = renderHook(() => useCounter(value))
        const {increment, reset} = result.current
        
        act(() => {
            increment()
            reset()
        })

        const {counter} = result.current

        expect(counter).toBe(value)
    })
    
})
