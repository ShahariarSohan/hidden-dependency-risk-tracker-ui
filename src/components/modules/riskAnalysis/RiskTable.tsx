import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

import { TrendingUp, Award } from "lucide-react";
import RiskStatusCell from "@/components/shared/cell/RiskStatusCell";
import { RiskLevel } from "@/types/risk.interface";

type RiskItem = {
  employeeId?: string;
  systemId?: string;
  teamId?: string;
  name: string;
  riskScore: number;
  riskLevel: RiskLevel;
};

interface RiskTableProps {
  title: string;
  description?: string;
  rows: RiskItem[];
  empty?: string;
  showLimit?: number;
  showRank?: boolean;
}

export default function RiskTable({
  title,
  description,
  rows,
  empty = "No items found",
  showLimit = 10,
  showRank = true,
}: RiskTableProps) {
  const displayRows = rows.slice(0, showLimit);

  return (
    <Card className="w-full shadow-sm hover:shadow-md transition-shadow">
      <CardHeader className="border-b bg-muted/30">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-xl font-bold flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-red-600" />
              {title}
            </CardTitle>
            {description && (
              <CardDescription className="mt-1">{description}</CardDescription>
            )}
          </div>
          <Badge variant="secondary" className="text-sm font-semibold">
            {rows.length} Total
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/50 hover:bg-muted/50">
                {showRank && (
                  <TableHead className="w-20 font-bold text-center">
                    Rank
                  </TableHead>
                )}
                <TableHead className="font-bold">Name</TableHead>
                <TableHead className="font-bold text-right w-32">
                  Risk Score
                </TableHead>
                <TableHead className="font-bold text-center w-32">
                  Status
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {displayRows.length === 0 ? (
                <TableRow>
                  <TableCell
                    colSpan={showRank ? 4 : 3}
                    className="text-center py-12 text-muted-foreground"
                  >
                    <div className="flex flex-col items-center gap-2">
                      <Award className="h-10 w-10 text-muted-foreground/30" />
                      <span>{empty}</span>
                    </div>
                  </TableCell>
                </TableRow>
              ) : (
                displayRows.map((row, idx) => (
                  <TableRow
                    key={idx}
                    className="hover:bg-muted/30 transition-colors group"
                  >
                    {showRank && (
                      <TableCell className="text-center font-bold text-muted-foreground">
                        <div className="flex items-center justify-center">
                          {idx < 3 ? (
                            <div
                              className={`
                              w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm
                              ${
                                idx === 0
                                  ? "bg-yellow-100 text-yellow-700 ring-2 ring-yellow-400"
                                  : ""
                              }
                              ${
                                idx === 1
                                  ? "bg-gray-100 text-gray-700 ring-2 ring-gray-400"
                                  : ""
                              }
                              ${
                                idx === 2
                                  ? "bg-orange-100 text-orange-700 ring-2 ring-orange-400"
                                  : ""
                              }
                            `}
                            >
                              {idx + 1}
                            </div>
                          ) : (
                            <span>#{idx + 1}</span>
                          )}
                        </div>
                      </TableCell>
                    )}
                    <TableCell className="font-semibold group-hover:text-primary transition-colors">
                      {row.name}
                    </TableCell>
                    <TableCell className="text-right">
                      <Badge
                        variant="outline"
                        className="font-bold text-base px-3 py-1"
                      >
                        {row.riskScore}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-center">
                      <div className="flex justify-center">
                        <RiskStatusCell riskLevel={row.riskLevel} />
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
