import React from 'react'
import {shallow} from 'enzyme'
import '@testing-library/jest-dom'
import { demoTodo } from '../../fixtures/demoTodo'
import TodoList from '../../../components/08-useReducer/TodoList'

describe('Pruebas en el componente <TodoList />', () => {
    const handleDelete = jest.fn()
    const handleToggle = jest.fn()
    const wrapper = shallow(
        <TodoList 
            todos={demoTodo}
            handleToggle={handleToggle}
            handleDelete={handleDelete}
        />
    )

    test('Debe retornar el componente', () => {
        expect(wrapper).toMatchSnapshot()
    })

    test('Debe de tener el componente <TodoListoItem />', () => {
        const TodoListoItem = wrapper.find('TodoListoItem')
        expect(TodoListoItem.length).toBe(demoTodo.length)
        expect(TodoListoItem.at(0).prop('handleToggle')).toEqual(expect.any(Function))
        expect(TodoListoItem.at(0).prop('handleDelete')).toEqual(expect.any(Function))
    })
    
})
