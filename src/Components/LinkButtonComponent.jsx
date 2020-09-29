// For help, see: https://stackoverflow.com/questions/42463263/wrapping-a-react-router-link-in-an-html-button

// file: /components/LinkButton.jsx
import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'

const LinkButtonComponent = (props) => {
  const {
    history,
    location,
    match,
    staticContext,
    to,
    onClick,
    // ⬆ filtering out props that `button` doesn’t know what to do with.
    ...rest
  } = props
  return (
    <button
      {...rest} // `children` is just another prop!
      onClick={(event) => {
        onClick && onClick(event)
        history.push(to)
      }}
    />
  )
}

LinkButtonComponent.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

export default withRouter(LinkButtonComponent)