import React from "react";
import { Button, Modal, ModalHeader, ModalBody, Label, Row , Col } from 'reactstrap';
import { Control, LocalForm } from 'react-redux-form';
import { baseUrl } from '../../Shared/baseUrl'
import axios from 'axios';

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
        console.log(putBeerURL)

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
            <div>
                <Button onClick={this.toggleModal}>{modalTitle}</Button>
                <Modal isOpen={this.state.isCommenting} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>{modalTitle}</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleSubmit((this.props.action === "add" ? "add" : "update"), this.props.breweryId, this.props.beerId, values)}>
                            
                            {/*  Name  */}
                             <Row className = 'form-group'>
                                <Label htmlFor="name" md={2}>Name</Label>
                                <Col md={10}>
                                    <Control.textarea model=".name" id="name" name="name" rows="1" className='form-control'>
                                    </Control.textarea>
                                </Col>
                            </Row>

                            {/*  Description  */}
                            <Row className = 'form-group'>
                                <Label htmlFor="description" md={2}>Description</Label>
                                <Col md={10}>
                                    <Control.textarea model=".description" id="description" name="description" rows="1" className='form-control'>
                                    </Control.textarea>
                                </Col>
                            </Row>

                            {/*  Image URL  */}
                            <Row className = 'form-group'>
                                <Label htmlFor="imageUrl" md={2}>Image URL</Label>
                                <Col md={10}>
                                    <Control.textarea model=".imageUrl" id="imageUrl" name="imageUrl" rows="1" className='form-control'>
                                    </Control.textarea>
                                </Col>
                            </Row>

                            {/*  ABV Percent  */}
                            <Row className = 'form-group'>
                                <Label htmlFor="abvPercent" md={2}>ABV Percent</Label>
                                <Col md={10}>
                                    <Control.textarea model=".abvPercent" id="abvPercent" name="abvPercent" rows="1" className='form-control'>
                                    </Control.textarea>
                                </Col>
                            </Row>

                            {/*  Type  */}
                            <Row className = 'form-group'>
                                <Label htmlFor="type" md={2}>Type</Label>
                                <Col md={10}>
                                    <Control.textarea model=".type" id="type" name="type" rows="1" className='form-control'>
                                    </Control.textarea>
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