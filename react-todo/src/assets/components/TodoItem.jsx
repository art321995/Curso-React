import CrossIcon from "./icons/CrossIcon";
import IconCheck from "./icons/IconCheck";

const TodoItem = ({todo}) => {

  const {id, title, completed} = todo;
  return(
    <article className="flex gap-4  border-b border-b-gray-400">
            
            <button 
            className={`h-5 w-5 flex-none rounded-full border-2 ${
              completed 
              ? "flex items-center justify-center 
                bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" :
              "inline-block " }`}>

              { completed && <IconCheck/> }
            </button>
            <p className={`text-gray-600 grow ${completed && "line-trough"}`}>{title}</p>
            <button className="flex-none"> <CrossIcon />  </button>
    </article>
  );
};

export default TodoItem; 