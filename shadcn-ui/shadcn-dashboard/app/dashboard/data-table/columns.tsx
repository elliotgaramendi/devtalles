"use client"

import { Payment } from '@/data/payments.data'
import { ColumnDef } from "@tanstack/react-table"

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "amount",
    header: "Amount",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "clientName",
    header: "Client Name",
  }
]
