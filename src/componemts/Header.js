import React from 'react';
import ReactDOM from 'react-dom';
export default class Header extends React.Component{



render(){
return(
<div>
<h1>Header</h1>
</div>
);
}

}


ReactDOM.render(
  <Header/>,
document.getElementById("start"));
