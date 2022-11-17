import React from 'react'
import {useEffect} from 'react'
import { baseUrl } from '../../Shared/baseUrl'
import axios from 'axios'

function Reviews(props) {
    console.log(props.id)
    const [reviewList, setReviewList] = React.useState([])

    useEffect( () => {
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

    }, [props.id, props.type]); /*Whenever you use variables outside of useEffect, important to add them to dependencys*/
    if(props != undefined && props.id == (1 || 2)){
    return (  
        <div>
            <table className="review--table">
                <thead className="review--table--head">
                    <tr>
                        <th>Rating</th>
                        <th>Review</th>
                        <th>Posted By User Id#</th>
                    </tr>
                </thead>

                <tbody className="review--table--body">
                    {
                        reviewList.map(item => {
                        return (
                            <tr key={item.id}>
                                <td>{ item.rating } out of 5</td>
                                <td>{ item.review }</td>
                                <td>{ item.userId }</td>
                            </tr>
                        )})
                    }
                </tbody>
            </table>
        </div>
    )}
    else if (props != undefined){
        return(<>
        <p>No comments on file, leave one!</p>
        </>)
    }
    else{
        return(<></>)
    }
}

export default Reviews;