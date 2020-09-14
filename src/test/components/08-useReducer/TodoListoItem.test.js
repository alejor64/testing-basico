import React from 'react'
import {shallow} from 'enzyme'
import '@testing-library/jest-dom'
import TodoListoItem from '../../../components/08-useReducer/TodoListoItem'
import { demoTodo } from '../../fixtures/demoTodo'

describe('Pruebas en el componente <TodoListoItem />', () => {
    const index = 0
    const handleDelete = jest.fn()
    const handleToggle = jest.fn()
    const wrapper = shallow(
        <TodoListoItem 
            todo={demoTodo[index]}
            i = {index}
            handleToggle={handleToggle}
            handleDelete={handleDelete}
        />
    )

    test('Debe renderizar el componente', () => {
        expect(wrapper).toMatchSnapshot()
    })

    test('Debe llamar handleDelete', () => {
        wrapper.find('button').simulate('click')
        expect(handleDelete).toHaveBeenCalled()
        //Se debe enviar la función con el ID del todo
        expect(handleDelete).toHaveBeenCalledWith(demoTodo[index].id)
    })
    
    test('Debe llamar handleToggle', () => {
        wrapper.find('p').simulate('click')
        expect(handleToggle).toHaveBeenCalledWith(demoTodo[index].id)
    })

    test('Debe de mostrar el texto correctamente', () => {
        const pTag = wrapper.find('p').text()
        // console.log(pTag)
        expect(pTag).toBe(`${index + 1}. ${demoTodo[index].desc}`)
    })
    
    test('Debe de tener la clase complete si TODO.done = true', () => {
        const todo = demoTodo[index]
        todo.done = true

        const wrapper = shallow(
            <TodoListoItem 
                todo={demoTodo[index]}
            />
        )

        expect(wrapper.find('p').hasClass('complete')).toBe(true)
    })
    
})
