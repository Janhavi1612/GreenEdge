import React, { useState, useEffect } from 'react';

function getJson() {
    return fetch("frontend/src/data/output_small.json")
        .then(response => response.json())
        .catch(error => {
            console.error(error);
        });
}

const FetchJson=()=>{
    fetch('https://getcapstonebucket.s3.us-east-2.amazonaws.com/output_small.json'
        ,{
            headers : {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }
    )
        .then(function(response){
            console.log(response)
            return response.json();
        })
        .then(function(myJson) {
            console.log(myJson);
        });
}

export default FetchJson;