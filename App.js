import React, { Fragment ,Component} from 'react';

const list=[1,2,3,4,5,6];

class App extends Component
{
  state={
    index: 0
  };

  //List=list.map((item)=>{
    //if(item === 1)
      //return <li className='active'>{item}</li>;
  //});

  changeListForward=()=>{
    let i = (this.state.index)

    if(i>=0 && i < list.length)
      this.setState({
        index: i + 1
      })
    }
  
  changeListback=()=>{
    let i = (this.state.index)

    if(i>0)
      this.setState({
        index: i - 1
      })
   }

  render(){
    return(
      <Fragment>
        <h1>The list:</h1>
        <ul>
          {list.map(item=>(
          <li>{item}</li>
          ))}
        </ul>

        <div>
          <h1>Click the buttons to see the rest of the list</h1>
          <button id="forward" onClick={this.changeListForward}>forward</button>
          <button id="back" onClick={this.changeListback}>back</button>
          <p>{list[this.state.index]}</p>
        </div> 
      </Fragment>
    );
  }
}

export default App;
