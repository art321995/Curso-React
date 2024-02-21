const TodoComputed = (params) => {
  return(
    <section className="flex justify-between py-4 px-4 bg-white rounded-b-md">
          <span className="text-gray-400">5 items left</span>
          <button className="text-gray-400">Clear Completed</button>
    </section>
  );
};

export default TodoComputed;
