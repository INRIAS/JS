import API from "./helpers/wp_api.js";
import { ajax } from "./helpers/ajax.js";
import { Title } from "./components/Title.js";
import { Loader } from "./components/Loader.js";

const d = document;

export default function App() {
  const d = document,
  $root = d.getElementById("root");

  $root.appendChild(Title());
  $root.appendChild(Loader());
  
  ajax({
    url: API.POSTS,
    cbSuccess: (posts) => {
      console.log(posts);
    },
  });

  ajax({
    url: API.CATEGORIES,
    cbSuccess:(categories)=>{
        console.log(categories);
        
    }
  });
}
