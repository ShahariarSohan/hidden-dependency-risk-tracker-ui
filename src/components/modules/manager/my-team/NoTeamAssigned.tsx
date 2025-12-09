export default function NoTeamAssigned() {
  return (
    <div className="mx-auto max-w-4xl p-6">
      <div className="rounded-2xl border border-yellow-300 bg-yellow-50 p-6 text-center">
        <h2 className="text-xl font-semibold text-yellow-700">
          No Team Assigned
        </h2>
        <p className="mt-2 text-gray-700">
          You currently do not have a team assigned. Please contact an admin.
        </p>
      </div>
    </div>
  );
}