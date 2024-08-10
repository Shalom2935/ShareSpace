import React from 'react'
import PropTypes from 'prop-types'
import './DocumentCard.scss'

function DocumentCard({ title, type }) {
  return (
    <div className="card">
        <div className={`card_icon ${type}`}>k</div>
        <div className="title">{title}</div>
        <div className="card_content">bonjour</div>
        <div className="card_action">
            <div className="card_action__view"></div>
            <div className="card_action__download"></div>
        </div>  
    </div>
  )
}

DocumentCard.propTypes = {
    title : PropTypes.string.isRequired,
    type : PropTypes.string.isRequired
}

export default DocumentCard
