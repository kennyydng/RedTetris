import chai from "chai"
import React from 'react'
import { render } from '@testing-library/react'
import {Tetris, Board} from '../src/client/components/test'

chai.should()

describe('Fake react test', function(){
  it('works', function(){
    // Test simple de rendu
    const { container } = render(React.createElement(Tetris))
    container.should.not.be.null
  })
})
