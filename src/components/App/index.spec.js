import {render, screen} from '@testing-library/react'

import App from './'

test('Render App',()=>{
    render(<App />)
    const element = screen.getByText('Welcome')
    expect(element).toBeInTheDocument()
})