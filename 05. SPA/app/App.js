import API from "./helpers/wp_api.js";
import { ajax } from "./helpers/ajax.js";
import { Loader } from "./components/Loader.js";
import { Header } from "./components/Header.js";

const d = document;

export default function App() {
  const d = document,
  $root = d.getElementById("root");
  $root.appendChild(Header());
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
