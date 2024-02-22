const TodoComputed = ({computedItemsLeft, clearCompleted}) => {
  return(
    <section className="flex justify-between py-4 px-4 bg-white rounded-b-md dark:bg-gray-800">
          <span className="text-gray-400">{computedItemsLeft} items left</span>
          <button className="text-gray-400" onClick={clearCompleted}>Clear Completed</button>
    </section>
  );
};

export default TodoComputed;
