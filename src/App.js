import React from "react";

const sections = [
    'Choose title',
    'Choose description',
    'Confirm data'
]


const forms = [
    {
        title: 'Choose Tittle Content',
        buttonText: 'Submit title'
    },
    {
        title: 'Choose description Content',
        buttonText: 'Submit description'
    },
    {
        title: 'Are you happy now',
        buttonText: 'Yes, go ahead'
    }
]

function App() {
    let [curr, setCurr] = React.useState(0)
    let [lastSubmitted, setLastSubmitted] = React.useState(0)
    let [submitted, setSubmitted] = React.useState(false)
    const chooseSection = (i) => {
        i <= lastSubmitted && setCurr(i)
    }
    const handleNext = () => {
        setCurr(prev => {
            if (prev === 2) setSubmitted(true)
            setLastSubmitted(prev+1)
            return prev + 1
        })
    }
    const handlePrev = ()=>{
        setCurr(prev=>prev-1)
        setLastSubmitted(prev=>prev-1)
    }
    return (
        <div className="App">
            <div className="Card">
                <div className="Sections">
                    {sections.map((t, i) => <Section sl={i + 1} title={t} active={curr >= i || i <= lastSubmitted}
                                                     handleChoose={chooseSection}/>)}
                </div>
                <div className="FormContainer">
                    <div>{submitted ? 'Ok we are done Thanks for sending your data' : forms[curr].title}</div>
                    {
                        !submitted && (
                            <div className="Buttons">
                                {( curr > 0  ) && <button onClick={handlePrev}>{
                                    curr < 2 ? 'Back' : 'No, go back'
                                }</button>}
                                <button onClick={handleNext}>
                                    {forms[curr].buttonText}
                                </button>
                            </div>
                        )
                    }

                </div>
            </div>
        </div>
    );


}

function Section({title, sl, active, handleChoose}) {
    return (
        <div className="Section" onClick={() => handleChoose(sl - 1)}>
            <span className={`SL ${active && 'Active'}`}>{sl}</span><span
            className={`Title ${active && 'Active'}`}>{title}</span>
        </div>
    )
}


export default App;
