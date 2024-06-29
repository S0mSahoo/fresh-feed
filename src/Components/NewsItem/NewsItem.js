import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './NewsItem.css'
import Null from '../images/null.png'
export class NewsItem extends Component {
    static propTypes = {
        title: PropTypes.string
    }
    render() {
        let { title, description, img, readMore } = this.props;
        return (
            <div className='container my-3'>
                <div className="card">
                    <img src={img === null?Null: img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description === null?"Description not available": description}</p>
                        <a href={readMore} target='blank' className={`btn btn-${this.props.color}`}>Read More</a>
                        {/* <a href={readMore} target='blank' className={`btn btn-sm btn-${color}`}>Read More</a> */}
                    </div>
                </div>
            </div >
        )
    }
}

export default NewsItem
