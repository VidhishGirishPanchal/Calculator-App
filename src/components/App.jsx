import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import "./App.css";
import Btn from "./Btn";
import BackspaceIcon from '@material-ui/icons/Backspace';

function App(){
   
    const [result, setResult] = useState("");
    
    function handleClick(event){
        setResult(result + event.target.name);
    } 
    function allClear(){
        setResult("");
    }
    function deleteOne(){
        setResult(result.slice(0, result.length-1));
    }
    function plusMinus(){
        setResult(result*-1);
    }
    function finalResult(){
        try{
            setResult(eval(result.toString()));
        }catch(error){
            setResult("Error");
        }
    }
   
    return(
    <div className="bg"> 
   <div className="calc-app">
   
        <form>
        <input type="text" value={result}></input>
        </form>
        <div className="keypad">
            <Btn 
            btnclass= "" 
            btnfn= {allClear} 
            btntext= "AC" 
            />
            {/* <button onClick={allClear}>AC</button> */}
            <Btn btnclass= "" btnfn= {deleteOne} btntext= <BackspaceIcon /> />
            {/* <button onClick={deleteOne}><BackspaceIcon /></button> */}
            <Btn btnclass="" btnfn={handleClick} btntext="%" btnname="%" />
            {/* <button onClick={handleClick} name="%">%</button> */}
            <Btn btnclass="orangebtn" btnfn={handleClick} btntext="/" btnname="/" />
            {/* <button  onClick={handleClick} name="/" className="orangebtn">/</button> */}
            <Btn btnclass="greybtn" btnfn={handleClick} btntext="7" btnname="7" />
            {/* <button  onClick={handleClick} className="greybtn" name="7">7</button> */}
            <Btn btnclass="greybtn" btnfn={handleClick} btntext="8" btnname="8" />
            {/* <button  onClick={handleClick} className="greybtn" name="8">8</button> */}
            <Btn btnclass="greybtn" btnfn={handleClick} btntext="9" btnname="9" />
            {/* <button onClick={handleClick} className="greybtn"  name="9">9</button> */}
            <Btn btnclass="orangebtn" btnfn={handleClick} btntext="X" btnname="*" />
            {/* <button  onClick={handleClick} name="*" className="orangebtn">X</button> */}
            <Btn btnclass="greybtn" btnfn={handleClick} btntext="4" btnname="4" />
            {/* <button  onClick={handleClick} className="greybtn" name="4" >4</button> */}
            <Btn btnclass="greybtn" btnfn={handleClick} btntext="5" btnname="5" />
            {/* <button  onClick={handleClick} className="greybtn" name="5" >5</button> */}
            <Btn btnclass="greybtn" btnfn={handleClick} btntext="6" btnname="6" />
            {/* <button onClick={handleClick} className="greybtn"  name="6" >6</button> */}
            <Btn btnclass="orangebtn" btnfn={handleClick} btntext="-" btnname="-" />
            {/* <button  onClick={handleClick} name="-" className="orangebtn">-</button> */}
            <Btn btnclass="greybtn" btnfn={handleClick} btntext="1" btnname="1" />
            {/* <button onClick={handleClick} className="greybtn"  name="1" >1</button> */}
            <Btn btnclass="greybtn" btnfn={handleClick} btntext="2" btnname="2" />
            {/* <button  onClick={handleClick} className="greybtn" name="2">2</button> */}
            <Btn btnclass="greybtn" btnfn={handleClick} btntext="3" btnname="3" />
            {/* <button onClick={handleClick} className="greybtn"  name="3">3</button> */}
            <Btn btnclass="orangebtn" btnfn={handleClick} btntext="+" btnname="+" />
            {/* <button onClick={handleClick}  name="+" className="orangebtn">+</button> */}
            <Btn btnclass="greybtn" btnfn={plusMinus} btntext="+/-" />
            {/* <button onClick={plusMinus} className="greybtn">+/-</button> */}
            <Btn btnclass="greybtn" btnfn={handleClick} btntext="0" btnname="0" />
            {/* <button  onClick={handleClick} className="greybtn" name="0">0</button> */}
            <Btn btnclass="greybtn" btnfn={handleClick} btntext="." btnname="." />
            {/* <button  onClick={handleClick} className="greybtn" name=".">.</button> */}
            <Btn btnclass="greybtn" btnfn={finalResult} btntext="=" />
            {/* <button onClick={finalResult} className="orangebtn" >=</button> */}
            
        </div>
       </div> 
    </div>
    );
}

export default App;