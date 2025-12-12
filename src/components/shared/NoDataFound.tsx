export default function NoDataFound() {
  return (
    <div className="mx-auto max-w-4xl p-6">
      <div className="rounded-2xl border border-yellow-300 bg-yellow-50 p-6 text-center">
        <h2 className="text-xl font-semibold text-yellow-700">
          No Data Found
        </h2>
        <p className="mt-2 text-gray-700">
          There is no data or there is some issue to load data!
        </p>
      </div>
    </div>
  );
}
