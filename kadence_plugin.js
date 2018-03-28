

module.exports.kad_bat = function(node) {


  node.use('BATNODE', (req, res, next) => {
    let contact = node.batNode.address
    if (node.batNode.server){
      res.send(contact);
    } else {
      res.send(['false'])
    }

  });


  node.getOtherBatNodeContact = function(targetNode, callback) {
    let batcontact = node.batNode.address
    node.send('BATNODE', batcontact, targetNode, callback); // batcontact is an object, targetNode is a contact tuple from a bucket
  };

};