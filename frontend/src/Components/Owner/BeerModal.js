import React from "react";
import { Button, Modal, ModalHeader, ModalBody, Label, Row , Col } from 'reactstrap';
import { Control, LocalForm,Errors } from 'react-redux-form';
import { baseUrl } from '../../Shared/baseUrl'
import axios from 'axios';

import '../Accounts/Accounts.css'

const required = (val) => val && val.length;
const minLength = (len) => (val) => val && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
//there's a lot going on here, essentially lots of optional checks for http:\\, the file path names, and then checking lasty it's a valid image react will tack
const validImage = (val) => /^(?:(?<scheme>[^:\/?#]+):)?(?:\/\/(?<authority>[^\/?#]*))?(?<path>[^?#]*\/)?(?<file>[^?#]*\.(?<extension>[Jj][Pp][Ee]?[Gg]|[Pp][Nn][Gg]|[Gg][Ii][Ff]))(?:\?(?<query>[^#]*))?(?:#(?<fragment>.*))?$/gm.test(val)



export default class NewBeerModal extends React.Component {
    

    constructor(props) {
        super(props)
        this.state = {
            isCommenting: false
        }
        this.toggleModal = this.toggleModal.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }


    postBeer(breweryId, name = null, description = null, imageUrl = null, abvPercent = null, type = null)
    {
        const postBeerURL = baseUrl + '/beer';

        axios.post(postBeerURL, {
            name: name,
            description: description,
            imageUrl: imageUrl,
            abvPercent: abvPercent,
            type: type
          })
        
          .then(function(response) {
            const postOwnershipURL = baseUrl + '/breweryProduct';
            let newBeerId = response.data.id;

            axios.post(postOwnershipURL, {
                
                breweryId: breweryId,
                beerId: newBeerId
            })

            .catch(function (error) {
                console.log(error);
            })

          })

          .catch(function (error) {
            console.log(error);
          });
    }

    putBeer(beerId, name = null, description = null, imageUrl = null, abvPercent = null, type = null)
    {
        const putBeerURL = baseUrl + '/beer/' + beerId;
     
        axios.put(putBeerURL, {
            name: name,
            description: description,
            imageUrl: imageUrl,
            abvPercent: abvPercent,
            type: type
          })

          .then(function(response) {
            console.log(response);

          })
        
          .catch(function (error) {
            console.log(error);
          });

    }

    toggleModal() {
        this.setState({
           isCommenting: !this.state.isCommenting     
        })
    }

    handleSubmit(action, breweryId, beerId=null, values) {
        if (action === "add")
        {
            this.postBeer(breweryId, values.name, values.description, values.imageUrl, values.abvPercent, values.type);
        }

        else if (action === "update")
        {
            this.putBeer(beerId, values.name, values.description, values.imageUrl, values.abvPercent, values.type);
        }
    
        this.toggleModal();
    }

    render() {
        let modalTitle = (this.props.action === "add" ? "Add new beer" : "Update beer")
        return( 
            <div className="accounts--add--beer">
                <Button onClick={this.toggleModal}> <i class="fa fa-beer" aria-hidden="true"/>
                        {modalTitle}</Button>
                <Modal isOpen={this.state.isCommenting} toggle={this.toggleModal} backdrop='static' >
                    <ModalHeader toggle={this.toggleModal}>{modalTitle}</ModalHeader>
                    <ModalBody>
                        <LocalForm model= 'beer' onSubmit={(values) => this.handleSubmit((this.props.action === "add" ? "add" : "update"), this.props.breweryId, this.props.beerId, values)}>
                            
                            {/*  Name  */}
                             <Row className = 'form-group'>
                                <Label htmlFor="name" md={2}>Name</Label>
                                <Col md={10}>
                                    <Control.text model=".name" id="name" name="name" rows="1" className='form-control'
                                        validators={{required ,minLength: minLength(3)}}/>

                                    <Errors className='text-danger' model='beer.name' show='touched'
                                            messages={ {
                                                required: 'Required ',
                                                minLength: 'Must be greater than 2 characters '
                                            }}
                                            /> 
                                </Col>
                            </Row>

                            {/*  Description  */}
                            <Row className = 'form-group'>
                                <Label htmlFor="description" md={2}>Description</Label>
                                <Col md={10}>
                                    <Control.text model=".description" id="description" name="description" rows="1" className='form-control'
                                                validators={{required,minLength: minLength(3)}}/>

                                    <Errors className='text-danger' model='beer.description' show='touched'
                                            messages={ {
                                                required: 'Required ',
                                                minLength: 'Must be greater than 2 characters '
                                            }}
                                            />        
                                   
                                </Col>
                            </Row>

                            {/*  Image URL  */}
                            <Row className = 'form-group'>
                                <Label htmlFor="imageUrl" md={2}>Image URL</Label>
                                <Col md={10}>
                                    <Control.text model=".imageUrl" id="imageUrl" name="imageUrl" rows="1" className='form-control'
                                    validators={{required,minLength: minLength(3),validImage}}/>
                                    
                                    <Errors className='text-danger' model='beer.imageUrl' show='touched'
                                            messages={ {
                                                required: 'Required ',
                                                minLength: 'Must be greater than 2 characters ',
                                                validImage: 'Must be a valid image format in ending in .png, .jpeg, or .gif,'
                                            }}
                                            />  
                                    
                                </Col>
                            </Row>

                            {/*  ABV Percent  */}
                            <Row className = 'form-group'>
                                <Label htmlFor="abvPercent" md={2}>ABV Percent</Label>
                                <Col md={10}>
                                    <Control.text model=".abvPercent" id="abvPercent" name="abvPercent" rows="1" className='form-control'
                                    validators={{required,isNumber}}/>

                                    <Errors className='text-danger' model='beer.abvPercent' show='touched'
                                        messages={ {
                                            required: 'Required ',
                                            isNumber: 'Please enter a valid number.'
                                        }}
                                        />  
                                </Col>
                            </Row>

                            {/*  Type  */}
                            <Row className = 'form-group'>
                                <Label htmlFor="type" md={2}>Type</Label>
                                <Col md={10}>
                                    <Control.text model=".type" id="type" name="type" rows="1" className='form-control'>
                                    </Control.text>
                                </Col>
                            </Row>

                            <Button type="submit" value="submit" color="primary">Submit</Button>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}