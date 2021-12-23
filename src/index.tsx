/* eslint-disable @typescript-eslint/no-unused-expressions */

import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';
import { App } from './App';


createServer({
  models: {
    transaction: Model,
  },

  seeds(server){
    server.db.loadData({
      transactions: [{
        id: 1,
        title: "Freelancxe WebSite",
        amount: 4000,
        type: "deposit",
        category: 'Dev',
        createAt: new Date('2021-11-11 00:00:00'),
      },
      {
        id: 2,
        title: "Aluguel",
        amount: 1000,
        type: "withdraw",
        category: 'Casa',
        createAt: new Date('2021-11-10 09:00:00'),
      },
    ]
    })
  },

  routes(){
      this.namespace = '/api';
  
      this.get('transactions', () => {
        return this.schema.all('transaction')
      })

      this.post('transactions', (schema, request) => {
        const data = JSON.parse(request.requestBody)
        // schema é o banco, parametros( transactions é a rota, segundo os dados que dseraõ passados paar dentro do model)
        return schema.create('transaction', data)
      })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


