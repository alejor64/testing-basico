import React from 'react'
import '@testing-library/jest-dom'
import {mount, shallow} from 'enzyme'
import TodoApp from '../../../components/08-useReducer/TodoApp'
import { demoTodo } from '../../fixtures/demoTodo'
import { act } from '@testing-library/react'

describe('Pruebas en el componente <TodoApp />', () => {
    const wrapper = shallow(<TodoApp />)
    Storage.prototype.setItem = jest.fn()

    test('Debe renderizar el componente', () => {
        expect(wrapper).toMatchSnapshot()
    })

    test('Debe agregar un todo', () => {
        const wrapper = mount(<TodoApp />)

        act(() => {
            wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodo[0])
            wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodo[1])
        })

        expect(wrapper.find('h1').text()).toBe('Todo App 2') //Es un 2 porque se agregaron dos tareas en el act
        expect(localStorage.setItem).toHaveBeenCalledTimes(2)
    })
    
    test('Debe eliminar un todo', () => {
        wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodo[0])
        wrapper.find('TodoList').prop('handleDelete')(demoTodo[0].id)
        expect(wrapper.find('h1').text()).toBe('Todo App 0')
    })
    
})
