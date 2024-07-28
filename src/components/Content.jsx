import './Content.css'

function Content() {
    return (
        <div className='pai'>
            <div className='pai-esquerda'>
                <h2 className='text1'>
                    Learn to code by <br />
                    watching others
                </h2>
                <h3 className='text-2'>
                    See how experienced developers salve problems in real-time. <br />
                    Watching scripted tutorials is great, but understanding how <br />
                    developers think is invaluable.
                </h3>
            </div>
            <div className='pai-direita'>
                <div className='promocao'>
                <span className='highlight'>Try it free 7 days</span>
                <span className='highlight-after'>then $20/mo. thereafter</span>
                </div>
                <div className='login'>
                    <div className='pai-inputs'>
                        <input className='style-input' placeholder='First Name' type="text" />
                        <input className='style-input' placeholder='Last Name' type="text" />
                        <input className='style-input' placeholder='Email Address' type="text" />
                        <input className='style-input' placeholder='Password' type="text" />
                        <button className='butt'>CLAIM YOUR FREE TRIAL</button>
                        <h6 className='details'>
                            By clicking the button you are agreeing to our 
                            <span className='details-link'>Terms and Services</span>
                        </h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content