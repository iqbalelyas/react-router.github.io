import React from 'react'
import {Link} from 'react-router-dom'

const Card = (props) => (
    <div className="col-md-6">
        <div className="card text-center">
            <img src={props.imageUrl} alt="" className="card-img-top"/>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p>{props.subtitle}</p>
                <Link to="#" className="btn buttonAction">Mulai Belajar</Link>
            </div>
        </div>
    </div>
)

export default Card