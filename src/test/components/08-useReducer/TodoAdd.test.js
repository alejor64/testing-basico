import React from 'react'
import {shallow} from 'enzyme'
import '@testing-library/jest-dom'
import TodoAdd from '../../../components/08-useReducer/TodoAdd'

describe('Pruenas en el componente <TodoAdd /<', () => {
    const handleAddTodo = jest.fn()
    const wrapper = shallow(<TodoAdd handleAddTodo={handleAddTodo} />)

    test('Debe mostrarse el component', () => {
        expect(wrapper).toMatchSnapshot()
    })
    
    test('No debe de llamar a la funcion handleAddTodo', () => {
        const formSubmit = wrapper.find('form').prop('onSubmit')
        formSubmit({preventDefault(){}})

        expect(handleAddTodo).not.toHaveBeenCalled()
        expect(handleAddTodo).toHaveBeenCalledTimes(0)
    })

    test('Debe de llamar la funcion handleAddTodo', () => {
        const value = 'Hola mundo'
        wrapper.find('input').simulate('change', {
            target: {
                value,
                name: 'description'
            }
        })

        const formSubmit = wrapper.find('form').prop('onSubmit')
        formSubmit({preventDefault(){}})
        expect(handleAddTodo).toHaveBeenCalled()
        //Se espera que la función sea llamana con un objeto como argumento
        expect(handleAddTodo).toHaveBeenCalledWith(expect.any(Object)) //Esta puede llamarse con un objeto vacío, lo cual es incorrecto
        expect(handleAddTodo).toHaveBeenCalledWith({    //Esta llama la función con el objeto que debe ser enviado
            desc: value,
            done: false,
            id: expect.any(Number)
        })

        expect(wrapper.find('input').prop('value')).toBe('') // Cuando se envía la info se debe resetear el input
    })
    
})
