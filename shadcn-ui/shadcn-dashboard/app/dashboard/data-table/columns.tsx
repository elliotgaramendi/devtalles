"use client"

import { Badge } from "@/components/ui/badge"
import { Payment } from "@/data/payments.data"
import { ColumnDef } from "@tanstack/react-table"

const statusVariants = {
  pending: "outline",
  processing: "info",
  success: "success",
  failed: "destructive",
} as const

type Status = keyof typeof statusVariants

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "clientName",
    header: "Client Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "amount",
    header: () => <div className="text-right">Amount</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"))
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount)

      return <div className="text-right font-medium">{formatted}</div>
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const value = row.getValue("status") as Status

      return (
        <Badge
          variant={statusVariants[value] || "default"}
          capitalize
        >
          {value}
        </Badge>
      )
    },
  },
]
