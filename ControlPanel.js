function ControlPanel(node) {
  this.node = node;
  this.welcomePanel = node.querySelector('.welcome-panel')
  this.askUserNamePanel = node.querySelector('.ask-user-name-panel')
  this.hideAll()
}
ControlPanel.prototype.hideAll = function() {
  this.welcomePanel.style.display = 'none'
  this.askUserNamePanel.style.display = 'none'
}
ControlPanel.prototype.showWelcome = function() {
  this.welcomePanel.style.display = 'block'
  var startButton = this.welcomePanel.querySelector('.start-game')
  startButton.addEventListener('click', function () {
    console.log('button was pressed')
  })
}