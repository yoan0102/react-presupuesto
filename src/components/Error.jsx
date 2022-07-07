import PropTypes from "prop-types"

const Error = ({ msg }) => {
  return (
    <>
      <p className='alert alert-danger error'>{msg}</p>
    </>
  )
}

Error.propsTypes = {
  msg: PropTypes.string.isRequired,
}

export default Error
