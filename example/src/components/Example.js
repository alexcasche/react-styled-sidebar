import React, { Component } from 'react'
import Sidebar from 'reactrix-sidebar'
import Layout from '../layout/Layout'
import Menu from './Menu'

const options = {
  side: "left",
  effect: "slide"
}

export default class Example extends Component {
  constructor() {
    super();
    this.state = {...options}
  }
  updateOption = (option) => {
    this.setState({...this.state, ...option})
  }
  render () {
    return (
      <Sidebar {...this.state}>
        <Menu />
        <Layout updateOption={this.updateOption} />
      </Sidebar>
    )
  }
}
