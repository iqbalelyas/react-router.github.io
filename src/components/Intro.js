import React from 'react'
import {Link} from 'react-router-dom'

const Intro = (props) => (
    <div className="col-md-6" style={styles.box450}>
        <h4 style={styles.greyText}>{props.content}</h4>
        <Link to="#" className="btn buttonAction">Mulai Belajar</Link>
    </div>
)

const styles = {
    box450: {
        height: '450px'
    },
    greyText: {
        color: '#808080',
    }
}

export default Intro