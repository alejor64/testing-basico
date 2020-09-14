import React from 'react'
import '@testing-library/jest-dom'
import {mount} from 'enzyme'
import { UserContext } from '../../../components/09-useContext/UserContext'
import LoginScreen from '../../../components/09-useContext/LoginScreen'

describe('Pruebas en el componente <LoginScreen />', () => {
    const setUser = jest.fn()

    const object = {
        id: 123,
        name: 'Alejandro'
    }

    const wrapper = mount(
        <UserContext.Provider value={{
            setUser
        }}>
            <LoginScreen />
        </UserContext.Provider>
    )
    test('Debe retornar el componente', () => {
        expect(wrapper).toMatchSnapshot()
    })

    test('Dede de ejecutar el setUser con el argumento esperado', () => {
        wrapper.find('button').prop('onClick')()
        expect(setUser).toHaveBeenCalledWith(object)
    })
    
    
})
