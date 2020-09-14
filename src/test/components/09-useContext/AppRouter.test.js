import React from 'react'
import '@testing-library/jest-dom'
import {mount} from 'enzyme'
import { UserContext } from '../../../components/09-useContext/UserContext'
import AppRouter from '../../../components/09-useContext/AppRouter'

describe('Pruebas en el componente <AppRouter />', () => {
    const user = {
        id: 1,
        name: 'Alejandro'
    }

    const wrapper =mount(
        <UserContext.Provider value = {{user}}>
            <AppRouter />
        </UserContext.Provider>
    )

    test('Debe renderizar el componente', () => {
        expect(wrapper).toMatchSnapshot()
    })
    
})
