interface PageProps {
  params: { tag: string[] };
}

function FilteredNotesPage({ params }: PageProps) {
  const tag = params.tag?.[0] || 'all';
}

export default FilteredNotesPage;