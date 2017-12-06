import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { moveChange } from '../../store/action/game'

import Blaock from '../components/game/block'

class GamePart extends Component {

  constructor(props) {
    super(props)
    this.state = {
      arr: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }
  }

  moveLeft() {
    let arr1 = [],
        arr2 = [],
        arr3 = [],
        arr4 = []
    for(let i in this.state.arr) {
      if(i<4) {
        arr1.push(this.state.arr[i])
      } else if (i < 8) {
        arr2.push(this.state.arr[i])
      } else if (i < 12) {
        arr3.push(this.state.arr[i])
      }else {
        arr4.push(this.state.arr[i])
      }
    }
    let pro1 = this.formula(arr1).then((res) => {      
      arr1 = res
    })
    let pro2 = this.formula(arr2).then((res) => {
      arr2 = res
    })
    let pro3 = this.formula(arr3).then((res) => {
      arr3 = res
    })
    let pro4 = this.formula(arr4).then((res) => {
      arr4 = res
    })
    Promise.all([pro1, pro2, pro3, pro4]).then((res)=>{
      this.setState({
        arr: arr1.concat(arr2, arr3, arr4)
      },()=>{
        this.randomNumber()
      })
    })    
  }

  moveRight() {
    let arr1 = [],
      arr2 = [],
      arr3 = [],
      arr4 = []
    for (let i in this.state.arr) {
      if (i < 4) {
        arr1.push(this.state.arr[i])
      } else if (i < 8) {
        arr2.push(this.state.arr[i])
      } else if (i < 12) {
        arr3.push(this.state.arr[i])
      } else {
        arr4.push(this.state.arr[i])
      }
    }
    let pro1 = this.formula(arr1, 'add').then((res) => {
      arr1 = res
    })
    let pro2 = this.formula(arr2, 'add').then((res) => {
      arr2 = res
    })
    let pro3 = this.formula(arr3, 'add').then((res) => {
      arr3 = res
    })
    let pro4 = this.formula(arr4, 'add').then((res) => {
      arr4 = res
    })
    Promise.all([pro1, pro2, pro3, pro4]).then((res) => {
      this.setState({
        arr: arr1.concat(arr2, arr3, arr4)
      }, () => {
        this.randomNumber()
      })
    }) 
  }

  moveUp() {
    let arr1 = [],
      arr2 = [],
      arr3 = [],
      arr4 = []
    for (let i in this.state.arr) {
      if (i%4==0) {
        arr1.push(this.state.arr[i])
      } else if (i%4==1) {
        arr2.push(this.state.arr[i])
      } else if (i%4==2) {
        arr3.push(this.state.arr[i])
      } else {
        arr4.push(this.state.arr[i])
      }
    }
    let pro1 = this.formula(arr1).then((res) => {
      arr1 = res
    })
    let pro2 = this.formula(arr2).then((res) => {
      arr2 = res
    })
    let pro3 = this.formula(arr3).then((res) => {
      arr3 = res
    })
    let pro4 = this.formula(arr4).then((res) => {
      arr4 = res
    })
    Promise.all([pro1, pro2, pro3, pro4]).then((res) => {
      let newArr = []
      for(let j = 0 ;j<4;j++) {
        newArr.push(arr1[j])
        newArr.push(arr2[j])
        newArr.push(arr3[j])
        newArr.push(arr4[j])
      }
      this.setState({
        arr: newArr
      }, () => {
        this.randomNumber()
      })
    }) 
  }

  moveDown() {
    let arr1 = [],
      arr2 = [],
      arr3 = [],
      arr4 = []
    for (let i in this.state.arr) {
      if (i % 4 == 0) {
        arr1.push(this.state.arr[i])
      } else if (i % 4 == 1) {
        arr2.push(this.state.arr[i])
      } else if (i % 4 == 2) {
        arr3.push(this.state.arr[i])
      } else {
        arr4.push(this.state.arr[i])
      }
    }
    let pro1 = this.formula(arr1, 'add').then((res) => {
      arr1 = res
    })
    let pro2 = this.formula(arr2, 'add').then((res) => {
      arr2 = res
    })
    let pro3 = this.formula(arr3, 'add').then((res) => {
      arr3 = res
    })
    let pro4 = this.formula(arr4, 'add').then((res) => {
      arr4 = res
    })
    Promise.all([pro1, pro2, pro3, pro4]).then((res) => {
      let newArr = []
      for (let j = 0; j < 4; j++) {
        newArr.push(arr1[j])
        newArr.push(arr2[j])
        newArr.push(arr3[j])
        newArr.push(arr4[j])
      }
      this.setState({
        arr: newArr
      }, () => {
        this.randomNumber()
      })
    }) 
  }

