import React, {Component} from 'react'
import {render} from 'react-dom'

import {make as Example, light, makeAwesome} from '../../src'

export default class Demo extends Component {
  render() {
    return <div>
      <h1>es77-awesome-component Demo</h1>
      <Example mode={makeAwesome("ola")} />
    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))
