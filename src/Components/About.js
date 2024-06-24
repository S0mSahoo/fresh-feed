import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <div>
                <h1 className='text-center my-5'>About Us</h1>
                <div className="container fs-5">
                    <p>Welcome to <strong>FreshFeed</strong>, your trusted source for comprehensive and timely news coverage from around the world. Our mission is to deliver accurate, balanced, and insightful news to keep you informed and engaged with the ever-changing global landscape.</p>
                    <div>
                        <h4>Our Mission</h4>
                        <p>At <strong>FreshFeed</strong>, we believe in the power of informed citizens. Our mission is to provide our readers with the most reliable news and in-depth analysis on a wide range of topics, including current events, politics, business, technology, sports, entertainment, health, and more. We strive to empower our audience with the knowledge they need to make informed decisions and engage in meaningful conversations.</p>
                    </div>
                    <div>
                        <h4>What we Offer</h4>
                        <ul>
                            <li><strong>Breaking News:</strong> Stay up-to-date with the latest developments and breaking news stories as they unfold.</li>
                            <li><strong>In-Depth Analysis:</strong> Gain deeper insights into complex issues with our expert analyses and feature articles.</li>
                        </ul>
                    </div>
                </div>
                <p className='text-center my-5 fs-5'>Thank you for choosing <strong>FreshFeed</strong> as your go-to source for news. Together, we can stay informed, inspired, and connected.</p>
            </div>
        )
    }
}
