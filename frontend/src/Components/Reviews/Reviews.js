import React from 'react'
import {useEffect} from 'react'
import { baseUrl } from '../../Shared/baseUrl'
import axios from 'axios'
import './Review.css'

function Reviews(props) {
    //TO DO - MOVE TO STORE
    const [reviewList, setReviewList] = React.useState([])
    
    useEffect( () => {
        if ((props.type === 'beer' || props.type === 'brewery') && props !== undefined) {
            let fetchUrl = '';
            if (props.type.toLowerCase() === 'beer') {
                fetchUrl = (baseUrl + "/beerReviews/beerId?beerId=" + props.id);
            }

            else if (props.type.toLowerCase() === 'brewery') {
                fetchUrl = (baseUrl + "/breweryReviews/breweryId?breweryId=" + props.id);
            }

            async function fetchData() {
                const request = await axios.get(fetchUrl);
                setReviewList(request.data);
                return request;
            }
            fetchData();
        }
    }, [props.id, props.type]); /*Whenever you use variables outside of useEffect, important to add them to dependencys*/

    if (reviewList.length > 0) {
        return (  
            <div>
                <table className="review--table">
                    <thead className="review--table--head">
                        <tr>
                            <th>Rating</th>
                            <th>Review</th>
                            <th>Posted By User#</th>
                            <th>Date</th>
                        </tr>
                    </thead>

                    <tbody className="review--table--body">
                        {
                            reviewList.map(item => {
                            return (
                                <tr key={item.id}>
                                    <td>{ item.rating } out of 5</td>
                                    <td>{ item.review === null ? 'No comment left.' : item.review }</td>
                                    <td>{ item.userId }</td>
                                    <td>{ item.createdAt }</td>
                                </tr>
                            )})
                        }
                    </tbody>
                </table>
            </div>
        )}

    else {
        return (
            <div>
                No Reviews. Be the first to leave one!
            </div>
        )
    }
        
        
        
}

export default Reviews;