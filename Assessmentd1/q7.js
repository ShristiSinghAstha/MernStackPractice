// 7. Store a secret message using closure and allow access only through a returned function.

function createMessage(msg) {
    return function() {
        return msg;
    };
}

const getSecretMsg = createMessage("I lost my 5000 rupees last month.");
console.log(getSecretMsg());

