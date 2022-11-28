import React from "react";
import { Button, Modal, ModalHeader, ModalBody, Label, Row , Col } from 'reactstrap';
import { Control, LocalForm } from 'react-redux-form';
import { baseUrl } from '../../Shared/baseUrl'
import axios from 'axios';

export default class DeleteEntryModal extends React.Component {
    constructor(props){
        super(props)
        this.state={
            isCommenting:false
        }
        this.toggleModal = this.toggleModal.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    toggleModal() {
        this.setState({
           isCommenting: !this.state.isCommenting     
        })
    }

    deleteBrewery(breweryId, yesOrNo = "Yes")
    {
        if (yesOrNo === "Yes")
        {
            const deleteBreweryURL = baseUrl + '/brewery/' + breweryId;
            axios.delete(deleteBreweryURL)
            .catch(function (error) {
                console.log(error);
            });
        }
    }

    deleteBeer(beerId, yesOrNo = "Yes")
    {
        if (yesOrNo === "Yes")
        {
            const deleteBeerURL = baseUrl + '/beer/' + beerId;
            axios.delete(deleteBeerURL)
            .catch(function (error) {
                console.log(error);
            });
            
        }
    }

    handleSubmit(beerOrBrewery, breweryId=null, beerId=null, values){
        if (beerOrBrewery === "brewery")
        {
            this.deleteBrewery(breweryId, values.confirmDelete);
        }
        else if (beerOrBrewery === "beer")
        {
            this.deleteBeer(beerId, values.confirmDelete)
        }
        this.toggleModal();
    }

    render() {
        let modalTitle = (this.props.beerOrBrewery === "brewery" ? "Delete brewery" : "Delete beer")
        return (
            <div>
            <Button onClick={this.toggleModal}>{modalTitle}</Button>
                <Modal isOpen={this.state.isCommenting} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>{modalTitle}</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleSubmit((this.props.beerOrBrewery === "brewery" ? "brewery" : "beer"), this.props.breweryId, this.props.beerId, values)}>
                            
                             {/*  Yes or No  */}
                             <Row className = 'form-group'>
                                <div className="confirm--delete">
                                    <Col className="confirm--delete--text">
                                        Are you sure you want to delete?
                                        <Control.select model=".confirmDelete" name="confirmDelete" className= 'form-checkinput'>
                                            <option>Yes</option>
                                            <option>No</option>
                                        </Control.select>
                                    </Col>
                                </div>
                            </Row>

                            <Button type="submit" value="submit" color="primary">Submit</Button>
                        </LocalForm>
                    </ModalBody>
                </Modal>
        </div>
        )
    }
}