import "../components.css";
import { IoIosArrowUp } from "react-icons/io";
import { useState } from "react";

function FaqComponent(props) {

  const [togglekey, handletoggle] = useState(false) 

  const show = () => handletoggle(prev => !prev)

  return (
    <div key={props.data.key} className="question-component">
        <div className="question" onClick={show}>
            <h4>{props.data.question}</h4>
            <span className={`${ togglekey ? "active" : "" }`}><IoIosArrowUp className="arrow" /></span>
        </div>
        { togglekey && <span className="answer" >{props.data.answer}</span>}
    </div>
  );
}

export default FaqComponent;
