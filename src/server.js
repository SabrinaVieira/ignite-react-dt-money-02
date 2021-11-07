/* eslint-disable import/no-anonymous-default-export */


import { createServer } from 'miragejs';

export default function () {

    createServer({
        routes(){
            this.namespace = '/api';
        
            this.get('transactions', () => (
                [{
                    id: 1,
                    title: "Transaction 1",
                    amount: 400,
                    type: "deposit",
                    category: 'Food',
                    createAt: new Date(),
                }]
            ))
        }
    })
}