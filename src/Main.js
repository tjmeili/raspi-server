import React, { Component } from 'react';
import './main.css';
import { Header, Grid } from 'semantic-ui-react';

class Main extends Component {
    constructor() {
        super();
        this.state = {
            items: []
        }
    }
    componentDidMount(){
        fetch('/api/data')
            .then(res => res.json())
            .then(data => {
                console.log('Data fetched', data);
                this.setState({items: data.items});
            })
            .catch(function(err) {
                console.log('ERROR: ', err);
            });
    }
    render() {
        var itemsList = this.state.items.map(item => {
            return (
                <Grid.Row columns={1}>
                    <Grid.Column>
                        <span>{item.title}</span>
                    </Grid.Column>
                </Grid.Row>
            );
        });
        return (
            <Grid columns={1} padded={true} ver>
                <Grid.Column>
                    <Header as={'h1'}>List of Stuff</Header>
                    <Grid divided={'vertically'} padded={true}>
                        {itemsList}
                    </Grid>
                </Grid.Column>
            </Grid>
        );
    }
}


export default Main;
