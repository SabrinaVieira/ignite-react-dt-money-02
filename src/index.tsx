/* eslint-disable @typescript-eslint/no-unused-expressions */

import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';
import { App } from './App';


createServer({
  models: {
    transaction: Model,
  },

  routes(){
      this.namespace = '/api';
  
      this.get('transactions', () => {
        return this.schema.all('transaction')
      }
      
      // (
      //     [{
      //         id: 1,
      //         title: "Transaction 1",
      //         amount: 400,
      //         type: "deposit",
      //         category: 'Food',
      //         createAt: new Date(),
      //     }]
      // )
      )

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


