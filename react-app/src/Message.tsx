// PascalCasing
function Message() {
  // JSX: JavaScript XML
  const name = 'Nick';
  if (name)
    return <h1>Hello {name}!</h1>;
  return <h1>Hello World!</h1>;
}

// Exporting so that the component can
// can be used elsewhare.
export default Message;