import React from 'react'
import '@testing-library/jest-dom'
import {shallow} from 'enzyme'
import HookApp from '../HookApp'

describe('Pruebas en el componente <HookApp />', () => {
    test('Debe renderizar el componente', () => {
        const wrapper = shallow(<HookApp />)

        expect(wrapper).toMatchSnapshot()
    })
    
})
