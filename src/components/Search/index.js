import React, { Component } from 'react';
import api from '../../services/api';

import './style.css';

class Search extends Component
{

    state = {
        deputados: [],
    }

    componentDidMount()
    {
        this.loadDeputados();
    }

    loadDeputados = async () => {
        const response = await api.get(`/api/v2/deputados/`);

        // const { docs } = response.dados;

        console.log(response.data.dados);
        this.setState({ deputados: response.data.dados});
    }

    render()
    {   
        const {deputados} = this.state;
        
        return(
        <div className="container">
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                </div>
                <div className="col-md-4"></div>
            </div>
            {
                deputados.map((deputado, k) => (
                    <div className="row" id="card" key={k}>
                        <div className="col-md-3">
                            <img src={deputado.urlFoto} id="img" />
                        </div>
                        <div className="col-md-9">
                            <p><b>Deputado: </b> { deputado.nome }</p>
                            <p><b>Partido: </b> { deputado.siglaPartido } - {deputado.siglaUf} </p>
                            <p><b>Email: </b> <a href="#">{ deputado.email }</a></p>
                            <a target="_blank" href={deputado.uri}>Ver gastos</a>
                        </div>
                    </div>
                ))
            }
            
        </div>
        );
    }
}

export default Search;
