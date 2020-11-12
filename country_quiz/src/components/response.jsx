

const Response = ({ name, flag, testResponse, cssResponse, letter}) => {
    var css

    if(cssResponse !== null) {
        if(name === cssResponse[0].name) {
            css = cssResponse[0].check
        }

        if(name === cssResponse[1].name) {
            css = cssResponse[1].check
        }
    }

    const doNothing = () => {}
    
    return (
        <div className={"response" + ' ' + css } onClick={cssResponse === null ? () => {testResponse(name)}: doNothing()}>
            <strong>{letter}</strong>    {name}
        </div>
    )
}

export default Response