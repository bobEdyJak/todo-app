type TaskInputData = {
    numberOfGreeting : number,
    greeting: string,
    greetingArray : Greeting[],
    myName : string,
    colorChange: string,
}

type Greeting = {
    greeting : string,
    color : string,
    font: string,
    fontSize : number
}

function TaskInput(componentData: TaskInputData) {
    return (
        <>
        <div style={{backgroundColor: "rgb(105, 27, 128)"}}>
        <p style={{color: componentData.colorChange,}}>Hello world, or should I say {componentData.greeting}. Should say this {componentData.numberOfGreeting} times</p>
            <p>My name is {componentData.myName}</p>
            <p>These are some greetings: </p>
            <br />
            {componentData.greetingArray.map(
                (greetings, index) => (
                    <p key={index} style={{color: greetings.color, fontFamily: greetings.font, fontSize: greetings.fontSize}}>
                        {greetings.greeting} people
                    </p>
                )
            )}
        </div>
        </>   
    );
}

export default TaskInput;