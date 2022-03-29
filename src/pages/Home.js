import React from "react";
import SearchForm from "../components/SearchForm.js"
import CocktailList from "../components/CocktailList.js"
export default function Home(){
    return(
        <main>
            <SearchForm />
            <CocktailList />
        </main>
    )
}