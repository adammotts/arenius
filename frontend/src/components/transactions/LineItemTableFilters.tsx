"use client";
import React from "react";
import { DatePickerWithRange } from "./DatePicker";
import PriceFilter from "./PriceFilter";
import EmissionsFactorFilter from "./EmissionsFactorFilter";
import ContactFilter from "./ContactFilter";
import { Button } from "../ui/button";
import { useLineItems } from "@/context/LineItemsContext";

export default function LineItemTableFilters() {
  const { setFilters } = useLineItems();

  return (
    <div className="flex flex-col my-2">
      <div className={styles.container}>
        <DatePickerWithRange className={styles.filter} />
        <EmissionsFactorFilter className={styles.filter} />
        <ContactFilter className={styles.filter} />
        <PriceFilter className={styles.filter} />
      </div>
      <div className="flex justify-end">
        <Button variant="ghost" onClick={() => setFilters({})}>
          Clear filters
        </Button>
      </div>
    </div>
  );
}

const styles = {
  container: "flex gap-4 mt-4 p-4 bg-gray-100 rounded-lg w-full",
  filter: "flex-1 min-w-0 bg-gray-100",
};
