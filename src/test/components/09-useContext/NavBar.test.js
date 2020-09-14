import React from 'react'
import '@testing-library/jest-dom'
import {shallow} from 'enzyme'
import NavBar from '../../../components/09-useContext/NavBar'

describe('Prueba en el componente <NavBar />', () => {
    test('Debe renderizar el componente', () => {
        const wrapper = shallow(<NavBar />)
        expect(wrapper).toMatchSnapshot()
    })
    
})
