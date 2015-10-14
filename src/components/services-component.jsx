"use strict";
let React = require('react');
let AppStore = require('../stores/app-store');

let ServiceItem = React.createClass({
  render() {
  let icon = 'fa ' + this.props.service.icon + ' fa-stack-1x';
    return (
      <div className="col-md-4">
        <div className="templatemo-service-item">
        
          <div>
            <div className="col-xs-2">
              <span className="fa-stack fa-lg">
                <i className="fa fa-square-o fa-stack-2x"></i>
                <i className={icon}></i>
              </span>
            </div>
            <div className="col-xs-10">
              <span className="templatemo-service-item-header">{this.props.service.title.toUpperCase()}</span>
            </div>
          </div>
          <p></p><p></p>
          <p>{this.props.service.description}</p>
          <br className="clearfix"/>
        </div>
        <div className="clearfix"></div>
      </div>
    ); 
  }
});
let ServicesComponent = React.createClass ({

  getInitialState() {
    return {    
       servicesData: AppStore.getServices()
    };
  },
  componentWillMount() {
    AppStore.addChangeListener(this._onChange); 
  },
 
  
  componentWillUnmount() {
    AppStore.removeChangeListener(this._onChange); 
  },
  
  _onChange() {
    console.log('changing services componenet');
    this.setState({ 
      servicesData: AppStore.getServices() 
    });
  },
  
  render() {
  
    let serviceItems = this.state.servicesData.list.map(function(service) {
    
      return (
        <ServiceItem service={service} key={service.id} />
      );
    });
    
    return (
        <div className="templatemo-service" id="templatemo-portfolio">
          <div className="container">
            <div className="row" style={{marginTop: '70px'}}>
              <div className="templatemo-line-header" style={{marginTop: '0px'}} >
                <div className="text-center">
                  <hr className="team_hr team_hr_left hr_gray"/><span className="span_blog txt_darkgrey">{this.state.servicesData.title.toUpperCase()}</span>
                  <hr className="team_hr team_hr_right hr_gray" />
                </div>
              </div>
              <br className="clearfix"/>
            </div>
            <div className="row">
      
              {serviceItems} 
      
            </div>
          </div>
        </div>
    );
  }
});

module.exports = ServicesComponent;