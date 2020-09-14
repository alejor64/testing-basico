import React from 'react'
import '@testing-library/jest-dom'
import {mount} from 'enzyme'
import AboutScreen from '../../../components/09-useContext/AboutScreen'
import { UserContext } from '../../../components/09-useContext/UserContext'

describe('Prueba en el componente <AboutScreen />', () => {

    const user = {
        name: 'Alejandro',
        email: 'alejoruizs@hotmail.com'
    }
    const setUser = jest.fn()

    const wrapper = mount(
        <UserContext.Provider value={{
            user,
            setUser
        }}>
            <AboutScreen />
        </UserContext.Provider>
    )

    test('Debe rendizar el componente', () => {
        expect(wrapper).toMatchSnapshot()
    })
    
})
