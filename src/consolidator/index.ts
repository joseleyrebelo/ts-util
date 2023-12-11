export const newConsolidator = <Unsorted, Sorted>(
  sorter: (entry: Unsorted) => Sorted
) => {
  return (initial: Unsorted[]) => initial.map((entry) => sorter(entry));
};
