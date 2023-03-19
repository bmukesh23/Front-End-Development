'use strict';


const remoteServer = () => {

    const randomNum = Math.truc(Math.random()* 10) + 1;

    if(randomNum <= 5 ){
        apiData = { result: 'Some huge data'};
    }

    return apiData;
}

// let data = remoteServer();

// if(!data){
//     data = {result: 'Data fetching failed'};
// }

// console.log(data.result);

// let data = remoteServer() || {result: 'Data fetching failed'};
// console.log(data.result);