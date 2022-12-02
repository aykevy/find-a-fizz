import { Component} from "react";
import { Button, Modal, ModalHeader, ModalBody, Label,Row ,Col  } from 'reactstrap';
import {Control, LocalForm} from 'react-redux-form'

export default class NewReview extends Component {

    constructor(props) {
        super(props)
        this.state = {
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

    handleSubmit(values) {
        this.props.postReview(this.props.userId,this.props.id,values.review,values.rating,this.props.type);
        this.toggleModal();
    }

render() {    
    return (
        <>
            <Button className="review--button" onClick={this.toggleModal}> Leave a Review</Button>
            <Modal isOpen={this.state.isCommenting} toggle={this.toggleModal}>
                <ModalHeader toggle={this.toggleModal}> Leave a review </ModalHeader>
                <ModalBody>
                    <LocalForm onSubmit={(values) => this.handleSubmit(values)}>

                        <Row className = 'form-group'>
                            <div className="review--rating">
                                <Col className="review--rating--text">
                                    Rating
                                    <Control.select model=".rating" name="rating"
                                        className= 'form-checkinput'>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                                </Col>
                            </div>
                        </Row>

                        <Row className = 'form-group'>
                            <Label htmlFor="message" md={2}>Your Review</Label>
                            <Col md={10}>
                                <Control.textarea model=".review" id="message" name="message"
                                    rows="12"
                                    className='form-control'>
                                </Control.textarea>
                            </Col>
                        </Row>

                        <Button type="submit" value="submit" color="primary">Submit</Button>
                    </LocalForm>
                </ModalBody>
            </Modal>
        </>
    )}
}