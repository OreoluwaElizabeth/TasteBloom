import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Component/Header';
import LandingPage from './Component/LandingPage';
import Signup from './Component/Signup';
import Login from './Component/Login';
import Dashboard from './Component/Dashboard';
import CreateRecipe from './Component/CreateRecipe';
import UpdateRecipe from './Component/UpdateRecipe';
import ViewRecipe from './Component/ViewRecipe';
import DeleteRecipes from './Component/DeleteRecipes';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path="/create-recipe" element={<CreateRecipe />}/>
        <Route path="/update-recipe" element={<UpdateRecipe />}/>
        <Route path="/view-recipe" element={<ViewRecipe />}/>
        <Route path="/delete-recipe" element={<DeleteRecipes />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
