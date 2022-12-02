import React from "react";
import { Button, Modal, ModalHeader, ModalBody, Label, Row , Col } from 'reactstrap';
import { Control, LocalForm,Errors } from 'react-redux-form';
import { baseUrl } from '../../Shared/baseUrl'
import axios from 'axios';
import '../Accounts/Accounts.css'

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const validLat = (val) => Math.abs(val) <= 90;
const validLong = (val) => Math.abs(val) <= 180;

//Checks string to see if it would make a valid website URL.
const validWebsite = (val) => /^(https?\:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})(\/[\w]*)*$/.test(val);

//Verifies if it is a valid phone number.
const validPhone = (val) => /^\+?\d{1,3}(\-|\x20)?\(?\d+\)?((\-|\x20)?\d+)+$/gm.test(val);

export default class NewBreweryModal extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            isCommenting: false
        }
        this.toggleModal = this.toggleModal.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    toggleModal() {
        this.setState({
           isCommenting: !this.state.isCommenting     
        })
    }

    postBrewery(userId, name = null, breweryType = null, street = null, city = null, state = null, postalCode = null, websiteUrl = null, phone = null, country = null, longitude = null, latitude = null, address2 = null, address3 = null, countyProvince = null, type = null) {
        const postBeerURL = baseUrl + '/brewery';
        const today = new Date();
        const todayFormatted = today.toISOString();
        
        axios.post(postBeerURL, {
            name: name,
            breweryType: (breweryType === "None" ? null : breweryType),
            street: street,
            city: city,
            state: state,
            postalCode: postalCode,
            websiteUrl: websiteUrl,
            phone: phone,
            createdAt: todayFormatted,
            updatedAt: todayFormatted,
            country: country,
            longitude: longitude,
            latitude: latitude,
            address2: address2,
            address3: address3,
            countyProvince: countyProvince,
            obdbId: null,
            tags: null,
          })
        
          .then(function(response) {
            const postOwnershipURL = baseUrl + '/ownership';
            let newBreweryId = response.data.id;

            axios.post(postOwnershipURL, {
                userId: userId,
                breweryId: newBreweryId
            })

            .catch(function (error) {
                console.log(error);
            })
          })

          .catch(function (error) {
            console.log(error);
          });
    }

    putBrewery(breweryId, name = null, breweryType = null, street = null, city = null, state = null, postalCode = null, websiteUrl = null, phone = null, country = null, longitude = null, latitude = null, address2 = null, address3 = null, countyProvince = null, type = null)
    {
        const putBeerURL = baseUrl + '/brewery/' + breweryId;
        const today = new Date();
        const todayFormatted = today.toISOString();

        axios.put(putBeerURL, {
            name: name,
            breweryType: (breweryType === "None" ? null : breweryType),
            street: street,
            city: city,
            state: state,
            postalCode: postalCode,
            websiteUrl: websiteUrl,
            phone: phone,
            createdAt: todayFormatted,
            updatedAt: todayFormatted,
            country: country,
            longitude: longitude,
            latitude: latitude,
            address2: address2,
            address3: address3,
            countyProvince: countyProvince,
            obdbId: null,
            tags: null,
          })
        
          .catch(function (error) {
            console.log(error);
          });
    }

    handleSubmit(action, userId, breweryId = null, values) {
        if (action === "add")
        {
            this.postBrewery(userId, values.name, values.breweryType, values.street, values.city, values.state, values.postalCode, values.websiteUrl, values.phone, values.country, values.longitude, values.latitude, values.address2, values.address3, values.countyProvince, values.type)
        }
        else if (action === "update")
        {
            this.putBrewery(breweryId, values.name, values.breweryType, values.street, values.city, values.state, values.postalCode, values.websiteUrl, values.phone, values.country, values.longitude, values.latitude, values.address2, values.address3, values.countyProvince, values.type)  
        }
        this.toggleModal();
    }

    render() {
        let modalTitle = (this.props.action === "add" ? "Add new brewery" : "Update")
        return(
            <div>
                <Button className="account--brewery--addButton" onClick={this.toggleModal}><i className="fa fa-building" aria-hidden="true"></i>{modalTitle}</Button>
                <Modal isOpen={this.state.isCommenting} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>{modalTitle}</ModalHeader>
                    <ModalBody>
                        <LocalForm model='brewery' onSubmit={(values) => this.handleSubmit((this.props.action === "add" ? "add" : "update"), this.props.userId, this.props.breweryId, values)}>

                            {/*  Name  */}
                            <Row className = 'form-group'>
                                <Label htmlFor="name" md={2}>Name</Label>
                                <Col md={10}>
                                    <Control.text model=".name" id="name" name="name" rows="1" className='form-control'
                                        validators={{required, minLength:minLength(2), maxLength:maxLength(20)}}/>

                                    <Errors className='text-danger' model='brewery.name' show='touched'
                                        messages={{
                                            required: 'Required. ',
                                            minLength: 'Must be greater than 2 characters. ',
                                            maxLength: 'Must be under 21 characters. '
                                        }}
                                    /> 
                                </Col>
                            </Row>

                            {/*  Street  */}
                            <Row className = 'form-group'>
                                <Label htmlFor="street" md={2}>Street</Label>
                                <Col md={10}>
                                    <Control.text model=".street" id="street" name="street" rows="1" className='form-control'
                                        validators={{required, minLength:minLength(2)}}/>

                                    <Errors className='text-danger' model='brewery.street' show='touched'
                                        messages={{
                                            required: 'Required. ',
                                            minLength: 'Must be greater than 2 characters. '
                                        }}
                                    /> 
                                </Col>
                            </Row>

                            {/*  City  */}
                            <Row className = 'form-group'>
                                <Label htmlFor="city" md={2}>City</Label>
                                <Col md={10}>
                                    <Control.text model=".city" id="city" name="city" rows="1" className='form-control'
                                        validators={{required, minLength:minLength(2)}}/>
                                    <Errors className='text-danger' model='brewery.city' show='touched'
                                        messages={{
                                            required: 'Required. ',
                                            minLength: 'Must be greater than 2 characters. '
                                        }}
                                    />
                                </Col>
                            </Row>

                             {/*  State  */}
                             <Row className = 'form-group'>
                                <Label htmlFor="state" md={2}>State</Label>
                                <Col md={10}>
                                    <Control.text model=".state" id="state" name="state" rows="1" className='form-control'
                                        validators={{required, minLength:minLength(2)}}/>
                                    <Errors className='text-danger' model='brewery.state' show='touched'
                                        messages={{
                                            required: 'Required. ',
                                            minLength: 'Must be greater than 2 characters. '
                                        }}
                                    /> 
                                </Col>
                            </Row>

                            {/*  Country  */}
                            <Row className = 'form-group'>
                                <Label htmlFor="country" md={2}>Country</Label>
                                <Col md={10}>
                                    <Control.text model=".country" id="country" name="country" rows="1" className='form-control'
                                        validators={{required, minLength:minLength(2)}}/>
                                    <Errors className='text-danger' model='brewery.country' show='touched'
                                        messages={{
                                            required: 'Required. ',
                                            minLength: 'Must be greater than 2 characters. '
                                        }}
                                    /> 
                                </Col>
                            </Row>

                            {/*  Postal Code  */}
                            <Row className = 'form-group'>
                                <Label htmlFor="postalCode" md={2}>Postal Code</Label>
                                <Col md={10}>
                                    <Control.text model=".postalCode" id="postalCode" name="postalCode" rows="1" className='form-control'
                                        validators={{required, minLength:minLength(2), maxLength:maxLength(10)}}/>
                                    <Errors className='text-danger' model='brewery.postalCode' show='touched'
                                        messages={{
                                            required: 'Required. ',
                                            minLength: 'Must be greater than two digits. ',
                                            maxLength: 'Must be less than ten digits. '
                                        }}
                                    />   
                                </Col>
                            </Row>

                            {/*  Address 2  */}
                            <Row className = 'form-group'>
                                <Label htmlFor="address2" md={2}>Address 2</Label>
                                <Col md={10}>
                                    <Control.text model=".address2" id="address2" name="address2" rows="1" className='form-control'
                                        validators={{minLength:minLength(2)}}/>
                                    <Errors className='text-danger' model='brewery.address2' show='touched'
                                        messages={{
                                            minLength: 'Must be greater than 2 characters. '
                                        }}
                                    /> 
                                </Col>
                            </Row>

                            {/*  Address 3  */}
                            <Row className = 'form-group'>
                                <Label htmlFor="address3" md={2}>Address 3</Label>
                                <Col md={10}>
                                    <Control.text model=".address3" id="address3" name="address3" rows="1" className='form-control'
                                        validators={{minLength:minLength(2)}}/>
                                    <Errors className='text-danger' model='brewery.address3' show='touched'
                                        messages={{
                                            minLength: 'Must be greater than 2 characters. '
                                        }}
                                    /> 
                                </Col>
                            </Row>

                            {/*  County Province  */}
                            <Row className = 'form-group'>
                                <Label htmlFor="countyProvince" md={2}>County Province</Label>
                                <Col md={10}>
                                    <Control.text model=".countyProvince" id="countyProvince" name="countyProvince" rows="1" className='form-control'
                                        validators={{minLength:minLength(2)}}/>
                                    <Errors className='text-danger' model='brewery.countyProvince' show='touched'
                                        messages={{
                                            minLength: 'Must be greater than 2 characters. '
                                        }}
                                    /> 
                                </Col>
                            </Row>

                            {/*  Phone */}
                            <Row className = 'form-group'>
                                <Label htmlFor="phone" md={2}>Phone</Label>
                                <Col md={10}>
                                    <Control.text model=".phone" id="phone" name="phone" rows="1" className='form-control' 
                                        validators={{required,validPhone}}/>
                                    <Errors className='text-danger' model='brewery.phone' show='touched'
                                        messages={{
                                            required: 'Required. ',
                                            validPhone: 'Must be a valid phone number. '
                                        }}
                                    /> 
                                </Col>
                            </Row>

                            {/*  Website URL   */}
                            <Row className = 'form-group'>
                                <Label htmlFor="websiteUrl" md={2}>Website URL</Label>
                                <Col md={10}>
                                    <Control.text model=".websiteUrl" id="websiteUrl" name="websiteUrl" rows="1" className='form-control'
                                        validators={{validWebsite}}/>
                                    <Errors className='text-danger' model='brewery.websiteUrl' show='touched'
                                        messages={{
                                            validWebsite: 'Must be a valid website link. '
                                        }}
                                    />
                                </Col>
                            </Row>

                            {/*  Longitude   */}
                            <Row className = 'form-group'>
                                <Label htmlFor="longitude" md={2}>Longitude</Label>
                                <Col md={10}>
                                    <Control.text model=".longitude" id="longitude" name="longitude" rows="1" className='form-control'
                                        validators={{validLong}}/>
                                    <Errors className='text-danger' model='brewery.longitude' show='touched'
                                        messages={{
                                            validLong: 'Must be a number between 180 and -180. '
                                        }}
                                    /> 
                                </Col>
                            </Row>

                            {/*  Latitude   */}
                            <Row className = 'form-group'>
                                <Label htmlFor="latitude" md={2}>Latitude</Label>
                                <Col md={10}>
                                    <Control.text model=".latitude" id="latitude" name="latitude" rows="1" className='form-control'
                                        validators={{validLat}}/>  
                                    <Errors className='text-danger' model='brewery.latitude' show='touched'
                                        messages={{
                                            validLat: 'Must be a number between 90 and -90. '
                                        }}
                                    /> 
                                </Col>
                            </Row>

                            {/*  Type  */}
                            <Row className = 'form-group'>
                                <div className="breweryForm--breweryType">
                                    <Col className="breweryForm--breweryType--text">
                                        Type
                                        <Control.select model=".breweryType" name="breweryType" className= 'form-checkinput'>
                                            <option>None</option>
                                            <option>bar</option>
                                            <option>brewpub</option>
                                            <option>closed</option>
                                            <option>contract</option>
                                            <option>large</option>
                                            <option>micro</option>
                                            <option>nano</option>
                                            <option>planning</option>
                                            <option>proprietor</option>
                                            <option>regional</option>
                                            <option>taproom</option>
                                        </Control.select>
                                    </Col>
                                </div>
                            </Row>

                            {/* Other fields like created_at, updated_at, obdb_id, tags will be left alone. */}
                            <Button type="submit" value="submit" color="primary">Submit</Button>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}