
import { Button } from "@/components/ui/button";
import { Payment, columns } from "./columns"
import { DataTable } from "./data-table"
import { FileText, KeyboardIcon, Table } from "lucide-react";
import { PersonIcon } from "@radix-ui/react-icons";
import { DialogPaiement } from "./dialog";

async function getData(): Promise<Payment[]> {
    // Fetch data from your API here.
    return [
        {
            id: "728ed52f",
            amount: 100,
            status: "pending",
            email: "m@example.com",
        },
        {
            id: "489e1d42",
            amount: 125,
            status: "processing",
            email: "example@gmail.com",
        },
    ]
}

export default async function DemoPayment() {
    const data = await getData();

    return (
        <div className="container mx-auto py-10">
            <p>Paiement </p>
            <div className="grid grid-cols-8 gap-4 " dir="rtl">
                <DialogPaiement />
                <Button><Table className="mr-2 h-4 w-4" />Exporter </Button>
                <Button><FileText className="mr-2 h-4 w-4" /> Imprimer</Button>
            </div>
            <DataTable columns={columns} data={data} />
        </div>
    )
}