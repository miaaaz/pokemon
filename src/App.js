import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
       <nav class="navbar navbar-expand-lg navbar-light bg-light">
         <div class="container">
          <a class="navbar-brand" href="#">Pokemon</a>
          
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarText">
            {/* Empty gap */}
            <ul class="navbar-nav mr-auto">
            </ul>

            <span class="navbar-text">
              Sign in
            </span>
            
          </div>
         </div>

      </nav>
    </div>
  );
}

export default App;
