import React, {Component} from 'react';
import './App.css';
import Color from './types/Color'
import Column from './components/Column'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      colors: [
        new Color(128, 0, 0),
        new Color(0, 0, 128),
      ],
    }
  }

  addColumn = (event) => {
    this.setState({
      colors: this.state.colors.concat(new Color(0, 0, 0))
    })
  }

  updateColumn = (index: number, color: Color) => {
    let newColors = this.state.colors
    newColors[index] = color
    this.setState({colors: newColors})
  }

  deleteColumn = (index: number) => {
    let newColors = this.state.colors
    newColors.splice(index, 1)
    this.setState({colors: newColors})
  }

  render() {
    return (
      <div className={'App'}>
        {this.state.colors.map(
          (color, index) => {
            return <Column color={color} index={index} onChange={this.updateColumn} onDelete={this.deleteColumn} />
          }
        )}
        <button className={'add'} onClick={this.addColumn}>+</button>
      </div>
    )
  }
}

export default App;
