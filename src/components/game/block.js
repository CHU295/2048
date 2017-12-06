import React from 'react'

class Blaock extends React.Component {
  
  render() {
    let num = this.props.index
    let style = 'part'
    switch (num) {
      case 2:
        style = 'part num_2048'
        break;
      case 4:
        style = 'part num_1024'
        break;
      case 8:
        style = 'part num_512'
        break;
      case 16:
        style = 'part num_4096'
        break;
      case 32:
        style = 'part num_8192'
        break;
      case 64:
        style = 'part num_16384'
        break;
      case 128:
        style = 'part num_32768'
        break;
      case 256:
        style = 'part num_256'
        break;
      case 512:
        style = 'part num_512'
        break;
      case 1024:
        style = 'part num_1024'
        break;
      case 2048:
        style = 'part num_2048'
        break;
      case 4096:
        style = 'part num_4096'
        break;
      case 8192:
        style = 'part num_8192'
        break;
      case 16384:
        style = 'part num_16384'
        break;
      case 32768:
        style = 'part num_32768'
        break;    
      default:
        break;
    }
    return (
      <div className={style}>
        {num == 0 ? '' : num}
      </div>
    )
  }
}

export default Blaock