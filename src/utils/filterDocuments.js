
export const filterDocuments = (documents, searchTerm) => {
    if (!searchTerm) {
      return documents; // Return all documents if there's no search term
    }

    const lowerCaseSearchTerm = searchTerm.toLowerCase();

    const filteredDocuments = documents.filter(doc =>
      doc.title.toLowerCase().includes(lowerCaseSearchTerm) ||
      doc.type.toLowerCase().includes(lowerCaseSearchTerm) ||
      doc.description.toLowerCase().includes(lowerCaseSearchTerm)
    );
    return filteredDocuments.sort((a, b) => {
      const titleMatchA = a.title.toLowerCase().includes(lowerCaseSearchTerm);
      const titleMatchB = b.title.toLowerCase().includes(lowerCaseSearchTerm);
  
      const descriptionMatchA = a.description?.toLowerCase().includes(lowerCaseSearchTerm);
      const descriptionMatchB = b.description?.toLowerCase().includes(lowerCaseSearchTerm);
  
      const typeMatchA = a.type?.toLowerCase().includes(lowerCaseSearchTerm);
      const typeMatchB = b.type?.toLowerCase().includes(lowerCaseSearchTerm);
  
      // Priority : title > description > type
      if (titleMatchA && !titleMatchB) return -1;
      if (!titleMatchA && titleMatchB) return 1;
  
      if (descriptionMatchA && !descriptionMatchB) return -1;
      if (!descriptionMatchA && descriptionMatchB) return 1;
  
      if (typeMatchA && !typeMatchB) return -1;
      if (!typeMatchA && typeMatchB) return 1;
  
      return 0;
  });
}
  