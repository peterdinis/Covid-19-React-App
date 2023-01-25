const Wrapper: React.FC = () => {
  return (
    <div className="mt-12 container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pt-6 gap-8">
      <div className="bg-slate-50 rounded border-gray-300  dark:border-gray-700 border-dashed border-2 h-24">
        <h4 className="text-center mt-8 text-2xl font-bold">
            <a href="/stats">All Countries Stats</a>
        </h4>
      </div>

      <div className="bg-slate-50 rounded border-gray-300  dark:border-gray-700 border-dashed border-2 h-24">
        <h4 className="text-center mt-8 text-2xl font-bold">All Deaths</h4>
      </div>

      <div className="bg-slate-50 rounded border-gray-300  dark:border-gray-700 border-dashed border-2 h-24">
        <h4 className="text-center mt-8 text-2xl font-bold">Specific country info</h4>
      </div>
    </div>
  );
};

export default Wrapper;
