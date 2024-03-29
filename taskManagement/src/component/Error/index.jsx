
const Error = ({error}) => {

    return error !== "" && <span style={{color: 'red'}}>{error}</span>
}

export default Error;