import React, { Component } from 'react';

import './style.css';

class Hearder extends Component
{
  render()
  {
    return(
        <div className="row">
          <div className="col-md-12 text-center " id="Hearder">
            <h2>Deputados</h2>
          </div>
          <div className="col-md-12 lista_amarela"></div>
        </div>
    );
  }
}

export default Hearder;
