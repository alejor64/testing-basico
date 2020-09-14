import React from 'react'
import {shallow} from 'enzyme'
import '@testing-library/jest-dom'
import RealExampleRef from '../../../components/04-useRef/RealExampleRef'

describe('Pruebas en el componente <RealExampleRef />', () => {
    
    const wrapper = shallow(<RealExampleRef />)

    test('Debe renderizar el componente', () => {
        expect(wrapper).toMatchSnapshot()
        expect(wrapper.find('MultipleCustomHooks').exists()).toBe(false)
    })
    
    test('Debe de mostrar el componente <MultipleCustomHooks />', () => {
        wrapper.find('button').simulate('click')
        expect(wrapper.find('MultipleCustomHooks').exists()).toBe(true)
    })
    
})
