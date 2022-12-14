import React from "react";
import './ContactTypes.css'

export default function ContactTypes(props) {

    if (props.location) {
        return (
            <div className="brewery--social--list">
                {/** Social Buttons - Website */}
                { props.website && 
                    <a href={props.website} target="_blank" rel="noopener noreferrer">
                        <img className = 'brewery--social--buttons'  src='/assets/social/socialButton0.png' alt='website-logo'/>
                    </a>
                }

                {/** Social Buttons - Phone */}
                { props.phone && 
                    <a href={`tel:+1-${props.phone}`} target="_blank" rel="noopener noreferrer">
                    <img className = 'brewery--social--buttons' src='/assets/social/socialButton2.png' alt='phone-logo' />
                    </a>
                }
    
                {/** Social Buttons - Twitter */}
                <a href={`https://www.twitter.com/intent/tweet?text=Going out to ${props.name} in ${props.location}, who wants to meet up?`} target="_blank" rel="noopener noreferrer">
                    <img className = 'brewery--social--buttons' src='/assets/social/socialButton4.png' alt='twitter-logo'/>
                </a>
            </div>
        )
    }

    else {
        return (
            <>
                <div>
                    <a href={'http://' + props.linkedIn[Math.floor(Math.random()*props.linkedIn.length)] } target="_blank" rel="noopener noreferrer">
                        <img className = 'brewery--social--buttons'  src='/assets/social/socialButton6.png' alt='linkedin-logo'/>
                    </a>

                    <a href={'http://' +props.youtube}  target="_blank" rel="noopener noreferrer">
                        <img className = 'brewery--social--buttons'  src='/assets/social/socialButton5.png' alt='youtube-logo'/>
                    </a>

                    <a href={'http://' +props.instagram}  target="_blank" rel="noopener noreferrer">
                        <img className = 'brewery--social--buttons'  src='/assets/social/socialButton3.png' alt='instagram-logo' />
                    </a>

                    <a href={'http://' +props.facebook}  target="_blank" rel="noopener noreferrer">
                        <img className = 'brewery--social--buttons'  src='/assets/social/socialButton1.png' alt='facebook-logo' />
                    </a>

                    <a href={'http://' +props.twitter}  target="_blank" rel="noopener noreferrer">
                        <img className = 'brewery--social--buttons' src='/assets/social/socialButton4.png' alt='twitter-logo' />
                    </a>
                </div>
            </>
        )
    }    
}