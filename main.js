console.log('react '+React)
console.log('react-dom ' + ReactDOM)

var headerComponent = React.createClass({
  render: function(){
            return React.createElement('nav', {style: {border: "1px solid blue"}},
            	React.createElement('h1', {style: {color: 'red', textAlign:'center'}}, 'Heather Walker'),
              	React.createElement('ul', null,
                React.createElement(listItemComponent,{name:"family"}),
                React.createElement(listItemComponent,{name:"education"}),
                React.createElement(listItemComponent,{name:"hobbies"})
              )
            )
          }
});

var listItemComponent = React.createClass({
  render: function(){
            return React.createElement('li', null,
              React.createElement('a', {href: this.props.link}, this.props.name)
            )
          }
});

var footerComponent = React.createClass({
  render: function(){
            return React.createElement('div', null,
              React.createElement('p', null, 'heather@gmail.com')
            )
          }
});

var mainContentComponent = React.createClass({
  render: function(){
            return React.createElement('div', {style: {display: 'inline-block', verticalAlign: 'top', margin: "10px", padding:'15px', border: "1px solid green", width: '700px'}},
              React.createElement('h1', null, "Family"),
              React.createElement('p', null, "Married with 2 boys."),
              React.createElement('img', {src: 'http://images.clipartpanda.com/clipart-family-clip-art-pictures-family.jpg', alt: 'picture of family', style: {width: '200px'}}),
              React.createElement('h2', null, 'Education'),
              React.createElement('p', null, 'Most recently went to Coding Dojo'),
              React.createElement('img', {src: 'http://www.codingdojo.com/blog/wp-content/uploads/coding_dojo_logo_black.png', alt: 'Coding Dojo logo', style: {width: '200px'}}),
              React.createElement('h3', null, 'Pets'),
              React.createElement('p', null, 'Currently has 1 dog'),
              React.createElement('img', {src: 'http://www.apartmentlisting411.com/images/A-List-Of-The-Smartest-Breeds-Of-Dogs.jpg', alt:'picture of dog', style: {width: '200px'}})
            )
          }
});

var sidebarComponent = React.createClass({
  render: function(){
            return React.createElement('div', {style: {display: 'inline-block', width: "300px", margin: "10px", padding:'15px', border: "1px solid purple"}},
              React.createElement('h1', null, "Sidebar Headline"),
              React.createElement(listItemComponent, {name: "Link to Favorite Website", link:'https://disneyland.disney.go.com/'}),
              React.createElement(listItemComponent, {name: "Link to LinkedIn", link: 'https://www.linkedin.com/in/heatherwalker3'}),
              React.createElement(listItemComponent, {name: "Link to Portfolio", link: 'http://heatherwalker.ladle.net'})
            )
          }
});

var FakeBlog = React.createClass({
  render: function(){
            return React.createElement('div', null,
              React.createElement(headerComponent),
              React.createElement(sidebarComponent),
              React.createElement(mainContentComponent),
              React.createElement('footer', {style :{border: "1px solid black", textAlign: "center", padding: "15px"}},
                "©2016",
                React.createElement(footerComponent)
              )
            )
          }
});

// Next use ReactDOM.render() to place the element to a location in the DOM.
ReactDOM.render(React.createElement(FakeBlog), document.getElementById('app'));

