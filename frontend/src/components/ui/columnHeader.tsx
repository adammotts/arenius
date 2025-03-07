import React from "react";
import { Column } from "@tanstack/react-table";
import { Button } from "./button";
import Image from "next/image";

type ColumnHeaderProps<T extends object> = {
  column: Column<T>;
  name: string;
  className?: string;
};

function SortIcon() {
  return <Image src={"sort.svg"} width={20} height={20} alt="Sort column" />;
}

const ColumnHeader = <T extends object>({ column, name, className }: ColumnHeaderProps<T>) => {
  return (
    <div className={className}>
      <Button
        className="font-bold"
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        {name}
        <SortIcon />
      </Button>
    </div>
  );
};

export { ColumnHeader };
