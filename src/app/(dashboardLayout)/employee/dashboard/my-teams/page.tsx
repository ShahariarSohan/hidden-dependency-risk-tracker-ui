import MyTeamsHeader from "@/components/modules/myTeams/MyTeamHeader";
import MyTeamsTable from "@/components/modules/myTeams/MyTeamTable";
import { getMyTeams } from "@/services/myTeams/myTeams";


const MyTeamsPage = async () => {
  // Fetch teams
  const myTeamsResult = await getMyTeams();
  return (
    <div className="space-y-6">
      {/* Header */}
      <MyTeamsHeader />

      {/* Teams Table */}
      <MyTeamsTable teams={myTeamsResult?.data || []} />
    </div>
  );
};

export default MyTeamsPage;
