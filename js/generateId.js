
//generates random id;
function generateId () {
    let key = () => {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    //return id of format 'aaaaaaaa'-'aaaa'
    return key() + key() + '-' + key() ;
}

export {generateId};

function rondomId () {
    let key = () => {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(8)
            .substring(1);
    }
    //return id of format 'aaaaaaaa'-'aaaa'
    return key() ;
}
