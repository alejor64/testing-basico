import React from 'react'
import '@testing-library/jest-dom'
import {mount} from 'enzyme'
import HomeScreen from '../../../components/09-useContext/HomeScreen'
import { UserContext } from '../../../components/09-useContext/UserContext'

describe('Pruebas en el componente <HomeScreen />', () => {

    const user = {
        name: 'Alejandro',
        email: 'alejoruizs@hotmail.com'
    }

    const wrapper = mount(
        <UserContext.Provider value={{
            user
        }}>
            <HomeScreen />
        </UserContext.Provider>
    )

    test('Debe de mostrar el compoenente', () => {
        expect(wrapper).toMatchSnapshot()
    })
    
})
