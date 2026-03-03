const errors = {
  instanceError: {
    title: "System message",
    render() {
      return `
        <div>The application only allows for one instance of itself!</div>
      `;
    },
    cloneContent: true
  }
}