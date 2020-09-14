import React from 'react'
import {shallow} from 'enzyme'
import '@testing-library/jest-dom'
import MultipleCustomHooks from '../../../components/03-examples/MultipleCustomHooks'
import { useFetch } from '../../../hooks/useFetch'
import { useCounter } from '../../../hooks/useCounter'

jest.mock('../../../hooks/useFetch')
jest.mock('../../../hooks/useCounter')

describe('Prueba en el componente <MultipleCustomHooks />', () => {

    useCounter.mockReturnValue({
        counter: 10,
        increment: () => {}
    })

    test('Debe mostrarse correctamente', () => {
        useFetch.mockReturnValue({
            data: null,
            loading: true,
            error: null
        })

        const wrapper = shallow(<MultipleCustomHooks />)

        expect(wrapper).toMatchSnapshot()
    })

    test('Debe de mostrar la información', () => {
        useFetch.mockReturnValue({
            data: [{
                author: 'Alejandro',
                quote: 'Hola mundo'
            }],
            loading: false,
            error: null
        })

        const wrapper = shallow(<MultipleCustomHooks />)
        // console.log(wrapper.html())

        const alerte = wrapper.find('.alert').exists()
        const pText = wrapper.find('.mb-0').text().trim()
        const footerTag = wrapper.find('footer').text().trim()

        console.log(footerTag)

        expect(alerte).toBe(false)
        expect(pText).toBe('Hola mundo')
        expect(footerTag).toBe('Alejandro')
    })
    
    
})