  formula(arr,direction) {//计算的函数
    let newArr = []
    for(let i = 0;i<arr.length;i++) {
      if (arr[i]!=0) {
        newArr.push(arr[i])
      }
    }
    let callArr = [0,0,0,0]

    if (newArr.length == 1) {//1
      if (direction === 'add') {
        callArr[3] = newArr[0]
      }else {
        callArr[0] = newArr[0]
      }      
    } else if (newArr.length == 2) {//2
      if (newArr[0] == newArr[1]) {
        if (direction==='add') {
          callArr[3] = newArr[0] * 2
        }else {
          callArr[0] = newArr[0] * 2
        }
      }else {
        if (direction === 'add') {
          callArr[3] = newArr[1]
          callArr[2] = newArr[0]
        } else {
          callArr[1] = newArr[1]
          callArr[0] = newArr[0]
        }
      }
    } else if (newArr.length == 3) {//3
      if (direction === 'add') {

        if (newArr[1] == newArr[2]) {
          callArr[3] = newArr[2]*2
          callArr[2] = newArr[0]
        }else {
          callArr[3] = newArr[2]
          if (newArr[0] == newArr[1]) {
            callArr[2] = newArr[1] * 2
          } else {
            callArr[2] = newArr[1]
            callArr[1] = newArr[0]
          }
        }
        
      } else {
        
        if (newArr[1] == newArr[0]) {
          callArr[0] = newArr[0] * 2
          callArr[1] = newArr[0]
        } else {
          callArr[0] = newArr[0]
          if (newArr[2] == newArr[1]) {
            callArr[1] = newArr[1] * 2
          } else {
            callArr[1] = newArr[1]
            callArr[2] = newArr[2]
          }
        }
        
      }
    } else if (newArr.length == 4) {//4
      if (direction === 'add') {

        if (newArr[3] == newArr[2]) {
          callArr[3] = newArr[3]*2
          if (newArr[1] == newArr[0]) {
            callArr[2] = newArr[1]*2
          }else {
            callArr[2] = newArr[1]
            callArr[1] = newArr[0]
          }
        }else {
          callArr[3] = newArr[3]
          if (newArr[2] == newArr[1]) {
            callArr[2] = newArr[2]*2
            callArr[1] = newArr[0]
          }else {
            callArr[2] = newArr[2]
            if (newArr[1] == newArr[0]){
              callArr[1] = newArr[1]*2
            }else {
              callArr[1] = newArr[1]
              callArr[0] = newArr[0]
            }
          }
        }

      }else {
        if (newArr[0] == newArr[1]) {
          callArr[0] = newArr[0] * 2
          if (newArr[3] == newArr[2]) {
            callArr[1] = newArr[2] * 2
          } else {
            callArr[1] = newArr[2]
            callArr[2] = newArr[3]
          }
        } else {
          callArr[0] = newArr[0]
          if (newArr[2] == newArr[1]) {
            callArr[1] = newArr[2] * 2
            callArr[2] = newArr[3]
          } else {
            callArr[1] = newArr[1]
            if (newArr[2] == newArr[3]) {
              callArr[2] = newArr[2] * 2
            } else {
              callArr[2] = newArr[2]
              callArr[3] = newArr[3]
            }
          }
        }
      }
    }

    return new Promise(function (resolve, reject) {
      resolve(callArr);
    })
  }

  randomNumber() {//生成随机数字的
    let ifArr = []
    let maxNumber = 0
    for (let i in this.state.arr) {
      if (this.state.arr[i]==0) {
        ifArr.push(i)
      }
      if (this.state.arr[i] > maxNumber) {
        maxNumber = this.state.arr[i]
      }
    }
    if (ifArr.length==0) {
      if (maxNumber>1024) {
        alert('你竟然达到了' + maxNumber)
      }else {
        alert('才' + maxNumber+'分，辣鸡')
      }
      
      return false
    }
    let anyOne = Math.floor(Math.random() * ifArr.length)
    let newArr = this.state.arr
    newArr[ifArr[anyOne]] = 2
    this.setState({
      arr: newArr
    })
  }

  componentDidMount() {
    this.randomNumber()
    let that = this
    document.onkeydown = function (event) {//捕获键盘事件，操作游戏
      var e = event || window.event || arguments.callee.caller.arguments[0]
      if (e && e.keyCode == 37) {
        that.moveLeft()
      }
      if (e && e.keyCode == 38) {
        that.moveUp()
      }
      if (e && e.keyCode == 39) {
        that.moveRight()
      }
      if (e && e.keyCode == 40) {
        that.moveDown()
      }
    }
  }

  render() {
    return (
      <div className="game-body" >
        {
          this.state.arr.map(
            (i, index) => (
              <Blaock index={i} key={index} />
            )
          )
        }
      </div>
    )
  }
}

const mapStateToProps = ({game}) => {
  return {
    arr: game.number
  }
}

const mapDispatchToProps = (dispatch) => ({
  moveChange: bindActionCreators(moveChange,dispatch),
})

export default connect(mapStateToProps,mapDispatchToProps)(GamePart)