import '@testing-library/jest-dom'
import { todoReducer } from '../../../components/08-useReducer/todoReducer'
import { demoTodo } from '../../fixtures/demoTodo'

describe('Pruebas en el todoReducer', () => {
    test('Deber retornar el estado por defecto', () => {
        const state = todoReducer(demoTodo, {})

        expect(state).toEqual(demoTodo)
    })

    test('Debe agregar un todo', () => {
        const newTodo = {
            id: 3,
            desc: 'Aprender Node',
            done: false
        }

        const action = {
            type: 'add',
            payload: newTodo
        }

        const state = todoReducer(demoTodo, action)
        expect(state).toEqual([...demoTodo, newTodo])
    })

    test('Debe borrar un todo', () => {
        const stateDeleted = 2

        const action = {
            type: 'delete',
            payload: stateDeleted
        }

        const state = todoReducer(demoTodo, action)
        // console.log(state)
        expect(state).toEqual([demoTodo[0]])
    })

    test('Debe de hacer el Toggle del todo', () => {
        const updateTodo = 1

        const action = {
            type: 'toggle',
            payload: updateTodo
        }

        const state = todoReducer(demoTodo, action)
        // console.log(state[0].done)
        expect(state[0].done).toBe(true)
        expect(state[1]).toEqual(demoTodo[1])
    })
    
    
    
})
