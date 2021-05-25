import React, {PureComponent} from 'react'
import './Column.css'
import Color from '../types/Color'

interface Props {
  color: Color,
  index: number,
  onChange: void,
  onDelete: void,
}

class Column extends PureComponent<Props> {
  updateR = (event) => {
    const c = this.props.color
    this.props.onChange(this.props.index, new Color(event.target.value, c.g, c.b))
  }
  updateG = (event) => {
    const c = this.props.color
    this.props.onChange(this.props.index, new Color(c.r, event.target.value, c.b))
  }
  updateB = (event) => {
    const c = this.props.color
    this.props.onChange(this.props.index, new Color(c.r, c.g, event.target.value))
  }

  onDelete = (event) => {
    this.props.onDelete(this.props.index)
  }

  input(name: string, value: number, onChange: Function) {
    return <input
      type={'number'}
      min={0}
      max={255}
      name={name}
      value={value}
      onChange={onChange}
      size={3}
    />
  }

  render() {
    const c = this.props.color
    return (
      <div className={'Column'} style={{backgroundColor: `rgb(${c.r}, ${c.g}, ${c.b})`}}>
        {this.input('r', c.r, this.updateR)}
        {this.input('g', c.g, this.updateG)}
        {this.input('b', c.b, this.updateB)}
        <button onClick={this.onDelete}>Del</button>
      </div>
    )
  }
}

export default Column
