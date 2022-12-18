import React from 'react'

import '../ccounts/Accounts.css'

function ExistingBreweryEmailRequest(props) {
    return (
        <a className= 'owner--claim--brewery' href = "mailto:findafizz69420@gmail.com">
            <i class="fa fa-envelope" aria-hidden="true"/>
            Request ownership of existing brewery.
        </a>
    )
}

export default ExistingBreweryEmailRequest;