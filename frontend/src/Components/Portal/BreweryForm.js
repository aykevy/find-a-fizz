import React from "react";


export default class BreweryForm extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            breweryType: '',
            street: '',
            city: '',
            state: '',
            postalCode: '',
            websiteUrl: '',
            phone: '',
            createdAt: null,
            updatedAt: null,
            country: '',
            longitude: null,
            latitude: null,
            address2: null,
            address3: null,
            countyProvince: '',
            obdbId: null,
            tags: ''
        }
    }

    render() {
        return (
            <form>
                Hello world!
            </form>

        )
    }

}