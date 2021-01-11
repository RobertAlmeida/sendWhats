const venom = require('venom-bot');
const Promise = require('bluebird');

async function sendMsg(number) {
    return new Promise(async (resolve, reject) => {
        try {
            const client = await venom.create()
            let retorno = await start(client, number);
            client.close();
            resolve(retorno);
        }
        catch (err) {
            
        }
    });
}

async function start(client, number) {
    return new Promise(async (resolve, reject) => {
        try {

            let send = await client.sendText(`+${number}@c.us`, 'Se essa mensagem der certo, queria dizer que te amo!!!!')
            if(send !== false) {
                send = {send: 'Success!'}
            }else {
                send = {send: 'Fail!'}

            }
            resolve(send);

        }
        catch (err) {
            console.log(err)
        }
    })
}

module.exports = sendMsg;
