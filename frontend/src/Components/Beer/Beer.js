import React from "react"
import { Card, CardImg, CardText, CardTitle,CardBody } from "reactstrap";
import { useEffect } from "react";
import { axios } from "../../Redux/actionTypes";


function Beer(props) {

    const [beerList, setBeerList] = React.useState([])

    useEffect(() => {
        axios.get('/beers').then(function (response){
            setBeerList(response.data)
        })},[])
    
    console.log(props.token)
    if(beerList.length>0){

        return(
        <div className="beer--list">
            {beerList.map(beer => {
                return(
                <div className = 'beer--card--set'>
                    <Card className="beer--card" key = {beer.id}>
                        <CardImg top src = {beer.imageUrl} alt = {beer.name} />
                        <CardBody>
                            <CardTitle className = 'beer--card--name'>{beer.name}</CardTitle>
                            <CardText className = 'beer--card--desc'>{beer.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
                )})    
            }  
        </div>
        )
    }
    else{
        return(
            <>
            </>
        )
    }
}
export default Beer;