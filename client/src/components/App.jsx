import React from 'react';
import $ from 'jquery';
// import styled from 'styled-components';
// import style from './styles/App.css';
const styled = window.styled;
import List from './List.jsx';
import Map from './Map.jsx';

/* BEGINNING OF STYLING */
var AppStyle = styled.div`
    width: inherit;
    height: inherit;
    display: flex;
`
var Page = styled.div`
`
/* END OF STYLING*/
var request = () => {
    $.get(`/`, null, () => {
        console.log('request sent')
    })
}
var testData = () => {
    $.get('http://localhost:3005/experiences/', null, (experiences) => {
        this.setState({expList: experiences})
        console.log({experiences: experiences})
        console.log(this.expList)
    })
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expList: {}
        }
    }
    render() {
        return (
        <Page>
            <button /*className={style.request}*/ onClick={request} >request</button>
            <button onClick={testData} >test data</button>
            <AppStyle>
                <List items={this.state.expList}/>
                <Map />
            </AppStyle>
        </Page>
        )
    }
    componentDidMount(){
     $.get('/experiences/', null, (experiences) => {
    // console.log("Mounted", experiences, this.state.expList)
    this.setState({expList: experiences})
    // console.log(this.state.expList)
    }, 'json');
    }
}


// const App = () => {

//     return(
//         <Page>
//             <Container>SOME TEXT
//             </Container>

//             <button /*className={style.request}*/ onClick={request} >request</button>
//             <button onClick={testData} >test data</button>
//         <div className="app" style={appStyle}>
//         <List />
//         <Map />
//         </div>
//         </Page>
//     )
// }

export default App;
