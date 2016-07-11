var page = new tabris.Page({
  title: 'Example App',
  topLevel: true
});

var button = new tabris.Button({
  centerX: 0, centerY: 100,
  text: 'Log an error!'
}).appendTo(page);

button.on('select', function() {
  console.error('Error!');
});

page.open();

