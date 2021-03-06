var app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a machine!',
  options: ['One', 'Two']
}


var template = (
  <div>
    <h1>{app.title ? app.title : 'Anonymous'}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? 'Here are your options': 'No options'}</p>

    <ol>
      <li>Item one akti</li>
      <li>Item two</li>
      <li>Item three</li>
    </ol>
  </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
