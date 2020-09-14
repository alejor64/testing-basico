import '@testing-library/jest-dom'
import { renderHook, act } from '@testing-library/react-hooks'
import { useForm } from '../../hooks/useForm'

describe('Pruebas para useForm', () => {
    const initalForm = {
        name: 'Alejandro',
        email: 'alejoruizs@hotmail.com'
    }

    test('Debe retornar las valores', () => {
        const {result} = renderHook(() => useForm())
        const [values, handleInputChange, reset] = result.current
        
        expect(typeof values).toBe('object')
        expect(typeof handleInputChange).toBe('function')
        expect(typeof reset).toBe('function')
    })

    test('Debe cambiar el nombre', () => {
        const {result} = renderHook(() => useForm(initalForm))
        const [ , handleInputChange] = result.current
        
        act(() => {
            handleInputChange({
                target: {
                    name: 'name',
                    value: 'Erika'
                }
            })
        })

        const [values] = result.current

        expect(values).toEqual({...initalForm, name: 'Erika'})
    })

    test('Debe cambiar el nombre', () => {
        const {result} = renderHook(() => useForm(initalForm))
        const [ , handleInputChange, reset] = result.current
        
        act(() => {
            handleInputChange({
                target: {
                    name: 'name',
                    value: 'Erika'
                }
            })
            reset()
        })

        const [values] = result.current

        expect(values).toEqual(initalForm)
    })
    
})
