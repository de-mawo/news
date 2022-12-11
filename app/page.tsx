import { categories } from "../constants";
import fetchNews from "../lib/fetchNews";
import NewsList from "./NewsList";
import response from '../response.json'


async function HomePage() {
  //fetch news data
  const news: NewsResponse = response || await fetchNews(categories.join(','));
 

  
  return (
    <div>
      <NewsList news={news}/>

    </div>
  )
}

export default HomePage