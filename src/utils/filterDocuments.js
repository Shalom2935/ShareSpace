
export const filterDocuments = (documents, searchTerm) => {
    if (!searchTerm) {
      return documents; // Return all documents if there's no search term
    }
    return documents.filter(doc =>
      doc.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };
  