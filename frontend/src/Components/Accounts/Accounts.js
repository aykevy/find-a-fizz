import React, { useState } from 'react';
import './Accounts.css'
import OwnershipTable from '../Owner/OwnershipTable'
import UserData from './UserData';

export default function Accounts(props) {
    const [showSelection, setShowSelection] = useState({show:false})
    const [type, setType] = useState({type:''})

    function toggleWindows(windowType) {

        if (type.type === '' || (type.type !== windowType)) {
            setShowSelection({show: true})
            setType({type:windowType})
        } 
        else {
            setShowSelection({show: false})
            setType({type:''})
        }
    }

    if (props) {
        return (
            <>
                <h1> Welcome back {props.user.username}, please review your account details </h1>
                    <div className='accounts--options--box'>
                        { props.user.authorities[0].name === 'ROLE_BREWER' && 
                            <div className='account--brewery--tables'>
                                <OwnershipTable userId={props.user.id}/>
                            </div>
                        }

                        <div className='break'></div>

                        <div className ={`accounts--selected ${type.type === 'BEER_REVIEWS' ? "active": ''}`}>
                            <h4 onClick = {() => toggleWindows('BEER_REVIEWS')}>
                            <i class="fa fa-comment" aria-hidden="true"/> My Beer Reviews</h4>
                        </div>

                        <div className = {`accounts--selected ${type.type === 'BREWERY_REVIEWS' ? "active": ''}`}>
                            <h4 onClick = {() => toggleWindows('BREWERY_REVIEWS')}>
                            <i class="fa fa-comments" aria-hidden="true"/> My Brewery Reviews</h4>
                        </div>

                        <div className={`accounts--selected ${type.type === 'BEER_FAVORITES' ? "active": ''}`}>
                            <h4 onClick = {() => toggleWindows("BEER_FAVORITES")}>  
                            <i class="fa fa-diamond" aria-hidden="true"/> My Favorited Items</h4>
                        </div>

                        <div className={`accounts--selected ${type.type === 'BREWERY_FAVORITES' ? "active": ''}`}>
                            <h4 onClick = {() => {toggleWindows("BREWERY_FAVORITES");}}>
                            <i class="fa fa-map-o" aria-hidden="true"/> My Favorited Places</h4>
                        </div>
                    </div>

                { showSelection && 
                    <div className='accounts--options--select'>
                        <UserData favorites={props.favorites} getBeer={props.getBeer} deleteUserReview={props.deleteUserReview} userReviews={props.userReviews}
                        user={props.user} beers={props.beers} breweries={props.breweries} type={type.type}/>
                    </div>
                }

                { console.log(showSelection) }
            </>
        )
    } 

    else 
    {
        return <></>
    }
}