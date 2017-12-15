var Contacts = React.createClass({
  propTypes: {
    items: React.PropTypes.array.isRequired,
  },
  render: function() {
    var contacts = this.props.items.map(function(contact) {
      return <Contact item={contact} key={contact.id}></Contact>
      
    });
    return (
      <ul className={'contactList'}>{contacts}</ul>
    );
  }
});

//React.createElement(Contact, {item: contact, key: contact.id});
//React.createElement('ul', {className: 'contactList'}, contacts)