"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { IAuditLog } from "@/types/auditLog.interface";
import InfoRow from "@/components/shared/InfoRow";
import { ScrollArea } from "@/components/ui/scroll-area";
import DateCell from "@/components/shared/cell/DateCell";
import { Badge } from "@/components/ui/badge";

interface AuditLogViewDialogProps {
  log: IAuditLog | null;
  open: boolean;
  onClose: () => void;
}

export default function AuditLogViewDialog({
  log,
  open,
  onClose,
}: AuditLogViewDialogProps) {
  if (!log) return null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold flex items-center justify-between">
            <span>Audit Log Details</span>
          </DialogTitle>
        </DialogHeader>

        <ScrollArea className="max-h-[80vh] px-2 py-4">
          <div className="grid grid-cols-2 gap-x-6 gap-y-4">
            <InfoRow 
              label="Action" 
              value={
                <Badge variant="outline" className="capitalize mt-1">
                  {log.action.replace(/_/g, " ").toLowerCase()}
                </Badge>
              } 
            />
            <InfoRow label="Timestamp" value={<DateCell date={log.createdAt} />} />
            
            <div className="col-span-2 border-t pt-4">
              <h3 className="text-sm font-semibold mb-2">Performed By</h3>
              <div className="grid grid-cols-2 gap-4">
                <InfoRow label="Email" value={log.user.email} />
                <InfoRow label="Role" value={log.user.role} />
              </div>
            </div>

            <div className="col-span-2 border-t pt-4">
              <h3 className="text-sm font-semibold mb-2">Entity Context</h3>
              <div className="grid grid-cols-2 gap-4">
                <InfoRow label="Entity ID" value={log.entityId} />
                <InfoRow label="User ID" value={log.userId} />
              </div>
            </div>

            <div className="col-span-2 border-t pt-4">
              <p className="text-xs text-muted-foreground uppercase tracking-widest font-bold mb-3">Event Details</p>
              <div className="bg-muted/50 rounded-lg p-4 font-mono text-sm border shadow-inner whitespace-pre-wrap">
                {log.details || "No additional metadata recorded for this event."}
              </div>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
