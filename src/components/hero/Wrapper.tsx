const Wrapper: React.FC = () => {
  return (
    <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pt-6 gap-8">
      <div className="rounded border-gray-300  dark:border-gray-700 border-dashed border-2 h-24">
        <h4>All Stats</h4>
      </div>

      <div className="rounded border-gray-300  dark:border-gray-700 border-dashed border-2 h-24">
        <h4>All Deaths</h4>
      </div>

      <div className="rounded border-gray-300  dark:border-gray-700 border-dashed border-2 h-24">
        <h4>Specific country info</h4>
      </div>
    </div>
  );
};

export default Wrapper;
