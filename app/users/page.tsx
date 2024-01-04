
import { Button } from "@/components/ui/button";
import { User, columns } from "./columns"
import { DataTable } from "./data-table"
import { FileText, Table } from "lucide-react";
import { DialogAjout } from "./dialog";
import {prisma} from "@/lib/prismaconfig";




async function getData(): Promise<User[]> {
    // Fetch data from your API here.
    return await prisma.user.findMany();
}

export default async function UserPage() {
    const data = await getData();
    
    return (
        <div className="container mx-auto py-10">
            <p>Paiement </p>
            <div className="grid grid-cols-8 gap-4 " dir="rtl">
                <DialogAjout />
                <Button><Table className="mr-2 h-4 w-4" />Exporter </Button>
                <Button><FileText className="mr-2 h-4 w-4" /> Imprimer</Button>
            </div>
            <DataTable columns={columns} data={data} />
        </div>
    )
}