"use client";
import ClickEvent from "./ClickEvent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import Counter from "./Counter";
import CounterBroken from "./CounterBroken";
import BooleanStateVariables from "./BooleanStateVariables";
import StringStateVariables from "./StringStateVariables";
import DateStateVariable from "./DataStateVariable";
import ObjectStateVariable from "./ObjectStateVariable";
import ArrayStateVariable from "./ArrayStateVariable";
import ParentStateComponent from "./ParentStateComponent";
import ChildStateComponent from "./ChildStateComponent";
import PropDrilling from "./PropDrilling";
import UrlEncoding from "./UrlEncoding";

export default function Lab4() {

    const sayHello = (message: string) => {
        alert(message);
    };
    const sayGoodbye = (message: string) => {
        alert(message);
    };
    const sampleFromParent = () => {
        alert("Sample from parent");
    };
  return (
    <div id="wd-lab4">
      <h2>Lab 4</h2>
      <ClickEvent />
      <PassingDataOnEvent />
      <PassingFunctions
        theFunction={sayHello}
        theOtherFunction={sampleFromParent}
        message="Hello from Lab 4"
      />
      <PassingFunctions
        theFunction={sayGoodbye}
        theOtherFunction={sampleFromParent}
        message="Goodbye from Lab 4"
      />
    <CounterBroken />
    <Counter />
    <BooleanStateVariables />
    <StringStateVariables />
    <DateStateVariable />
    <ObjectStateVariable />
    <ArrayStateVariable />
    <ParentStateComponent />
    <PropDrilling />
    <UrlEncoding />
    <hr />
    </div>
  );
}