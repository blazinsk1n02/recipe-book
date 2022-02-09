import './App.css';

import RecipesList from './components/RecipesList';
import CreateRecipeForm from './components/CreateRecipe/CreateRecipeForm';

function App() {
  return (
    <div className="App">
      <RecipesList />
      <CreateRecipeForm />
    </div>
  );
}

export default App;
