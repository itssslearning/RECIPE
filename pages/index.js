import { createClient } from 'contentful'
import RecipeCard from '../components/RecipeCard'

export async function getStaticProps() {

  const contentful = require('contentful')

  const client = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  })

  const res = await client.getEntries({ content_type: "recipe" })

  return {
    props: {
      recipes: res.items,
    },
    // revalidate --> to load changes in the web after changes r made at contentful
    revalidate: 1 
  }
}

export default function Recipes({ recipes }) {

  return (
    <div className="recipe-list">
      {
        recipes.map(recipe => (
          <RecipeCard key={recipe.sys.id} recipe={recipe}/>
        )) 
      }

      <style jsx>
        {`
          .recipe-list {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-gap: 20px 60px;
          }
        
        `}
      </style>
    </div>
  )
}