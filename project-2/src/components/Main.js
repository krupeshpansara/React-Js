import React , {useState} from 'react';
// import Navbar from './Navbar';
// import PropTypes from 'prop-types';

export default function Main(props) {

    const handleUpcase =()=>{
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLocase =()=>{
        
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleOnchaing = (event)=>{
        setText(event.target.value);
    }
    const handclertext =()=>{
        setText('');
    }
    const [text , setText] = useState('');
    
    // let reset = heandleOnchaing;

    const handleReset = ()=>{
        console.log('hello');
        setText(text);
    }

    // const [myStyle , setmyStyle] = useState({
    //     backgroundColor: 'rgba(0,0,0,0.9)' ,
    //     color: 'white',
    //     borderColor: 'rgba(255,255,255,0.3)',
    //     transitionDuration: '0.3s'
    // });
    // const togglestyle=()=>{
    //     if(myStyle.color === 'white'){
    //         setmyStyle({
    //             backgroundColor: 'white' ,
    //             color: 'black',
    //             borderColor: 'black',
    //             transitionDuration: '0.3s'
    //         })
    //     }
    //     else{
    //         setmyStyle({
    //             backgroundColor: 'rgba(0,0,0,0.9)' ,
    //             color: 'white',
    //             borderColor: 'rgba(255,255,255,0.3)',
    //             transitionDuration: '0.3s'
    //         })
    //     }
    // };
    const handleCopy = () =>{
        navigator.clipboard.writeText(text);
    }
    const handleExtraSpaces = () =>{
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(" "))

    }

    

    return (
        <div className="Main" >
            {/* <button type="button" className='dark_btn' >
                <ion-icon className='btn_dark_icon' name="contrast-outline"></ion-icon>
                <ion-icon className='btn_light_icon' name="sunny-outline"></ion-icon>
            </button> */}
            <div className="input-group" >
                <span className="input_text">{props.text}</span>
                <textarea className="form-control" id="mybox"  aria-label="With textarea" placeholder='Enter text.....' onChange={handleOnchaing} rows="10" value={text}></textarea>
            </div>
            <div className="btn-group">
                <button type="button" className="btn btn-primary"  onClick={handleUpcase}>  {props.UpperCase_btn} </button>
                <button type="button" className="btn btn-primary"  onClick={handleLocase}>  {props.loverCase_btn} </button>
                <button type="button" className="btn btn-primary"  onClick={handclertext}>  clear text </button>
                <button type="button" className="btn btn-primary"  onClick={handleReset}>  Reset </button>
                <button type="button" className="btn btn-primary"  onClick={handleCopy}>  Copy Text </button>
                <button type="button" className="btn btn-primary"  onClick={handleExtraSpaces}>  Extra Spaces </button>


            </div>
            <div className="info">
                <h1>Your Text summary</h1>
                <p>{text.split(" ").length - 1} word and {text.length} characters</p>
                <p>reade avreg time {(text.split(" ").length)*0.008} mini</p>
                {/* <p>{text.split("/n").length} peregraf</p> */}
            </div>
        </div>
    )
}
