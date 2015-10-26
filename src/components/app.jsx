"use strict";
let React = require('react');

let TopMenuComponent = require('./top-menu-component');
let CarouselComponent = require('./carousel-component');
let ServicesComponent = require('./services-component');
let TeamComponent = require('./team-component');
let BlogComponent = require('./blog-component');

let TweetsComponent = require('./tweets-component');
let ClientsComponent = require('./clients-component');
let FooterComponent = require('./footer-component');

let App = React.createClass ({


  render() {
    return (
      <div>
        
	  	  <TopMenuComponent />
        <CarouselComponent />
        <ServicesComponent />
        <TeamComponent />
        <BlogComponent />
        <TweetsComponent />
        <ClientsComponent />
        <FooterComponent />
	    </div>
    );
  }
});

module.exports = App;